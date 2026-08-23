#!/data/data/com.termux/files/usr/bin/bash

REPORT="./gsos/runtime/logs/runtime-health.log"

mkdir -p ./gsos/runtime/logs

echo "================================" > "$REPORT"
echo "GSOS Runtime Health Report" >> "$REPORT"
echo "Generated : $(date)" >> "$REPORT"
echo "================================" >> "$REPORT"
echo >> "$REPORT"

echo "[1] Runtime Structure" >> "$REPORT"

./gsos/runtime/validate/runtime-validator.sh >> "$REPORT"

echo >> "$REPORT"

echo "[2] Runtime Configuration" >> "$REPORT"

./gsos/runtime/validate/config-validator.sh >> "$REPORT"

echo >> "$REPORT"

echo "================================" >> "$REPORT"

echo "Runtime Health Report Generated."

cat "$REPORT"
