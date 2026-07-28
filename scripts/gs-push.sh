#!/data/data/com.termux/files/usr/bin/bash

MESSAGE="$1"

if [ -z "$MESSAGE" ]; then
    MESSAGE="GSOS update"
fi

echo "===== GSOS PUSH ====="

echo
echo "Status:"
git status

echo
echo "Adding files..."
git add .

echo
echo "Commit:"
git commit -m "$MESSAGE"

echo
echo "Pushing..."
git push

echo
echo "GSOS Push completed"
