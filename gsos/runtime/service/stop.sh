#!/data/data/com.termux/files/usr/bin/bash

ROOT="./gsos/runtime"

echo "================================"
echo " GSOS Service STOP"
echo "================================"
echo

DATE=$(date "+%Y-%m-%d %H:%M:%S")

echo "[$DATE] SERVICE_STOP" >> "$ROOT/logs/runtime.log"

echo "GSOS Stop Recorded."

exit 0
