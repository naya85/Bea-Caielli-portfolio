# Portfolio setup from scratch (empty GitHub repo)

You have: **empty repo** at https://github.com/naya85/Bea-Caielli-portfolio  
You need: **portfolio code in that repo**. Follow these steps in order.

---

## Step 1: Clone your empty repo

Open **Terminal** and run (one line, then Enter):

```bash
cd /Users/UCAIEBE && git clone https://github.com/naya85/Bea-Caielli-portfolio.git
```

- If it asks for **Username**: type `naya85`
- If it asks for **Password**: paste your **Personal Access Token** (from GitHub → Settings → Developer settings → Personal access tokens)

You’ll get a new folder: `/Users/UCAIEBE/Bea-Caielli-portfolio` (it will be empty or have only a README).

---

## Step 2: Copy the portfolio code into the clone

Run this **exactly** (one line):

```bash
rsync -av --exclude='.git' --exclude='node_modules' --exclude='.next' /Users/UCAIEBE/beatrice-portfolio/ /Users/UCAIEBE/Bea-Caielli-portfolio/
```

This copies all portfolio files into `Bea-Caielli-portfolio` and keeps the clone’s `.git` (so it stays connected to GitHub).

---

## Step 3: Go into the new folder and install dependencies

```bash
cd /Users/UCAIEBE/Bea-Caielli-portfolio
npm install
```

---

## Step 4: Commit and push to GitHub

```bash
git add .
git status
git commit -m "Initial commit: Next.js portfolio"
git push -u origin main
```

- If it asks for **Password**, paste your **Personal Access Token** again.

---

## Step 5: Use this folder from now on

Your portfolio project is now:

**`/Users/UCAIEBE/Bea-Caielli-portfolio`**

- Open this folder in Cursor (File → Open Folder).
- Run the site with: `npm run dev`
- For future changes: edit code, then `git add .` → `git commit -m "your message"` → `git push`

---

## If you don’t have `rsync`

Use this instead of the command in Step 2:

```bash
cd /Users/UCAIEBE/Bea-Caielli-portfolio
cp -R /Users/UCAIEBE/beatrice-portfolio/src .
cp /Users/UCAIEBE/beatrice-portfolio/package.json /Users/UCAIEBE/beatrice-portfolio/package-lock.json .
cp /Users/UCAIEBE/beatrice-portfolio/next.config.ts /Users/UCAIEBE/beatrice-portfolio/tsconfig.json /Users/UCAIEBE/beatrice-portfolio/postcss.config.mjs .
cp /Users/UCAIEBE/beatrice-portfolio/.gitignore .
cp /Users/UCAIEBE/beatrice-portfolio/next-env.d.ts .
```

Then continue from **Step 3**.
