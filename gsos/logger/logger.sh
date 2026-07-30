#!/data/data/com.termux/files/usr/bin/bash

LOGDIR="$HOME/sos-observer/gsos/logger"

mkdir -p "$LOGDIR"

DATE=$(date "+%Y-%m-%d %H:%M:%S")

EVENT="$1"

MESSAGE="$2"

echo "[$DATE] [$EVENT] $MESSAGE" >> "$LOGDIR/history.log"

echo "Log recorded."
