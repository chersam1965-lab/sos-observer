#!/data/data/com.termux/files/usr/bin/bash

REPORT="./gsos/reports/GSOS-AUDIT-REPORT.md"

echo "# GSOS Self Audit Report" > "$REPORT"
echo "" >> "$REPORT"
echo "Generated: $(date)" >> "$REPORT"

echo "" >> "$REPORT"
echo "## Identity" >> "$REPORT"
echo "Version: $(cat VERSION 2>/dev/null)" >> "$REPORT"
echo "Branch: $(git branch --show-current 2>/dev/null)" >> "$REPORT"
echo "Commit: $(git rev-parse --short HEAD 2>/dev/null)" >> "$REPORT"

echo "" >> "$REPORT"
echo "## Kernel State" >> "$REPORT"
if [ -f gsos/kernel/system.state ]; then
    cat gsos/kernel/system.state >> "$REPORT"
else
    echo "No state file" >> "$REPORT"
fi

echo "" >> "$REPORT"
echo "## Cloud Configuration" >> "$REPORT"
cat gsos/cloud/cloud.conf 2>/dev/null >> "$REPORT"

echo "" >> "$REPORT"
echo "## Sync Configuration" >> "$REPORT"
cat gsos/sync/sync.conf 2>/dev/null >> "$REPORT"

echo "" >> "$REPORT"
echo "## Project Structure" >> "$REPORT"
find gsos -maxdepth 2 -type d | sort >> "$REPORT"

echo "" >> "$REPORT"
echo "## Logs" >> "$REPORT"
find gsos/logger -maxdepth 1 -type f | sort >> "$REPORT"

echo ""
echo "GSOS Audit completed."
echo "Report: $REPORT"
