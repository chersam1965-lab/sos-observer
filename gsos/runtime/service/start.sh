#!/data/data/com.termux/files/usr/bin/bash

ROOT="./gsos/runtime"

echo "================================"
echo " GSOS Service START"
echo "================================"
echo

DATE=$(date "+%Y-%m-%d %H:%M:%S")

echo "[$DATE] SERVICE_START" >> "$ROOT/logs/runtime.log"

echo "Starting Runtime Controller..."

"$ROOT/controller/runtime-controller.sh"

echo

echo "GSOS Service Started."
echo "Log: $ROOT/logs/runtime.log"

exit 0
