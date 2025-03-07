#!/bin/bash

# Create updated workflow file
cat > .github/workflows/deploy.yml << 'EOL'
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - clean-branch
  # Allow manual triggering
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: write
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout code
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'

    - name: Install dependencies
      run: npm install

    - name: Build project
      run: npm run build
      
    - name: Ensure data files are copied
      run: |
        mkdir -p dist/assets/data
        cp -f public/assets/data/*.json dist/assets/data/ || echo "No JSON files to copy"
        ls -la dist/assets/data/

    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
EOL

echo "Workflow file updated successfully!" 