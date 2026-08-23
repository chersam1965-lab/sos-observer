#!/data/data/com.termux/files/usr/bin/bash

ROOT="./gsos/runtime"

echo "================================"
echo " GSOS Runtime Watchdog"
echo "================================"
echo

BUS="$ROOT/eventbus/events.bus"

if [ ! -f "$BUS" ]; then
    echo "EventBus Missing"
    exit 1
fi

LAST_EVENT=$(tail -n 1 "$BUS" | awk '{print $3}')

echo "Last Event : $LAST_EVENT"
echo

case "$LAST_EVENT" in

RUNTIME_FAILED)

echo "[WATCHDOG] Failure detected"

"$ROOT/eventbus/publish.sh" RECOVERY_STARTED

;;

RECOVERY_COMPLETED)

echo "[WATCHDOG] System Healthy"

;;

RUNTIME_RUNNING)

echo "[WATCHDOG] Runtime Running"

;;

*)

echo "[WATCHDOG] Monitoring..."

;;

esac

exit 0
