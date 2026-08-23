#!/data/data/com.termux/files/usr/bin/bash

SESSION_DIR="./gsos/executive/logs"

mkdir -p "$SESSION_DIR"

SESSION_ID=$(date "+%Y%m%d-%H%M%S")

SESSION_FILE="$SESSION_DIR/session-$SESSION_ID.log"

{
echo "================================"
echo "GSOS EXECUTIVE SESSION"
echo "SESSION ID : $SESSION_ID"
echo "START TIME : $(date)"
echo "UTC TIME   : $(date -u)"
echo "STATUS     : STARTED"
echo "================================"
} > "$SESSION_FILE"

echo "$SESSION_FILE"
