#!/data/data/com.termux/files/usr/bin/bash

ROOT="./gsos/runtime-v2"

DECISION_FILE="$ROOT/state/decision.state"
POLICY_FILE="$ROOT/state/policy.state"
EXECUTION_FILE="$ROOT/state/execution.state"
SERVICE_FILE="$ROOT/state/service.state"

echo "================================"
echo " GSOS State Manager V2"
echo "================================"
echo

DECISION="MISSING"
POLICY="MISSING"
EXECUTION="MISSING"

if [ -f "$DECISION_FILE" ]; then
    DECISION=$(cat "$DECISION_FILE")
fi

if [ -f "$POLICY_FILE" ]; then
    POLICY=$(cat "$POLICY_FILE")
fi

if [ -f "$EXECUTION_FILE" ]; then
    EXECUTION=$(cat "$EXECUTION_FILE")
fi

echo "Decision  : $DECISION"
echo "Policy    : $POLICY"
echo "Execution : $EXECUTION"
echo

RUNTIME_STATE="UNKNOWN"

if [ "$DECISION" = "READY" ] &&
   [ "$POLICY" = "NO_ACTION" ] &&
   [ "$EXECUTION" = "NOTHING_TO_EXECUTE" ]; then

    RUNTIME_STATE="READY"

elif [ "$DECISION" = "NO_ACTION" ] &&
     [ "$POLICY" = "NO_ACTION" ]; then

    RUNTIME_STATE="IDLE"

elif [ "$POLICY" = "RECOVERY" ] &&
     [ "$EXECUTION" = "RECOVERY_STARTED" ]; then

    RUNTIME_STATE="RECOVERY"

else
    RUNTIME_STATE="DEGRADED"
fi

echo "Runtime State : $RUNTIME_STATE"

mkdir -p "$ROOT/state"

cat > "$SERVICE_FILE" <<STATE
GSOS_VERSION=V2
GSOS_SERVICE=RUNNING
RUNTIME_STATE=$RUNTIME_STATE
DECISION_STATE=$DECISION
POLICY_ACTION=$POLICY
EXECUTION_STATE=$EXECUTION
WATCHDOG_STATE=ONLINE
STATE

echo
echo "Unified Runtime State Saved."

exit 0
