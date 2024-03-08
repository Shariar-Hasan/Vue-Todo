git add .
read -p "Commit description: " msg
git commit -m "$msg"
git push origin main