#!/data/data/com.termux/files/usr/bin/bash

DECISION=$("./gsos/runtime/decision/decision-engine.sh" | grep "^Decision" | awk '{print $3}')

echo "================================"
echo " GSOS Policy Engine"
echo "================================"
echo

echo "Decision : $DECISION"

case "$DECISION" in

READY)

ACTION="NO_ACTION"

;;

RECOVERY)

ACTION="RUN_RECOVERY"

;;

START)

ACTION="START_RUNTIME"

;;

NONE)

ACTION="KEEP_RUNNING"

;;

*)

ACTION="MANUAL_CHECK"

;;

esac

echo "Policy Action : $ACTION"

echo
echo "Policy Completed."

exit 0
