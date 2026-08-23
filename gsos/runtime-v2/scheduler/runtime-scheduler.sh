#!/data/data/com.termux/files/usr/bin/bash

ROOT="./gsos/runtime-v2"

echo "================================"
echo " GSOS Runtime Scheduler V2"
echo "================================"
echo

echo "Scheduler Status : READY"

echo

echo "Starting Runtime Cycle..."

echo

"$ROOT/services/service-manager.sh"

echo

echo "Runtime Cycle Finished"

exit 0
