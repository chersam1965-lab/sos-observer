#!/data/data/com.termux/files/usr/bin/bash

echo "===== GSOS SYNC ====="

echo
echo "Branch:"
git branch --show-current

echo
echo "Pulling latest changes..."
git pull --rebase

echo
echo "Installing packages..."
npm install

echo
echo "GSOS Sync completed"
