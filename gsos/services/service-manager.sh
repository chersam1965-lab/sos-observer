#!/data/data/com.termux/files/usr/bin/bash

echo "================================"
echo " GSOS SERVICE MANAGER"
echo "================================"

SERVICES_FILE="./gsos/services/services.list"

if [ ! -f "$SERVICES_FILE" ]; then
    echo "[ERROR] services.list not found"
    exit 1
fi

echo
echo "[SERVICE] Discovering services..."
echo

COUNT=0

while read SERVICE
do
    [ -z "$SERVICE" ] && continue
    echo "[OK] $SERVICE"
    COUNT=$((COUNT+1))
done < "$SERVICES_FILE"

echo
echo "$COUNT Services Loaded"

exit 0
