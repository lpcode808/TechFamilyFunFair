#!/bin/bash

# Make sure we're in the right directory
cd "$(dirname "$0")"
echo "Running from: $(pwd)"

# Check if Git is initialized
if [ ! -d ".git" ]; then
  echo "Initializing Git repository..."
  git init
else
  echo "Git repository already initialized."
fi

# Add all files to Git
echo "Adding files to Git..."
git add .

# Commit the changes with timestamp
echo "Committing changes..."
git commit -m "Update Tech Family Fun Fair app - $(date '+%Y-%m-%d %H:%M:%S')"

# Add remote if it doesn't exist
if ! git remote | grep -q "origin"; then
  echo "Adding remote..."
  git remote add origin https://github.com/lpcode808/TechFamilyFunFair.git
else
  echo "Remote 'origin' already exists."
fi

# Push to GitHub
echo "Pushing to GitHub..."
git push -u origin main

# Deploy to GitHub Pages
echo "Deploying to GitHub Pages..."
cd tech-family-fun-fair
npm run build
npm run deploy

echo "Deployment process completed!"
echo "Your application should now be available at: https://lpcode808.github.io/TechFamilyFunFair/"
