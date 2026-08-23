#!/data/data/com.termux/files/usr/bin/bash

ROOT="./gsos/runtime"

echo "================================"
echo " GSOS Health Check"
echo "================================"
echo

if [ -f "$ROOT/eventbus/events.bus" ]; then

echo "EventBus : OK"

else

echo "EventBus : FAILED"

fi


if [ -x "$ROOT/controller/runtime-controller.sh" ]; then

echo "Controller : OK"

else

echo "Controller : FAILED"

fi


echo
echo "Health Check Completed."

exit 0
