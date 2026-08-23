#!/data/data/com.termux/files/usr/bin/bash

ROOT="./gsos/runtime-v2"

echo "================================"
echo " GSOS Kernel V2"
echo "================================"

echo

echo "[1] Loading State"

if [ -f "$ROOT/state/service.state" ]; then
    echo "State Database : OK"
else
    echo "State Database : MISSING"
fi


echo
echo "[2] Loading EventBus"

if [ -x "$ROOT/eventbus/eventbus.sh" ]; then
    echo "EventBus : READY"
else
    echo "EventBus : FAILED"
fi


echo
echo "[3] Kernel Status"

echo "KERNEL_STATE=RUNNING"

echo
echo "GSOS Kernel V2 Loaded"
