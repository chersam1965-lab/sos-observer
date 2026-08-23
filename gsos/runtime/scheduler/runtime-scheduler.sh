#!/data/data/com.termux/files/usr/bin/bash

INTERVAL=5

echo "================================"
echo " GSOS Runtime Scheduler"
echo "================================"

while true
do
    clear

    echo
    echo "Cycle Time : $(date '+%Y-%m-%d %H:%M:%S')"
    echo

    ./gsos/runtime/dispatcher/runtime-dispatcher.sh

    echo
    echo "Next Cycle In ${INTERVAL} Seconds..."
    echo

    sleep $INTERVAL
done
