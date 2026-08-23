#!/data/data/com.termux/files/usr/bin/bash

echo "================================"
echo " GSOS Runtime Controller"
echo "================================"
echo

ROOT="./gsos/runtime"

cat > "$ROOT/state/service.state" <<EOF
GSOS_SERVICE=RUNNING
RUNTIME_STATE=RUNNING
DECISION_STATE=READY
POLICY_ACTION=NO_ACTION
WATCHDOG_STATE=HEALTHY
LAST_START=$(date)
EOF

echo "[1] Scheduler"
echo "----------------"

if [ -x "$ROOT/scheduler/runtime-scheduler.sh" ]; then
    echo "Scheduler Ready"
else
    echo "Scheduler Missing"
fi

echo
echo "[2] Dispatcher"
echo "----------------"

"$ROOT/dispatcher/runtime-dispatcher.sh"

echo
echo "[3] Supervisor"
echo "----------------"

"$ROOT/supervisor/supervisor.sh"

echo
echo "[4] Watchdog"
echo "----------------"

"$ROOT/supervisor/watchdog.sh"

echo
echo "================================"
echo " Runtime Controller Completed"
echo "================================"

exit 0


