#!/data/data/com.termux/files/usr/bin/bash

echo "================================"
echo " GSOS Runtime Controller"
echo "================================"

echo
echo "[1] Runtime Structure"
./gsos/runtime/validate/runtime-validator.sh

if [ $? -ne 0 ]; then
    ./gsos/runtime/events/logger.sh FAIL "Runtime Structure Failed"
    exit 1
fi

echo
echo "[2] Runtime Configuration"
./gsos/runtime/validate/config-validator.sh

if [ $? -ne 0 ]; then
    ./gsos/runtime/events/logger.sh FAIL "Runtime Configuration Failed"
    exit 1
fi

echo
echo "[3] Runtime Health"
./gsos/runtime/validate/runtime-health.sh

./gsos/runtime/events/logger.sh PASS "Runtime Controller Completed"

echo
echo "================================"
echo " Runtime Ready"
echo "================================"

exit 0
