# Tech Family Fun Fair

A mobile-friendly web application for the Tech & Family Fun Fair at La Pietra Hawai'i School for Girls.

## Overview

This application provides:
- Interactive exploration of tech experiences at the fair
- Food vendor information with social media links
- Merchandise vendors information
- Schedule of events and activities

## Development Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Deployment Process

### Option 1: Using the Deployment Script (Recommended)

Our repository includes a deployment script that handles both committing small changes and deploying to GitHub Pages:

```bash
# Run the deployment script
./deploy-script.sh
```

The script will:
1. Try to commit small files (JS, JSX, JSON, etc.)
2. Copy necessary assets to the public directory
3. Deploy to GitHub Pages using the gh-pages package

### Option 2: Manual Deployment

If you need to deploy manually:

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### Handling Large Files

When dealing with large files (images, videos, etc.):

1. Place them in the `public` directory rather than `src/assets`
2. Don't commit them directly to Git if possible
3. Consider using a CDN for very large assets

## Repository Maintenance

To maintain a healthy repository size:

```bash
# View the largest files in the repository
git ls-files | xargs du -h | sort -hr | head -20

# Remove large files from Git history (be careful!)
# git filter-branch --tree-filter 'rm -rf path/to/large/file' HEAD
```

## Troubleshooting

If you encounter HTTP 400 errors when pushing:

1. Try using the deployment script instead of pushing directly
2. Make smaller, more frequent commits
3. Ensure you're not tracking large binary files in Git

## Live Site

The application is deployed at: https://lpcode808.github.io/TechFamilyFunFair/

## Features

- 📱 Mobile-friendly interface with bottom navigation
- 🎮 Simplified Experience Listings: Browse through VR experiences, flight simulators, and claw machines
- 🍔 Food vendor and merchandise listings
- 📅 Event details and information
- 📴 Offline capabilities (coming soon)

## Recent Updates

- Simplified experience listings for better mobile compatibility
- Enhanced navigation with back buttons
- Reorganized content for improved user experience
- Updated food vendor and merchandise information
- Changed "Vendors" to "Merchandise" in navigation

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/lpcode808/TechFamilyFunFair.git
   cd TechFamilyFunFair/tech-family-fun-fair
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173/
   ```

## Local Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Deployment

This project is configured for GitHub Pages deployment.

1. Update the `homepage` field in `package.json` to match your repository.
2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

## Built With

- [React](https://reactjs.org/) - UI Framework
- [Vite](https://vitejs.dev/) - Build Tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [React Router](https://reactrouter.com/) - Routing
- [Heroicons](https://heroicons.com/) - Icons
- [Zustand](https://zustand-demo.pmnd.rs/) - State Management

## Project Structure

```
/tech-family-fun-fair
  ├── public/               # Static assets
  ├── src/
  │   ├── assets/
  │   │   └── data/         # JSON data files
  │   │       ├── schedule.json
  │   │       ├── map.json
  │   │       └── vendors.json
  │   ├── components/       # Reusable components
  │   │   ├── BottomNav.jsx
  │   │   ├── BackButton.jsx
  │   │   ├── MapMarker.jsx
  │   │   └── ScheduleItem.jsx
  │   ├── pages/            # Page components
  │   │   ├── Home.jsx
  │   │   ├── Schedule.jsx
  │   │   ├── Experiences.jsx
  │   │   ├── ExperienceDetail.jsx
  │   │   ├── Map.jsx
  │   │   └── Vendors.jsx
  │   ├── App.jsx           # Main app component
  │   ├── main.jsx          # Entry point
  │   └── index.css         # Global styles
  ├── index.html            # Entry HTML
  ├── tailwind.config.js    # Tailwind configuration
  ├── postcss.config.js     # PostCSS configuration
  └── vite.config.js        # Vite configuration
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- La Pietra – Hawai'i School for Girls for hosting the Tech & Family Fun Fair event
- All contributors to the open-source libraries used in this project
