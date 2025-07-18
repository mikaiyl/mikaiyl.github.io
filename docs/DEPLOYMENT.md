# Deployment Guide

This document explains how to deploy your ATS-compliant resume site to GitHub Pages.

## Automatic Deployment

The project is configured with GitHub Actions for automatic deployment. Every time you push changes to the `main` branch, your site will be automatically built and deployed.

### Setup Steps

1. **Enable GitHub Pages**
   - Go to your repository settings on GitHub
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"

2. **Push to Main Branch**
   ```bash
   git add .
   git commit -m "Deploy resume site"
   git push origin main
   ```

3. **Monitor Deployment**
   - Go to the "Actions" tab in your GitHub repository
   - Watch the deployment workflow run
   - Once complete, your site will be available at: `https://[username].github.io/[repository-name]/`

## Manual Verification

Before deploying, you can verify your build locally:

```bash
# Clean and build
pnpm run build:clean

# Verify the build
pnpm run verify

# Preview locally
pnpm run preview
```

## Deployment Workflow

The GitHub Actions workflow (`.github/workflows/deploy.yml`) performs these steps:

1. **Build Job**
   - Checks out the code
   - Sets up pnpm and Node.js
   - Installs dependencies
   - Builds the project
   - Uploads the build artifacts

2. **Deploy Job**
   - Downloads the build artifacts
   - Deploys to GitHub Pages

## Troubleshooting

### Build Failures

If the build fails:
1. Check the Actions tab for error details
2. Ensure all dependencies are properly listed in `package.json`
3. Test the build locally with `pnpm run build`

### Site Not Loading

If your site doesn't load after deployment:
1. Check that GitHub Pages is enabled in repository settings
2. Verify the base path in `vite.config.js` matches your repository name
3. Ensure the deployment workflow completed successfully

### Asset Loading Issues

If CSS or other assets don't load:
1. Check the browser developer tools for 404 errors
2. Verify the base path configuration in `vite.config.js`
3. Ensure the build process completed without errors

## Configuration Files

- `.github/workflows/deploy.yml` - Main deployment workflow
- `.github/workflows/test-build.yml` - Build testing for pull requests
- `vite.config.js` - Build configuration with proper base path
- `scripts/verify-deployment.js` - Deployment verification script

## Requirements Satisfied

This deployment configuration satisfies the following requirements:

- **3.2**: Site is accessible via GitHub Pages URL after deployment
- **3.3**: Automatic deployment via GitHub Actions on repository changes
- **3.5**: Site loads quickly with optimized assets and minimal HTTP requests