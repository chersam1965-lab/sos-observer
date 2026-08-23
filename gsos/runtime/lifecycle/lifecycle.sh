#!/data/data/com.termux/files/usr/bin/bash

STATE_FILE="./gsos/runtime/state/runtime.state"
LOGGER="./gsos/runtime/events/logger.sh"

mkdir -p ./gsos/runtime/state

if [ ! -f "$STATE_FILE" ]; then
    echo "INITIALIZED" > "$STATE_FILE"
fi

case "$1" in

start)
    echo "STARTING" > "$STATE_FILE"
    [ -x "$LOGGER" ] && "$LOGGER" INFO "Runtime STARTING"
    sleep 1
    echo "RUNNING" > "$STATE_FILE"
    [ -x "$LOGGER" ] && "$LOGGER" PASS "Runtime RUNNING"
    echo "Runtime Started."
    ;;

stop)
    echo "STOPPING" > "$STATE_FILE"
    [ -x "$LOGGER" ] && "$LOGGER" INFO "Runtime STOPPING"
    sleep 1
    echo "STOPPED" > "$STATE_FILE"
    [ -x "$LOGGER" ] && "$LOGGER" PASS "Runtime STOPPED"
    echo "Runtime Stopped."
    ;;

fail)
    echo "FAILED" > "$STATE_FILE"
    [ -x "$LOGGER" ] && "$LOGGER" FAIL "Runtime FAILED"
    echo "Runtime Failed."
    ;;

status)
    cat "$STATE_FILE"
    ;;

*)
    echo "Usage:"
    echo "./lifecycle.sh start"
    echo "./lifecycle.sh stop"
    echo "./lifecycle.sh fail"
    echo "./lifecycle.sh status"
    exit 1
    ;;
esac

exit 0
EO
