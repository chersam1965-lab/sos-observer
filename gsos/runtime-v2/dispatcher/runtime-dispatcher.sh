#!/data/data/com.termux/files/usr/bin/bash

ROOT="./gsos/runtime-v2"

echo "================================"
echo " GSOS Runtime Dispatcher V2"
echo "================================"
echo

EVENT=$(tail -1 "$ROOT/events/runtime-events.log" 2>/dev/null)

if [ -z "$EVENT" ]; then
    EVENT="NO_EVENT"
fi

echo "Last Event : $EVENT"
echo

echo "Routing Event..."

echo "Decision Engine Selected"

exit 0
