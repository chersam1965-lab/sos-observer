#!/data/data/com.termux/files/usr/bin/bash

BUS="./gsos/runtime/eventbus/events.bus"

EVENT="$1"

if [ -z "$EVENT" ]; then
    echo "Usage:"
    echo "./publish.sh EVENT_NAME"
    exit 1
fi

DATE=$(date "+%Y-%m-%d %H:%M:%S")

echo "[$DATE] $EVENT" >> "$BUS"

echo "Published : $EVENT"

exit 0
