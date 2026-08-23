#!/data/data/com.termux/files/usr/bin/bash

ROOT="./gsos/runtime-v2"

DECISION_FILE="$ROOT/state/decision.state"
POLICY_FILE="$ROOT/state/policy.state"
EXECUTION_FILE="$ROOT/state/execution.state"
EVENT_LOG="$ROOT/events/runtime-events.log"

echo "================================"
echo " GSOS Recovery Controller V2"
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

if [ "$DECISION" = "RECOVERY_REQUIRED" ] &&
   [ "$POLICY" = "RECOVERY" ] &&
   [ "$EXECUTION" = "RECOVERY_STARTED" ]; then

    echo "Recovery Controller : ACTIVE"
    echo "Recovery Verification : VERIFIED"

    printf '%s\n' "[RECOVERY] VERIFIED" >> "$EVENT_LOG"
    printf '%s\n' "[TEST] RUNTIME_RECOVERED" >> "$EVENT_LOG"

    printf '%s\n' "NO_ACTION" > "$DECISION_FILE"
    printf '%s\n' "NO_ACTION" > "$POLICY_FILE"
    printf '%s\n' "NOTHING_TO_EXECUTE" > "$EXECUTION_FILE"

    echo
    echo "Recovery Result : SUCCESS"
    echo "Recovery State : CLOSED"

else

    echo "Recovery Controller : STANDBY"
    echo "Recovery Status : NOT_REQUIRED"

    printf '%s\n' "[RECOVERY] NOT_REQUIRED" >> "$EVENT_LOG"
fi

exit 0
