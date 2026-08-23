#!/data/data/com.termux/files/usr/bin/bash

POLICY=$(./gsos/runtime/policy/policy-engine.sh | grep "^Policy Action" | awk '{print $4}')

RECOVERY="./gsos/runtime/recovery/recovery.sh"
LIFECYCLE="./gsos/runtime/lifecycle/lifecycle.sh"

echo "================================"
echo " GSOS Execution Engine"
echo "================================"
echo

echo "Policy : $POLICY"
echo

case "$POLICY" in

NO_ACTION)

echo "[EXECUTION] Nothing to execute."

;;

RUN_RECOVERY)

echo "[EXECUTION] Executing Recovery..."

"$RECOVERY"

;;

START_RUNTIME)

echo "[EXECUTION] Starting Runtime..."

"$LIFECYCLE" start

;;

KEEP_RUNNING)

echo "[EXECUTION] Runtime Continues."

;;

*)

echo "[EXECUTION] Manual Intervention Required."

;;

esac

echo
echo "Execution Completed."

exit 0
