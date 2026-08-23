#!/data/data/com.termux/files/usr/bin/bash

BASE="./gsos/runtime"

DIRS="
config
logs
state
events
session
lifecycle
recovery
"

FAIL=0

echo "================================"
echo " GSOS Runtime Validator"
echo "================================"

for D in $DIRS
do
    if [ -d "$BASE/$D" ]; then
        echo "[PASS] $D"
    else
        echo "[FAIL] $D"
        FAIL=1
    fi
done

echo

if [ "$FAIL" -eq 0 ]; then
    echo "Runtime Structure : PASS"
    exit 0
else
    echo "Runtime Structure : FAIL"
    exit 1
fi
