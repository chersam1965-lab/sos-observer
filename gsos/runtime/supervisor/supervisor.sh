#!/data/data/com.termux/files/usr/bin/bash

ROOT="./gsos/runtime"

echo "================================"
echo " GSOS Runtime Supervisor"
echo "================================"
echo

echo "[1] Runtime Monitor"
"$ROOT/monitor/runtime-monitor.sh"

echo
echo "[2] Runtime State"

if [ -f "$ROOT/state/service.state" ]; then
    echo "Runtime State : $(grep RUNTIME_STATE "$ROOT/state/service.state" | cut -d= -f2)"
else
    echo "Runtime State : UNKNOWN"
fi

echo

echo "[3] Metrics"

if [ -f "$ROOT/metrics/metrics.state" ]; then
    cat "$ROOT/metrics/metrics.state"
else
    echo "Metrics unavailable."
fi

echo

echo "[4] Last Events"

if [ -f "$ROOT/events/runtime-events.log" ]; then
    tail -5 "$ROOT/events/runtime-events.log"
else
    echo "No events."
fi

echo
echo "Supervisor Completed."

exit 0
