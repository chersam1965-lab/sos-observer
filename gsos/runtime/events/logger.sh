#!/data/data/com.termux/files/usr/bin/bash

EVENT_LOG="./gsos/runtime/events/runtime-events.log"

mkdir -p ./gsos/runtime/events

TIMESTAMP=$(date "+%Y-%m-%d %H:%M:%S")

TYPE="$1"
MESSAGE="$2"

if [ -z "$TYPE" ] || [ -z "$MESSAGE" ]; then
    echo "Usage:"
    echo "./logger.sh INFO \"message\""
    exit 1
fi

echo "[$TIMESTAMP] [$TYPE] $MESSAGE" >> "$EVENT_LOG"

echo "Event Recorded."
exit 0
