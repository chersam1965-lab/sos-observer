#!/data/data/com.termux/files/usr/bin/bash

ROOT="./gsos/runtime-v2"

DECISION_FILE="$ROOT/state/decision.state"
POLICY_FILE="$ROOT/state/policy.state"
EXECUTION_FILE="$ROOT/state/execution.state"
SERVICE_FILE="$ROOT/state/service.state"

echo "================================"
echo " GSOS Runtime Health Check V2"
echo "================================"
echo

HEALTHY=true

echo "[1] Decision"

if [ -f "$DECISION_FILE" ]; then
    DECISION=$(cat "$DECISION_FILE")
    echo "Decision : $DECISION"
else
    echo "Decision : MISSING"
    HEALTHY=false
fi

echo
echo "[2] Policy"

if [ -f "$POLICY_FILE" ]; then
    POLICY=$(cat "$POLICY_FILE")
    echo "Policy : $POLICY"
else
    echo "Policy : MISSING"
    HEALTHY=false
fi

echo
echo "[3] Execution"

if [ -f "$EXECUTION_FILE" ]; then
    EXECUTION=$(cat "$EXECUTION_FILE")
    echo "Execution : $EXECUTION"
else
    echo "Execution : MISSING"
    HEALTHY=false
fi

echo
echo "[4] Unified Runtime State"

if [ -f "$SERVICE_FILE" ]; then
    RUNTIME_STATE=$(grep '^RUNTIME_STATE=' "$SERVICE_FILE" | cut -d= -f2-)
    WATCHDOG_STATE=$(grep '^WATCHDOG_STATE=' "$SERVICE_FILE" | cut -d= -f2-)

    echo "Runtime State : $RUNTIME_STATE"
    echo "Watchdog State : $WATCHDOG_STATE"
else
    echo "Service State : MISSING"
    HEALTHY=false
fi

echo
echo "[5] Consistency Check"

if [ "$DECISION" = "READY" ] &&
   [ "$POLICY" = "NO_ACTION" ] &&
   [ "$EXECUTION" = "NOTHING_TO_EXECUTE" ] &&
   [ "$RUNTIME_STATE" = "READY" ] &&
   [ "$WATCHDOG_STATE" = "ONLINE" ]; then

    echo "Runtime Consistency : OK"
    echo "Runtime Mode : NORMAL"

elif [ "$DECISION" = "NO_ACTION" ] &&
     [ "$POLICY" = "NO_ACTION" ] &&
     [ "$EXECUTION" = "NOTHING_TO_EXECUTE" ] &&
     [ "$RUNTIME_STATE" = "IDLE" ] &&
     [ "$WATCHDOG_STATE" = "ONLINE" ]; then

    echo "Runtime Consistency : OK"
    echo "Runtime Mode : IDLE"

elif [ "$DECISION" = "RECOVERY_REQUIRED" ] &&
     [ "$POLICY" = "RECOVERY" ] &&
     [ "$EXECUTION" = "RECOVERY_STARTED" ] &&
     [ "$RUNTIME_STATE" = "RECOVERY" ] &&
     [ "$WATCHDOG_STATE" = "ONLINE" ]; then

    echo "Runtime Consistency : OK"
    echo "Runtime Mode : RECOVERY"

else

    echo "Runtime Consistency : DEGRADED"
    HEALTHY=false

fi

echo

if [ "$HEALTHY" = true ]; then
    echo "HEALTH : HEALTHY"
else
    echo "HEALTH : DEGRADED"
fi

echo
echo "Health Check Completed."

exit 0
