#!/data/data/com.termux/files/usr/bin/bash

ROOT="./gsos/runtime-v2"

DECISION_FILE="$ROOT/state/decision.state"
POLICY_FILE="$ROOT/state/policy.state"
EXECUTION_FILE="$ROOT/state/execution.state"

echo "================================"
echo " GSOS Runtime Supervisor V2"
echo "================================"
echo

echo "[1] Decision State"

if [ -f "$DECISION_FILE" ]; then
    echo "Decision : $(cat "$DECISION_FILE")"
else
    echo "Decision : MISSING"
fi

echo
echo "[2] Policy State"

if [ -f "$POLICY_FILE" ]; then
    echo "Policy : $(cat "$POLICY_FILE")"
else
    echo "Policy : MISSING"
fi

echo
echo "[3] Execution State"

if [ -f "$EXECUTION_FILE" ]; then
    echo "Execution : $(cat "$EXECUTION_FILE")"
else
    echo "Execution : MISSING"
fi

echo
echo "[4] Supervisor Status"

if [ -f "$DECISION_FILE" ] &&
   [ -f "$POLICY_FILE" ] &&
   [ -f "$EXECUTION_FILE" ]; then

    echo "Supervisor State : HEALTHY"
else
    echo "Supervisor State : DEGRADED"
fi

echo
echo "Supervisor Check Completed."

exit 0
