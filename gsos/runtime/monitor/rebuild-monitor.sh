#!/data/data/com.termux/files/usr/bin/bash

MONITOR="./gsos/runtime/monitor/runtime-monitor.sh"

cat > "$MONITOR" << 'EOF'
#!/data/data/com.termux/files/usr/bin/bash

STATE="./gsos/runtime/state/runtime.state"
METRICS="./gsos/runtime/metrics/metrics.state"

echo "================================"
echo " GSOS Runtime Monitor"
echo "================================"
echo

if [ -f "$STATE" ]; then
    echo "Runtime State : $(cat "$STATE")"
else
    echo "Runtime State : UNKNOWN"
fi

echo
echo "Metrics"
echo "--------------------------------"

if [ -f "$METRICS" ]; then
    cat "$METRICS"
else
    echo "Metrics unavailable."
fi

exit 0
EOF

chmod +x "$MONITOR"

echo "Runtime Monitor rebuilt successfully."
