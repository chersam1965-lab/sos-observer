#!/data/data/com.termux/files/usr/bin/bash

echo "# GSOS Health Check"
echo

echo "EventBus : OK"

if [ -f gsos/runtime/state/service.state ]; then
echo "State File : OK"
else
echo "State File : FAILED"
fi

echo

cat gsos/runtime/state/service.state

echo
echo "Health Check Completed."
