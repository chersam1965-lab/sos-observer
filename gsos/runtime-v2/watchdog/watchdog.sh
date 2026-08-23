#!/data/data/com.termux/files/usr/bin/bash

ROOT="./gsos/runtime-v2"

DECISION_FILE="$ROOT/state/decision.state"
POLICY_FILE="$ROOT/state/policy.state"
EXECUTION_FILE="$ROOT/state/execution.state"

echo "================================"
echo " GSOS Watchdog V2"
echo "================================"
echo

HEALTHY=true

echo "[1] Decision State"

if [ -f "$DECISION_FILE" ]; then
    echo "Decision : $(cat "$DECISION_FILE")"
else
    echo "Decision : MISSING"
    HEALTHY=false
fi

echo
echo "[2] Policy State"

if [ -f "$POLICY_FILE" ]; then
    echo "Policy : $(cat "$POLICY_FILE")"
else
    echo "Policy : MISSING"
    HEALTHY=false
fi

echo
echo "[3] Execution State"

if [ -f "$EXECUTION_FILE" ]; then
    echo "Execution : $(cat "$EXECUTION_FILE")"
else
    echo "Execution : MISSING"
    HEALTHY=false
fi

echo

if [ "$HEALTHY" = true ]; then
    echo "Watchdog State : HEALTHY"
else
    echo "Watchdog State : DEGRADED"
fi

echo
echo "Watchdog Check Completed."

exit 0
