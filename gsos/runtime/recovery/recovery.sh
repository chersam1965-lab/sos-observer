#!/data/data/com.termux/files/usr/bin/bash

STATE_FILE="./gsos/runtime/state/runtime.state"
LOGGER="./gsos/runtime/events/logger.sh"

if [ ! -f "$STATE_FILE" ]; then
    echo "Runtime state not found."
    exit 1
fi

STATE=$(cat "$STATE_FILE")

echo "================================"
echo " GSOS Runtime Recovery Manager"
echo "================================"

echo "Current State : $STATE"

case "$STATE" in

FAILED)

echo
echo "[RECOVERY] Failure detected."

[ -x "$LOGGER" ] && "$LOGGER" INFO "Recovery started"

echo "INITIALIZED" > "$STATE_FILE"

[ -x "$LOGGER" ] && "$LOGGER" PASS "Recovery completed"

echo "Recovery Successful."

;;

*)

echo
echo "No recovery required."

;;

esac

exit 0
