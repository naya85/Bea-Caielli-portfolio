#!/bin/bash
# Run this from beatrice-portfolio to fix "Repository not found" when pushing.
# It clears cached GitHub credentials so you can enter your token when pushing.

set -e
cd "$(dirname "$0")"

echo "1. Clearing cached GitHub credentials..."
printf "protocol=https\nhost=github.com\n" | git credential reject 2>/dev/null || true

echo "2. Setting remote so Git will ask for your token (password)..."
git remote set-url origin "https://naya85@github.com/naya85/Bea-Caielli-portfolio.git"

echo "3. Now run: git push -u origin main"
echo "   When prompted for 'Password', paste your Personal Access Token (not your GitHub password)."
echo ""
read -p "Press Enter to run git push now (or Ctrl+C to cancel)..."
git push -u origin main
