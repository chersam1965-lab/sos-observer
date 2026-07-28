#!/data/data/com.termux/files/usr/bin/bash

echo "========== GSOS CLOUD STATUS =========="

echo
echo "Device:"
uname -a

echo
echo "Project:"
pwd

echo
echo "Branch:"
git branch --show-current

echo
echo "Git Remote:"
git remote -v | head -2

echo
echo "Node:"
node -v

echo
echo "NPM:"
npm -v

echo
echo "Environment Check Completed"
