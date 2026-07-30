#!/data/data/com.termux/files/usr/bin/bash

CONFIG="$HOME/sos-observer/gsos/config/system.conf"

source "$CONFIG"

echo "=============================="
echo " GSOS CORE IDENTITY"
echo "=============================="

echo "Name      : $GSOS_NAME"
echo "Version   : $GSOS_VERSION"
echo "
Branch    : $GSOS_BRANCH"
echo "Environment : $GSOS_ENV"
echo "Author    : $GSOS_AUTHOR"
echo "=============================="
