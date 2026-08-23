#!/data/data/com.termux/files/usr/bin/bash

CONFIG="./gsos/runtime/config/runtime.conf"

REQUIRED_KEYS="
RUNTIME_NAME
RUNTIME_VERSION
RUNTIME_STATE
RUNTIME_MODE
RUNTIME_API
"

FAIL=0

echo "================================"
echo " GSOS Runtime Configuration Validator"
echo "================================"

if [ ! -f "$CONFIG" ]; then
    echo "[FAIL] runtime.conf not found"
    exit 1
fi

for KEY in $REQUIRED_KEYS
do
    if grep -q "^${KEY}=" "$CONFIG"; then
        echo "[PASS] $KEY"
    else
        echo "[FAIL] $KEY"
        FAIL=1
    fi
done

echo

if [ "$FAIL" -eq 0 ]; then
    echo "Configuration : PASS"
    exit 0
else
    echo "Configuration : FAIL"
    exit 1
fi
