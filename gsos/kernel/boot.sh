#!/data/data/com.termux/files/usr/bin/bash

echo "================================"
echo " GSOS BOOT MANAGER"
echo "================================"

echo
echo "[BOOT] Checking Identity Service..."

if [ -f ./gsos/core/identity.sh ]; then
    ./gsos/core/identity.sh
else
    echo "[ERROR] Identity Service Missing"
    exit 1
fi

echo
echo "[BOOT] Loading Kernel..."

if [ -f ./gsos/kernel/kernel.sh ]; then
    ./gsos/kernel/kernel.sh
else
    echo "[ERROR] Kernel Missing"
    exit 1
fi
