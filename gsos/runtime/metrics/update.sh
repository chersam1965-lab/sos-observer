#!/data/data/com.termux/files/usr/bin/bash

FILE="./gsos/runtime/metrics/metrics.state"
EVENT="$1"

if [ ! -f "$FILE" ]; then
    echo "Metrics file not found."
    exit 1
fi

source "$FILE"

case "$EVENT" in
    START)
        START_COUNT=$((START_COUNT+1))
        ;;
    STOP)
        STOP_COUNT=$((STOP_COUNT+1))
        ;;
    FAIL)
        FAIL_COUNT=$((FAIL_COUNT+1))
        ;;
    RECOVERY)
        RECOVERY_COUNT=$((RECOVERY_COUNT+1))
        ;;
    *)
        echo "Unknown Event"
        exit 1
        ;;
esac

LAST_UPDATE="$(date '+%Y-%m-%d %H:%M:%S')"

echo "START_COUNT=$START_COUNT" > "$FILE"
echo "STOP_COUNT=$STOP_COUNT" >> "$FILE"
echo "FAIL_COUNT=$FAIL_COUNT" >> "$FILE"
echo "RECOVERY_COUNT=$RECOVERY_COUNT" >> "$FILE"
echo "LAST_UPDATE=\"$LAST_UPDATE\"" >> "$FILE"

echo "Metrics Updated: $EVENT"

exit 0



