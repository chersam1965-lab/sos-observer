#!/data/data/com.termux/files/usr/bin/bash

REPORT="./gsos/logger/time.log"

mkdir -p ./gsos/logger

DATE_LOCAL=$(date "+%Y-%m-%d %H:%M:%S %Z")
DATE_UTC=$(date -u "+%Y-%m-%d %H:%M:%S UTC")
ZONE=$(date +"%Z %z")

echo "==============================" >> "$REPORT"
echo "GSOS TIME CHECK" >> "$REPORT"
echo "LOCAL : $DATE_LOCAL" >> "$REPORT"
echo "UTC   : $DATE_UTC" >> "$REPORT"
echo "ZONE  : $ZONE" >> "$REPORT"
echo "STATUS: OK" >> "$REPORT"
echo "==============================" >> "$REPORT"

echo "Time evidence recorded."
