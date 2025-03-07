#!/bin/bash

# Color codes for better readability
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}===== Tech Family Fun Fair Deployment Script =====${NC}"

# 1. Make sure we're working with the latest changes
echo -e "${YELLOW}Checking for local changes...${NC}"
git status

# 2. Build the project
echo -e "${YELLOW}Building the project...${NC}"
npm run build

if [ $? -ne 0 ]; then
  echo -e "${RED}Build failed! Aborting deployment.${NC}"
  exit 1
fi

# 3. Commit small file changes (like code or JSON files) if any
echo -e "${YELLOW}Committing small file changes...${NC}"
smallChanges=$(git status --porcelain | grep -v "\.png\|\.jpg\|\.jpeg\|\.gif\|\.svg\|\.pdf\|\.mp4\|\.mov\|\.webm\|node_modules\|dist")

if [ -n "$smallChanges" ]; then
  echo -e "${GREEN}Small changes detected. Committing...${NC}"
  echo -e "${YELLOW}Changes:${NC}\n$smallChanges"
  
  read -p "Enter commit message: " commitMessage
  
  # Only try to commit if there are changes to commit
  git add "*.js" "*.jsx" "*.json" "*.css" "*.html" "*.md" || true
  git commit -m "$commitMessage" || true
  
  # Try to push, but don't fail if it doesn't work
  echo -e "${YELLOW}Attempting to push small changes...${NC}"
  git push origin clean-branch || echo -e "${YELLOW}Could not push directly. Will use gh-pages instead.${NC}"
else
  echo -e "${YELLOW}No small file changes detected.${NC}"
fi

# 4. Copy any large assets to the public directory
echo -e "${YELLOW}Ensuring assets are in the public directory...${NC}"
if [ ! -d "public/assets/data" ]; then
  mkdir -p public/assets/data
fi

# 5. Build the project again to ensure latest changes are included
echo -e "${YELLOW}Rebuilding to ensure latest data is included...${NC}"
npm run build

# Verify that the dist/assets/data directory exists and has the JSON files
if [ ! -d "dist/assets/data" ]; then
  echo -e "${YELLOW}Creating data directory in dist...${NC}"
  mkdir -p dist/assets/data
fi

# Force copy the data files from public to dist to ensure they're included
echo -e "${YELLOW}Forcing copy of data files to dist directory...${NC}"
cp -f public/assets/data/*.json dist/assets/data/ || echo "No JSON files to copy"

# 6. Deploy to GitHub Pages
echo -e "${GREEN}Deploying to GitHub Pages...${NC}"
npm run deploy

if [ $? -eq 0 ]; then
  echo -e "${GREEN}✅ Deployment successful!${NC}"
  echo -e "${BLUE}Your site is now live at: https://lpcode808.github.io/TechFamilyFunFair/${NC}"
else
  echo -e "${RED}❌ Deployment failed.${NC}"
  exit 1
fi
