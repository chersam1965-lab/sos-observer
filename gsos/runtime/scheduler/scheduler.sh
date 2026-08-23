#!/data/data/com.termux/files/usr/bin/bash

AUTOMATION="./gsos/runtime/automation/automation.sh"

INTERVAL=5

echo "================================"
echo " GSOS Runtime Scheduler"
echo "================================"
echo

echo "Monitoring every $INTERVAL seconds..."
echo "Press Ctrl+C to stop."
echo

while true
do
    "$AUTOMATION"

    echo
    echo "--------------------------------"
    echo

    sleep "$INTERVAL"
done
