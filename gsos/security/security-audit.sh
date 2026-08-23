#!/data/data/com.termux/files/usr/bin/bash

REPORT="./gsos/reports/GSOS-SECURITY-REPORT.md"

echo "# GSOS Security Audit Report" > "$REPORT"
echo "" >> "$REPORT"
echo "Generated: $(date)" >> "$REPORT"

echo "" >> "$REPORT"
echo "## Security Directory" >> "$REPORT"
ls -la gsos/security >> "$REPORT"

echo "" >> "$REPORT"
echo "## Sensitive Files Scan" >> "$REPORT"

find . -maxdepth 3 \
\( -name ".env" -o \
-name "*.pem" -o \
-name "*.key" -o \
-name "id_rsa" -o \
-name "id_ed25519" \) >> "$REPORT"

echo "" >> "$REPORT"
echo "## Logger Status" >> "$REPORT"
find gsos/logger -maxdepth 1 -type f | sort >> "$REPORT"

echo ""
echo "Security Audit completed."
echo "Report: $REPORT"
