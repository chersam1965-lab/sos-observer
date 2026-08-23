#!/data/data/com.termux/files/usr/bin/bash

STATUS_FILE="./gsos/executive/status.state"

mkdir -p ./gsos/executive

if [ ! -f "$STATUS_FILE" ]; then
    echo "IDLE" > "$STATUS_FILE"
fi

case "$1" in

set)

echo "$2" > "$STATUS_FILE"
;;

get)

cat "$STATUS_FILE"
;;

*)

echo "Usage:"
echo "./status.sh get"
echo "./status.sh set RUNNING"

;;

esac
