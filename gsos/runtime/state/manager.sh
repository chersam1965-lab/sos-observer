#!/data/data/com.termux/files/usr/bin/bash

STATE_FILE="./gsos/runtime/state/runtime.state"

if [ ! -f "$STATE_FILE" ]; then
    echo "INITIALIZED" > "$STATE_FILE"
fi

case "$1" in

get)
    cat "$STATE_FILE"
    ;;

set)
    echo "$2" > "$STATE_FILE"
    ;;

reset)
    echo "INITIALIZED" > "$STATE_FILE"
    ;;

*)
    echo "Usage:"
    echo "./manager.sh get"
    echo "./manager.sh set RUNNING"
    echo "./manager.sh reset"
    exit 1
    ;;
esac

exit 0
