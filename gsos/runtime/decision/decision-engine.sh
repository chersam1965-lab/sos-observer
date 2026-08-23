#!/data/data/com.termux/files/usr/bin/bash

STATE_FILE="./gsos/runtime/state/runtime.state"

echo "================================"
echo " GSOS Decision Engine"
echo "================================"
echo

if [ ! -f "$STATE_FILE" ]; then
    echo "Decision : UNKNOWN"
    exit 1
fi

STATE=$(cat "$STATE_FILE")

case "$STATE" in

RUNNING)

    DECISION="NONE"

;;

INITIALIZED)

    DECISION="READY"

;;

FAILED)

    DECISION="RECOVERY"

;;

STOPPED)

    DECISION="START"

;;

*)

    DECISION="UNKNOWN"

;;

esac

echo "Runtime State : $STATE"
echo "Decision      : $DECISION"

exit 0

