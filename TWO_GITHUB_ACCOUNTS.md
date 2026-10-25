# Using Pearson (work) and personal (naya85) GitHub on the same Mac

This repo is set up to use your **personal** account (naya85). Work repos can keep using the Pearson account.

---

## What’s already done in this repo

- **Remote:** `https://naya85@github.com/naya85/Bea-Caielli-portfolio.git` (personal).
- **Credential helper:** Disabled for this repo, so Git won’t use your work login here.

When you run `git push` in **this** folder, Git will ask for a password: use your **naya85 Personal Access Token**.

---

## Option A: SSH (recommended for two accounts)

Use one SSH key for work and one for personal. No password prompts after setup.

### 1. Create two SSH keys

```bash
# Personal (naya85)
ssh-keygen -t ed25519 -C "your-personal-email@example.com" -f ~/.ssh/id_ed25519_naya85

# Work (Pearson)
ssh-keygen -t ed25519 -C "beatrice.caielli@pearson.com" -f ~/.ssh/id_ed25519_pearson
```

Use a passphrase or leave empty. Don’t overwrite existing keys.

### 2. Add the keys to GitHub

- **Personal:** GitHub.com → logged in as **naya85** → Settings → SSH and GPG keys → New SSH key. Paste contents of `~/.ssh/id_ed25519_naya85.pub`.
- **Work:** Same, but logged in as **beatrice-caielli_pearson** and paste `~/.ssh/id_ed25519_pearson.pub`.

### 3. Edit `~/.ssh/config`

Create or edit the file:

```bash
nano ~/.ssh/config
```

Add (adjust paths if your key names differ):

```
# Personal GitHub (naya85)
Host github-personal
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_naya85
  IdentitiesOnly yes

# Work GitHub (Pearson)
Host github-work
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_pearson
  IdentitiesOnly yes
```

Save and close (in nano: Ctrl+O, Enter, Ctrl+X).

### 4. Use the right host when cloning

- **Personal:** `git clone git@github-personal:naya85/Bea-Caielli-portfolio.git`
- **Work:** `git clone git@github-work:YOUR_ORG/repo-name.git`

### 5. Switch this repo to SSH (personal)

From inside this project:

```bash
cd /Users/UCAIEBE/Bea-Caielli-portfolio
git remote set-url origin git@github-personal:naya85/Bea-Caielli-portfolio.git
git push -u origin main
```

After that, `git push` / `git pull` here will use naya85 with no password. Work repos that use `git@github-work:...` will use the Pearson account.

---

## Option B: Keep using HTTPS (no SSH)

- **This repo:** Already uses `naya85` in the URL and has the credential helper disabled. When you push, Git will ask for a password → paste your **naya85** token.
- **Work repos:** Use the normal HTTPS URL and, when asked, log in with your **Pearson** token (or let the keychain store the work credentials).

To avoid mixing accounts, clear the GitHub credential from the keychain before switching:

```bash
git credential-osxkeychain erase
# Then type: protocol=https, host=github.com, then Enter twice
```

Then in the repo you want to use, run `git push` and enter the correct account’s token when asked.

---

## Commit identity (name/email) per repo

So commits show the right author:

**This repo (personal):**

```bash
cd /Users/UCAIEBE/Bea-Caielli-portfolio
git config user.name "Your Name"
git config user.email "your-personal-email@example.com"
```

**Work repo:**

```bash
cd /path/to/work-repo
git config user.name "Beatrice Caielli"
git config user.email "beatrice.caielli@pearson.com"
```

---

## Summary

| Where              | Account | What to use |
|--------------------|--------|-------------|
| Bea-Caielli-portfolio | naya85 (personal) | Already set. Push → use naya85 token. Or switch to `git@github-personal:naya85/Bea-Caielli-portfolio.git` after SSH setup. |
| Work repos         | Pearson | Clone with `git@github-work:org/repo.git` (SSH) or HTTPS + work token. |
