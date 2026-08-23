#!/data/data/com.termux/files/usr/bin/bash

STATE="./gsos/runtime/state/service.state"
METRICS="./gsos/runtime/metrics/metrics.state"

echo "================================"
echo " GSOS Runtime Monitor"
echo "================================"
echo

if [ -f "$STATE" ]; then
    echo "Runtime State : $(grep RUNTIME_STATE "$STATE" | cut -d= -f2)"
else
    echo "Runtime State : UNKNOWN"
fi

echo
echo "Metrics"
echo "--------------------------------"

if [ -f "$METRICS" ]; then
    cat "$METRICS"
else
    echo "Metrics unavailable."
fi

exit 0
