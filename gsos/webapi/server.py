#!/data/data/com.termux/files/usr/bin/python

import json
import os
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

ROOT = os.environ.get("GSOS_ROOT", os.path.expanduser("~/sos-observer"))
STATE = os.path.join(ROOT, "gsos", "runtime-v2", "state")

HOST = os.environ.get("HOST", "0.0.0.0")
PORT = int(os.environ.get("PORT", "8787"))


def read_state(name, default="UNKNOWN"):
    path = os.path.join(STATE, name)

    try:
        with open(path, "r", encoding="utf-8") as f:
            value = f.read().strip()

        return value if value else default

    except Exception:
        return default


def read_service_state():
    result = {}
    path = os.path.join(STATE, "service.state")

    try:
        with open(path, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()

                if "=" in line:
                    key, value = line.split("=", 1)
                    result[key] = value

    except Exception:
        pass

    return result


def build_status():
    service = read_service_state()

    return {
        "system": "GSOS",
        "version": "V2",
        "api": "remote-capable",
        "decision": read_state("decision.state", "NO_ACTION"),
        "policy": read_state("policy.state", "NO_ACTION"),
        "execution": read_state("execution.state", "NOTHING_TO_EXECUTE"),
       "runtime_state": service.get("RUNTIME_STATE", "IDLE"),
        "watchdog_state": service.get("WATCHDOG_STATE", "ONLINE"),
        "service_state": service.get("GSOS_SERVICE", "RUNNING"),
    }


class Handler(BaseHTTPRequestHandler):

    def send_json(self, payload, status=200):
        body = json.dumps(
            payload,
            ensure_ascii=False,
            indent=2
        ).encode("utf-8")

        self.send_response(status)
        self.send_header(
            "Content-Type",
            "application/json; charset=utf-8"
        )
        self.send_header(
            "Content-Length",
            str(len(body))
        )
        self.send_header(
            "Cache-Control",
            "no-store"
        )
        self.send_header(
            "Access-Control-Allow-Origin",
            "*"
        )
        self.send_header(
            "Access-Control-Allow-Methods",
            "GET, POST, OPTIONS"
        )
        self.send_header(
            "Access-Control-Allow-Headers",
            "Content-Type"
        )
        self.end_headers()

        self.wfile.write(body)

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header(
            "Access-Control-Allow-Methods",
            "GET, POST, OPTIONS"
        )
        self.send_header(
            "Access-Control-Allow-Headers",
            "Content-Type"
        )
        self.end_headers()

    def do_GET(self):

        if self.path == "/":
            self.send_json({
                "service": "GSOS Web/API",
                "version": "V2",
                "status": "online",
                "access": "remote-capable",
                "endpoints": [
                    "/ping",
                    "/status"
                ]
            })
            return

        if self.path == "/ping":
            self.send_json({
                "ok": True,
                "service": "GSOS",
                "version": "V2",
                "access": "remote-capable"
            })
            return

        if self.path == "/status":
            self.send_json(build_status())
            return

        if self.path == "/control":
            self.send_json({
                "service": "GSOS",
                "control_api": "available",
                "allowed_actions": [
                    "NO_ACTION",
                    "START_OBSERVATION",
                    "STOP_OBSERVATION"
                ],
                "remote_shell": False,
                "arbitrary_execution": False
            })
            return

        self.send_json({
            "error": "NOT_FOUND"
        }, 404)

    def do_POST(self):

        if self.path != "/control":
            self.send_json({
                "error": "NOT_FOUND"
            }, 404)
            return

        try:
            length = int(self.headers.get("Content-Length", "0"))
            raw = self.rfile.read(length)
            data = json.loads(raw.decode("utf-8"))
            action = data.get("action")
        except Exception:
            self.send_json({
                "ok": False,
                "error": "INVALID_JSON"
            }, 400)
            return

        allowed = {
            "NO_ACTION",
            "START_OBSERVATION",
            "STOP_OBSERVATION"
        }

        if action not in allowed:
            self.send_json({
                "ok": False,
                "error": "ACTION_NOT_ALLOWED",
                "allowed_actions": sorted(allowed),
                "remote_shell": False,
                "arbitrary_execution": False
            }, 400)
            return

        observation_path = os.path.join(
            STATE,
            "observation.state"
        )

        service_path = os.path.join(
            STATE,
            "service.state"
        )

        runtime_state = "IDLE"

        if action == "START_OBSERVATION":
            runtime_state = "OBSERVING"

        elif action == "STOP_OBSERVATION":
            runtime_state = "IDLE"

        try:
            os.makedirs(STATE, exist_ok=True)

            with open(
                observation_path,
                "w",
                encoding="utf-8"
            ) as f:
                f.write(runtime_state + "\n")

            service = read_service_state()
            service["RUNTIME_STATE"] = runtime_state

            with open(
                service_path,
                "w",
                encoding="utf-8"
            ) as f:
                for key, value in service.items():
                    f.write(f"{key}={value}\n")

        except Exception:
            self.send_json({
                "ok": False,
                "service": "GSOS",
                "action": action,
                "accepted": False,
                "error": "STATE_WRITE_FAILED",
                "remote_shell": False,
                "arbitrary_execution": False
            }, 500)
            return

        self.send_json({
            "ok": True,
            "service": "GSOS",
            "action": action,
            "accepted": True,
            "runtime_state": runtime_state,
            "remote_shell": False,
            "arbitrary_execution": False
        })

    def log_message(self, fmt, *args):
        print(
            "%s - %s" % (
                self.address_string(),
                fmt % args
            ),
            flush=True
        )


def main():

    print(
        f"GSOS API STARTING HOST={HOST} PORT={PORT}",
        flush=True
    )

    server = ThreadingHTTPServer(
        (HOST, PORT),
        Handler
    )

    print(
        f"GSOS API READY http://0.0.0.0:{PORT}",
        flush=True
    )

    try:
        server.serve_forever()

    except KeyboardInterrupt:
        print("GSOS API STOPPED", flush=True)

    finally:
        server.server_close()


if __name__ == "__main__":
    main()
