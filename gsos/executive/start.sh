#!/data/data/com.termux/files/usr/bin/bash

echo "================================"
echo " GSOS EXECUTIVE ORCHESTRATOR"
echo "================================"

DATE=$(date "+%Y-%m-%d %H:%M:%S")

echo
echo "[EXECUTIVE] Start Time : $DATE"

echo
echo "[1] Kernel Boot"
./gsos/kernel/boot.sh

echo
echo "[2] Cloud Check"
./gsos/cloud/cloud.sh

echo
echo "[3] Sync Check"
./gsos/sync/sync.sh

echo
echo "[4] Security Audit"
./gsos/security/security-audit.sh

echo
echo "[5] System Audit"
./gsos/audit/audit.sh

echo
echo "================================"
echo " EXECUTIVE RUN COMPLETED"
echo "================================"
