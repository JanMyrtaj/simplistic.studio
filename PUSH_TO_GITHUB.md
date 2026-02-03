# How to push to GitHub (and update Vercel)

When you push to GitHub, Vercel automatically rebuilds and updates your site if the project is connected.

---

## Quick steps (run in terminal)

Open a terminal in your project folder (or use the terminal in Cursor/VS Code).

### 1. See what changed
```powershell
git status
```
Shows modified, added, and deleted files.

### 2. Stage everything
```powershell
git add .
```
This adds all changes (including new folders like `gjakova/` and `zurich/`).

### 3. Commit with a message
```powershell
git commit -m "Your message here"
```
Example: `git commit -m "Rename to simplistic | studio, add project descriptions"`

### 4. Push to GitHub
```powershell
git push origin main
```
This uploads your commits to GitHub. If Vercel is linked to this repo, it will deploy automatically.

---

## If you get errors

**"Nothing to commit"**  
Run `git add .` first, then commit again.

**"Permission denied" or "Authentication failed"**  
- Make sure you’re logged in to GitHub (browser or GitHub CLI).
- If you use 2FA, use a **Personal Access Token** instead of your password when Git asks for credentials.

**"Updates were rejected"**  
Someone else pushed to the repo, or you pushed from another machine. Pull first, then push:
```powershell
git pull origin main
git push origin main
```

---

## Vercel

- **First time:** Connect the repo at [vercel.com](https://vercel.com) → Add New Project → Import `simplistic.studio` → Deploy.
- **After that:** Every `git push origin main` triggers a new deployment. Check the Vercel dashboard for build status and live URL.
