#!/data/data/com.termux/files/usr/bin/bash

BUS="./gsos/runtime/eventbus/events.bus"

echo "================================"
echo " GSOS Event Router"
echo "================================"
echo

if [ ! -f "$BUS" ]; then
    echo "Event Bus Not Found."
    exit 1
fi

LAST_EVENT=$(tail -n 1 "$BUS" | awk '{print $3}')

echo "Last Event : $LAST_EVENT"
echo

case "$LAST_EVENT" in

RUNTIME_FAILED)

    echo "Routing -> Recovery Listener"
    ./gsos/runtime/listeners/recovery-listener.sh

;;

RECOVERY_COMPLETED)

    echo "Routing -> Decision Engine"
    ./gsos/runtime/decision/decision-engine.sh

;;

RUNTIME_RUNNING)

    echo "Routing -> Runtime Monitor"
    ./gsos/runtime/monitor/runtime-monitor.sh

;;

*)

    echo "No Route Available"

;;

esac

exit 0
