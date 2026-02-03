# GitHub Deployment Guide

Follow these steps to deploy your project to GitHub:

## Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **+** icon in the top right → **New repository**
3. Name it: `simplistic | studio` (or any name you prefer)
4. Choose **Public** or **Private**
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click **Create repository**

## Step 2: Add Files and Commit

Run these commands in your terminal (PowerShell):

```powershell
# Navigate to your project
cd c:\Users\win-ks\Desktop\simplistic.studio

# Add all files
git add .

# Create your first commit
git commit -m "Initial commit: simplistic | studio portfolio website"

# Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/simplistic.studio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Vercel (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **Add New Project**
3. Import your `simplistic | studio` repository
4. Vercel will auto-detect Vite settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist` (this is now configured correctly)
5. Click **Deploy**
6. Your site will be live in minutes!

## Step 4: Deploy to Netlify (Alternative)

1. Go to [netlify.com](https://netlify.com) and sign in with GitHub
2. Click **Add new site** → **Import an existing project**
3. Select your `simplistic | studio` repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **Deploy site**

## Important Notes

- ✅ Your Supabase keys are safe to commit (they're public anon keys)
- ✅ The `.gitignore` file will exclude `node_modules` and build files
- ✅ Make sure to update the README with your actual GitHub username
- ✅ After deployment, update your Supabase CORS settings if needed

## Troubleshooting

### Deprecation Warnings (Safe to Ignore)
If you see warnings like:
```
npm warn deprecated node-domexception@1.0.0
```
These are **harmless warnings** from dependencies and won't break your build. You can safely ignore them.

### If you get authentication errors:
```powershell
# Use GitHub CLI or Personal Access Token
git remote set-url origin https://YOUR_TOKEN@github.com/YOUR_USERNAME/simplistic.studio.git
```

### If build fails on Vercel/Netlify:
- Check that all dependencies are in `package.json`
- Ensure Node.js version is 18+ in your deployment settings
- Check build logs for specific errors
- The deprecation warnings are normal and won't cause build failures

## Next Steps

After deployment:
1. Update your domain (if you have one) in Vercel/Netlify settings
2. Add environment variables if needed (though none are required for this project)
3. Test your live site thoroughly
4. Share your portfolio! 🎉
