#!/data/data/com.termux/files/usr/bin/bash

echo "================================"
echo " GSOS Decision Listener"
echo "================================"

DECISION=$(./gsos/runtime/decision/decision-engine.sh | grep "^Decision" | awk '{print $3}')

echo
echo "Decision Received : $DECISION"
echo

case "$DECISION" in

READY)

echo "Forwarding -> Policy Engine"

./gsos/runtime/policy/policy-engine.sh

;;

*)

echo "No Policy Available"

;;

esac

exit 0
