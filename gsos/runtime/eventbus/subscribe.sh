#!/data/data/com.termux/files/usr/bin/bash

BUS="./gsos/runtime/eventbus/events.bus"

echo "================================"
echo " GSOS Event Subscriber"
echo "================================"
echo

if [ ! -f "$BUS" ]; then
    echo "Event Bus not found."
    exit 1
fi

echo "Listening for Events..."
echo

tail -f "$BUS"
