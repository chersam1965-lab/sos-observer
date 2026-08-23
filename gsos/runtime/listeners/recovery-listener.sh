#!/data/data/com.termux/files/usr/bin/bash

BUS="./gsos/runtime/eventbus/events.bus"

echo "================================"
echo " GSOS Recovery Listener"
echo "================================"
echo

LAST_EVENT=$(tail -n 1 "$BUS" | awk '{print $3}')

echo "Last Event : $LAST_EVENT"
echo

if [ "$LAST_EVENT" = "RUNTIME_FAILED" ]; then

    echo "[Listener] Launching Recovery..."

    ./gsos/runtime/recovery/recovery-manager.sh

else

    echo "[Listener] Nothing To Recover."

fi

exit 0
