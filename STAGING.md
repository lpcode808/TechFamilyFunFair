# Tech Family Fun Fair - Staging Environment

This document explains how to use the staging environment for testing changes before deploying to the production site.

## Staging Environment Details

- **Staging URL**: https://lpcode808.github.io/TechFamilyFunFair/staging/
- **Production URL**: https://lpcode808.github.io/TechFamilyFunFair/

The staging environment allows you to test changes in a GitHub Pages environment that's separate from the production site, providing a safe place to verify functionality before deploying to the live site.

## Key Features

- **Isolated Environment**: Changes to staging don't affect the production site
- **Visual Indicators**: Staging environment has a yellow banner to clearly identify it
- **Separate Deployment**: Uses the same gh-pages branch but in a different subdirectory
- **Same Repository**: No need to maintain separate codebases

## How to Use the Staging Environment

### 1. Making Changes for Staging

All work should be done on the `staging` branch:

```bash
# Switch to staging branch
git checkout staging

# Make your changes
# ...

# Commit your changes
git add .
git commit -m "Description of your changes"

# Push to remote staging branch
git push origin staging
```

### 2. Building and Deploying to Staging

To deploy to the staging environment:

```bash
# Run the staging deployment script
npm run predeploy-staging && npm run deploy-staging
```

This will:
1. Build the application with staging settings
2. Copy data files to the build directory
3. Copy the staging-specific 404.html file
4. Deploy to the `/staging` subdirectory in GitHub Pages

### 3. Testing in Staging

1. Visit https://lpcode808.github.io/TechFamilyFunFair/staging/
2. Verify all functionality works correctly
3. Test on multiple devices and browsers if possible
4. Ensure data files are loading correctly
5. Check that routing works properly

### 4. Promoting to Production

Once you've verified everything works in staging:

```bash
# Switch to main branch
git checkout main

# Merge changes from staging
git merge staging

# Deploy to production
npm run predeploy && npm run deploy
```

## Technical Implementation

The staging environment works through several key mechanisms:

1. **Base Path Configuration**: The `vite.config.js` file detects staging builds and uses a different base path
2. **Environment Detection**: Components check if they're running in the staging environment and adjust accordingly
3. **Special 404.html**: The staging environment has a customized 404.html file with different path handling
4. **Build Process**: The build process sets environment variables to indicate staging builds

## Troubleshooting

If you encounter issues with the staging environment:

- **404 Errors**: Check that data files are being copied correctly
- **Routing Issues**: Verify the 404.html file is correctly handling paths for staging
- **Base Path Problems**: Ensure all components are using the correct baseUrl variable

For additional help, refer to the GitHub Pages deployment postmortem in the `planningDocs/log.md` file. 