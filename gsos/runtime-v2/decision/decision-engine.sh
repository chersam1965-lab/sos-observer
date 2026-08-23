#!/data/data/com.termux/files/usr/bin/bash

ROOT="./gsos/runtime-v2"
EVENT_LOG="$ROOT/events/runtime-events.log"

echo "================================"
echo " GSOS Decision Engine V2"
echo "================================"
echo

if [ ! -f "$EVENT_LOG" ]; then
    echo "Decision : NO_EVENT"
    exit 0
fi

EVENT=$(tail -1 "$EVENT_LOG")

echo "Input Event : $EVENT"
echo

case "$EVENT" in
    *FAILED*)
        DECISION="RECOVERY_REQUIRED"
        ;;
    *RUNNING*|*READY*)
        DECISION="READY"
        ;;
    *)
        DECISION="NO_ACTION"
        ;;
esac

echo "Decision : $DECISION"

printf '%s\n' "$DECISION" > "$ROOT/state/decision.state"

echo
echo "Decision State Saved."

exit 0
