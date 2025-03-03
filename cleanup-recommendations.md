# Local Directory Cleanup Recommendations

## Current Issues
- Nested Git repository in tech-family-fun-fair directory
- Duplicate files between root and tech-family-fun-fair
- Large data directory with unnecessary files
- Potential confusion between root project and nested project

## Recommended Actions
1. Backup important files before proceeding
2. Decide on a single project structure (either root or tech-family-fun-fair)
3. Remove the nested Git repository
4. Clean up large data files
5. Consolidate dependencies

## Specific Steps

### Option 1: Keep Root Project Structure

```bash
# 1. Backup important files
mkdir -p ~/backup/TechFamilyFunFair
cp -r src planningDocs public ~/backup/TechFamilyFunFair/

# 2. Remove nested Git repository
rm -rf tech-family-fun-fair/.git

# 3. Copy any unique files from nested project
cp -n tech-family-fun-fair/src/* src/
cp -n tech-family-fun-fair/public/* public/

# 4. Remove nested project directory
rm -rf tech-family-fun-fair

# 5. Clean up data directory
rm -rf data

# 6. Reinstall dependencies if needed
npm install
```

### Option 2: Use Nested Project Structure

```bash
# 1. Backup important files
mkdir -p ~/backup/TechFamilyFunFair
cp -r planningDocs ~/backup/TechFamilyFunFair/

# 2. Copy planning docs to nested project
cp -r planningDocs tech-family-fun-fair/

# 3. Move to nested project directory
cd tech-family-fun-fair

# 4. Remove parent .git and initialize new one
rm -rf ../.git
git init

# 5. Setup proper .gitignore
cat ../.gitignore > .gitignore

# 6. Add and commit files
git add .
git commit -m "Initial commit with consolidated files"
```

## Recommended Structure
Based on your current setup, Option 1 (keeping the root project) seems more appropriate since you've already set up Git in the root directory and have made commits there.

## After Cleanup
After cleanup, your directory should have a clear, single project structure without nested repositories or duplicate files. This will make Git operations smoother and prevent confusion about which files to edit.
