#!/data/data/com.termux/files/usr/bin/bash

EVENT="./gsos/runtime-v2/events/event.log"

echo "[GSOS EVENTBUS] Started"

echo "$(date) SYSTEM_EVENT=BUS_READY" >> "$EVENT"

echo "EventBus Status : READY"
