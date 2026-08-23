#!/data/data/com.termux/files/usr/bin/bash

AUTOMATION="./gsos/runtime/automation/automation.sh"

INTERVAL=5

echo "================================"
echo " GSOS Runtime Scheduler"
echo "================================"
echo

echo "Press CTRL+C to stop."
echo

while true
do
    "$AUTOMATION"

    echo
    echo "--------------------------------"
    echo

    sleep "$INTERVAL"
done
