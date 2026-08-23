#!/data/data/com.termux/files/usr/bin/bash

BUS="./gsos/runtime/eventbus/events.bus"

LAST_EVENT=$(tail -n 1 "$BUS" | awk '{print $3}')

echo "================================"
echo " GSOS Event Router"
echo "================================"
echo

echo "Last Event : $LAST_EVENT"

case "$LAST_EVENT" in

RUNTIME_FAILED)

    echo "Routing -> Recovery Manager"

    ;;

RECOVERY_COMPLETED)

    echo "Routing -> Decision Engine"

    ;;

RUNTIME_RUNNING)

    echo "Routing -> Metrics Engine"

    ;;

*)

    echo "No Route"

    ;;

esac

exit 0
