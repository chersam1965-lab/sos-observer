const http = require("http");
const fs = require("fs");
const path = require("path");

const HOST = process.env.GSOS_HOST || "127.0.0.1";
const PORT = Number(process.env.GSOS_PORT || 8080);

const ROOT = path.resolve(__dirname, "../..");
const STATE = path.join(ROOT, "runtime-v2", "state");
const LOGS = path.join(ROOT, "runtime-v2", "logs");

function readFileSafe(file) {
  try {
    return fs.readFileSync(file, "utf8").trim();
  } catch {
    return null;
  }
}

function getState() {
  return {
    decision: readFileSafe(path.join(STATE, "decision.state")),
    policy: readFileSafe(path.join(STATE, "policy.state")),
    execution: readFileSafe(path.join(STATE, "execution.state")),
    service: readFileSafe(path.join(STATE, "service.state"))
  };
}

function health() {
  const s = getState();

  const healthy =
    s.decision !== null &&
    s.policy !== null &&
    s.execution !== null &&
    s.service !== null &&
    s.service.includes("WATCHDOG_STATE=ONLINE");

  return {
    health: healthy ? "HEALTHY" : "DEGRADED",
    runtime_consistency:
      healthy ? "OK" : "CHECK_REQUIRED",
    runtime_mode:
      s.service?.match(/RUNTIME_STATE=([^\n]+)/)?.[1] || "UNKNOWN",
    watchdog_state:
      s.service?.match(/WATCHDOG_STATE=([^\n]+)/)?.[1] || "UNKNOWN",
    timestamp: new Date().toISOString()
  };
}

function sendJson(res, code, data) {
  const body = JSON.stringify(data, null, 2);

  res.writeHead(code, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Cache-Control": "no-store"
  });

  res.end(body);
}

function serveWeb(res) {
  const file = path.join(__dirname, "../public/index.html");

  try {
    const html = fs.readFileSync(file, "utf8");

    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store"
    });

    res.end(html);
  } catch {
    sendJson(res, 500, {
      error: "WEB_INTERFACE_UNAVAILABLE"
    });
  }
}

const server = http.createServer((req, res) => {
  if (req.method === "OPTIONS") {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization"
    });
    return res.end();
  }

  if (req.url === "/") {
    return serveWeb(res);
  }

  if (req.url === "/api/v1/status") {
    return sendJson(res, 200, {
      service: "GSOS",
      version: "V2",
      state: getState()
    });
  }

  if (req.url === "/api/v1/health") {
    return sendJson(res, 200, health());
  }

  if (req.url === "/api/v1/runtime") {
    return sendJson(res, 200, {
      service: "GSOS",
      runtime: getState(),
      health: health()
    });
  }

  if (req.url === "/api/v1/logs/latest") {
    const log = readFileSafe(
      path.join(LOGS, "phase2-runtime.log")
    );

    return sendJson(res, 200, {
      available: log !== null,
      log: log ? log.split("\n").slice(-100) : []
    });
  }

  return sendJson(res, 404, {
    error: "NOT_FOUND"
  });
});

server.listen(PORT, HOST, () => {
  console.log("================================");
  console.log(" GSOS WEB API V2");
  console.log("================================");
  console.log(`http://${HOST}:${PORT}`);
  console.log("");
  console.log("Endpoints:");
  console.log("/api/v1/status");
  console.log("/api/v1/health");
  console.log("/api/v1/runtime");
  console.log("/api/v1/logs/latest");
  console.log("");
  console.log("Press CTRL+C to stop.");
});
