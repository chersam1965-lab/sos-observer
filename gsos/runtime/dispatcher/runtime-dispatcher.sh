#!/data/data/com.termux/files/usr/bin/bash

echo "================================"
echo " GSOS Runtime Dispatcher"
echo "================================"
echo

echo "[1] Runtime Monitor"
./gsos/runtime/monitor/runtime-monitor.sh

echo
echo "[2] Event Router"
./gsos/runtime/router/router.sh

echo
echo "[3] Decision Engine"
./gsos/runtime/decision/decision-engine.sh

echo
echo "[4] Policy Engine"
./gsos/runtime/policy/policy-engine.sh

echo
echo "[5] Execution Engine"
./gsos/runtime/execution/execution-engine.sh

echo
echo "================================"
echo " Dispatcher Cycle Completed"
echo "================================"

exit 0
