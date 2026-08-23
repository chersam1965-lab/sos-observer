#!/data/data/com.termux/files/usr/bin/bash

ROOT="./gsos/runtime-v2"

echo "================================"
echo " GSOS Service Manager V2"
echo "================================"
echo

SERVICES=(
"eventbus/eventbus.sh"
"kernel/kernel.sh"
)

for SERVICE in "${SERVICES[@]}"
do

FILE="$ROOT/$SERVICE"

echo "Loading : $SERVICE"

if [ -x "$FILE" ]; then
    "$FILE"
    echo "[ OK ]"
else
    echo "[ FAILED ]"
fi

echo

done

echo "================================"
echo "All Runtime Services Loaded"
echo "================================"

exit 0
