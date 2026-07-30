#!/data/data/com.termux/files/usr/bin/bash

echo "================================"
echo " GSOS KERNEL"
echo "================================"

echo
echo "[KERNEL] Initializing..."

echo
echo "[KERNEL] Starting Service Manager..."

if [ -f ./gsos/services/service-manager.sh ]; then
    ./gsos/services/service-manager.sh
else
    echo "[ERROR] Service Manager Missing"
    exit 4
fi

echo
echo "[KERNEL] System Ready"

./gsos/kernel/state.sh set READY

exit 0
