#!/data/data/com.termux/files/usr/bin/bash

CONFIG="./gsos/sync/sync.conf"

echo "================================"
echo " GSOS SYNC ENGINE V2"
echo "================================"

if [ ! -f "$CONFIG" ]; then
    echo "[ERROR] sync.conf not found"
    exit 1
fi

source "$CONFIG"

echo
echo "[SYNC] Runtime State : $(./gsos/kernel/state.sh get)"
echo "[SYNC] Mode          : $SYNC_MODE"
echo "[SYNC] Remote        : $REMOTE"
echo "[SYNC] Lovable       : $LOVABLE"
echo "[SYNC] Auto Sync     : $AUTO_SYNC"
echo "[SYNC] Version       : $VERSION"

exit 0
