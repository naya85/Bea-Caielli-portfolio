# Connect this project to your GitHub repo

Your portfolio repo: **https://github.com/naya85/Bea-Caielli-portfolio.git**

Run these commands in a terminal from the **beatrice-portfolio** folder (or clone into a folder named to match the repo—see below).

---

## If this folder is already your portfolio (beatrice-portfolio)

```bash
cd /Users/UCAIEBE/beatrice-portfolio

# If you see "reinit" or .git already exists but is broken, remove it first:
# rm -rf .git

# Initialize git (if not already)
git init
git branch -M main

# Connect to your GitHub repo
git remote add origin https://github.com/naya85/Bea-Caielli-portfolio.git

# Stage and commit everything
git add .
git commit -m "Initial commit: Next.js portfolio with CV-aligned content"

# Push to GitHub (use your credentials or SSH)
git push -u origin main
```

If the repo already has content (e.g. a README), you may need to pull first:

```bash
git pull origin main --allow-unrelated-histories
# resolve any conflicts, then:
git push -u origin main
```

---

## If you prefer the folder name to match the repo (Bea-Caielli-portfolio)

```bash
cd /Users/UCAIEBE
mv beatrice-portfolio Bea-Caielli-portfolio
cd Bea-Caielli-portfolio
# then run the git init / remote / add / commit / push commands above
```

---

## Optional: clone the repo and copy files in

```bash
cd /Users/UCAIEBE
git clone https://github.com/naya85/Bea-Caielli-portfolio.git
# Copy the contents of beatrice-portfolio into Bea-Caielli-portfolio (except .git),
# then cd Bea-Caielli-portfolio, git add ., git commit, git push
```

Once you’ve run the commands that apply to you, the project will be linked to **https://github.com/naya85/Bea-Caielli-portfolio** and you can push/pull as usual.
