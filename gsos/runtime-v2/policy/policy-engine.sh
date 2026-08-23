#!/data/data/com.termux/files/usr/bin/bash

ROOT="./gsos/runtime-v2"
DECISION_FILE="$ROOT/state/decision.state"
POLICY_FILE="$ROOT/state/policy.state"

echo "================================"
echo " GSOS Policy Engine V2"
echo "================================"
echo

if [ ! -f "$DECISION_FILE" ]; then
    echo "Decision State : MISSING"
    echo "Policy Action : NO_ACTION"
    printf '%s\n' "NO_ACTION" > "$POLICY_FILE"
    exit 0
fi

DECISION=$(cat "$DECISION_FILE")

echo "Decision : $DECISION"
echo

case "$DECISION" in
    READY)
        POLICY_ACTION="NO_ACTION"
        ;;
    RECOVERY_REQUIRED)
        POLICY_ACTION="RECOVERY"
        ;;
    *)
        POLICY_ACTION="NO_ACTION"
        ;;
esac

echo "Policy Action : $POLICY_ACTION"

printf '%s\n' "$POLICY_ACTION" > "$POLICY_FILE"

echo
echo "Policy State Saved."

exit 0
