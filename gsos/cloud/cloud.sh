#!/data/data/com.termux/files/usr/bin/bash

CONFIG="./gsos/cloud/cloud.conf"

echo "================================"
echo " GSOS CLOUD ENGINE"
echo "================================"

if [ ! -f "$CONFIG" ]; then
    echo "[ERROR] cloud.conf not found"
    exit 1
fi

source "$CONFIG"

echo
echo "[CLOUD] Mode              : $CLOUD_MODE"
echo "[CLOUD] Primary Remote    : $PRIMARY_REMOTE"
echo "[CLOUD] Secondary Remote  : $SECONDARY_REMOTE"
echo "[CLOUD] Backup Provider   : $BACKUP_PROVIDER"
echo "[CLOUD] Auto Backup       : $AUTO_BACKUP"
echo "[CLOUD] Auto Restore      : $AUTO_RESTORE"
echo "[CLOUD] Version           : $VERSION"

echo
echo "[CLOUD] Git Branch        : $(git branch --show-current)"
echo "[CLOUD] Last Commit       : $(git rev-parse --short HEAD)"

echo
echo "[CLOUD] Git Status:"
git status --short

exit 0
