#!/data/data/com.termux/files/usr/bin/bash

ROOT="./gsos/runtime"

while true
do
    clear

    echo "================================"
    echo " GSOS Runtime Service"
    echo "================================"
    echo

    "$ROOT/controller/runtime-controller.sh"

    sleep 5
done
