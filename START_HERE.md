# Portfolio – start from here

One path to get your portfolio on GitHub (naya85) and run it locally.

---

## 1. Open the project folder

In Terminal:

```bash
cd /Users/UCAIEBE/Bea-Caielli-portfolio
```

(If that folder doesn’t exist, do the “Clone + copy” steps in the section below first.)

---

## 2. Push to your personal GitHub (naya85)

```bash
git push -u origin main
```

- When it asks for **Password**, paste your **naya85 Personal Access Token** (from https://github.com/settings/tokens).
- Don’t use your GitHub account password.

After this, your portfolio code is on https://github.com/naya85/Bea-Caielli-portfolio.

---

## 3. Run the site locally

```bash
npm install
npm run dev
```

Open **http://localhost:3000** in your browser.

---

## 4. Work on the portfolio

- Edit files in **`src/`** (e.g. `src/data/content.ts` for copy).
- To save changes to GitHub:
  ```bash
  git add .
  git commit -m "Short description of what you changed"
  git push
  ```
  Use your naya85 token again when it asks for Password.

---

## If you don’t have the folder yet (clone + copy)

Run these in order:

```bash
cd /Users/UCAIEBE
git clone https://github.com/naya85/Bea-Caielli-portfolio.git
rsync -av --exclude='.git' --exclude='node_modules' --exclude='.next' /Users/UCAIEBE/beatrice-portfolio/ /Users/UCAIEBE/Bea-Caielli-portfolio/
cd /Users/UCAIEBE/Bea-Caielli-portfolio
npm install
git add .
git commit -m "Initial commit: Next.js portfolio"
git push -u origin main
```

When Git asks for **Password**, use your **naya85** token.

Then continue from **Step 3** above.
