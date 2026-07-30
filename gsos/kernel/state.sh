#!/data/data/com.termux/files/usr/bin/bash

STATEFILE="$HOME/sos-observer/gsos/kernel/system.state"

if [ ! -f "$STATEFILE" ]; then
    echo "OFF" > "$STATEFILE"
fi

case "$1" in
    set)
        echo "$2" > "$STATEFILE"
        ;;
    get)
        cat "$STATEFILE"
        ;;
    *)
        echo "Usage:"
        echo "./state.sh set READY"
        echo "./state.sh get"
        ;;
esac

exit 0
