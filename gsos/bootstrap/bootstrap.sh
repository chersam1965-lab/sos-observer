#!/data/data/com.termux/files/usr/bin/bash

CONFIG="./gsos/bootstrap/bootstrap.conf"

echo "================================"
echo " GSOS BOOTSTRAP ENGINE"
echo "================================"

if [ ! -f "$CONFIG" ]; then
    echo "[ERROR] bootstrap.conf not found"
    exit 1
fi

source "$CONFIG"

echo
echo "[BOOTSTRAP] Mode           : $BOOTSTRAP_MODE"
echo "[BOOTSTRAP] Target         : $INSTALL_TARGET"
echo "[BOOTSTRAP] Restore From   : $RESTORE_FROM"
echo "[BOOTSTRAP] Auto Restore   : $AUTO_RESTORE"
echo "[BOOTSTRAP] Version        : $VERSION"

echo
echo "[BOOTSTRAP] Runtime State  : $(./gsos/kernel/state.sh get)"

exit 0
