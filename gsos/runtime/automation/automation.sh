#!/data/data/com.termux/files/usr/bin/bash

STATE="./gsos/runtime/state/runtime.state"

LOGGER="./gsos/runtime/events/logger.sh"

RECOVERY="./gsos/runtime/recovery/recovery.sh"

MONITOR="./gsos/runtime/monitor/runtime-monitor.sh"

if [ ! -f "$STATE" ]; then
    echo "Runtime state missing."
    exit 1
fi

STATUS=$(cat "$STATE")

echo "================================"
echo " GSOS Automation Engine"
echo "================================"
echo

echo "Current State : $STATUS"

echo

case "$STATUS" in

FAILED)

echo "[AUTO] Failure detected."

[ -x "$LOGGER" ] && "$LOGGER" INFO "Automation detected FAILURE"

echo

echo "[AUTO] Starting Recovery..."

"$RECOVERY"

;;

RUNNING)

echo "[AUTO] Runtime Healthy."

;;

STOPPED)

echo "[AUTO] Runtime Stopped."

;;

INITIALIZED)

echo "[AUTO] Runtime Ready."

;;

*)

echo "[AUTO] Unknown Runtime State."

;;

esac

echo

echo "Automation Completed."

exit 0
