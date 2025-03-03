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
  # TODO: Replace the URL below with your actual GitHub repository URL
  # Example: https://github.com/yourusername/TechFamilyFunFair.git
  git remote add origin https://github.com/yourusername/TechFamilyFunFair.git
else
  echo "Remote 'origin' already exists."
fi

# Push to GitHub
echo "Pushing to GitHub..."
git push -u origin main

# Build the project
echo "Building the project..."
cd tech-family-fun-fair
npm run build

echo "Deployment process completed!"
echo "Your application has been built and pushed to GitHub." 