# La Pietra Tech & Family Fun Fair

An interactive, mobile-first Progressive Web App (PWA) for the La Pietra School Tech & Family Fun Fair event.

## Features

### 🎯 Core Functionality
- **Interactive Experiences Catalog**: Browse VR experiences, simulations, workshops, and educational activities
- **Dynamic Schedule**: Filterable event timeline with expandable details
- **Vendor Listings**: Food and merchandise vendors with contact information
- **Mobile-First Design**: Optimized for smartphones with touch-friendly navigation
- **PWA Support**: Works offline and can be installed on devices

### ⚡ Performance Optimizations
- **Code Splitting**: Lazy-loaded pages for faster initial load
- **React Memoization**: Optimized component rendering
- **Compressed Assets**: Gzip compression for smaller bundle sizes
- **Optimized Images**: Recommended WebP format with lazy loading
- **Minimal Dependencies**: Lean bundle for fast loading

### 🎨 Design
- La Pietra brand colors and styling
- Responsive grid layouts
- Smooth transitions and hover effects
- Accessible focus states
- Custom Tailwind CSS components

## Project Structure

```
TechFamilyFunFair/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── BackButton.jsx
│   │   ├── BottomNav.jsx
│   │   ├── Card.jsx
│   │   ├── ErrorBoundary.jsx
│   │   ├── Header.jsx
│   │   └── LoadingSpinner.jsx
│   ├── data/                # JSON data files
│   │   ├── experiences.json
│   │   ├── schedule.json
│   │   └── vendors.json
│   ├── pages/               # Page components
│   │   ├── Home.jsx
│   │   ├── Schedule.jsx
│   │   ├── Experiences.jsx
│   │   ├── ExperienceDetail.jsx
│   │   └── Vendors.jsx
│   ├── App.jsx              # Main app with routing
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── index.html               # HTML entry point
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── package.json             # Dependencies and scripts
```

## Technologies Used

- **React 18**: Modern UI library with hooks
- **Vite 5**: Lightning-fast build tool
- **React Router 6**: Client-side routing
- **Tailwind CSS 3**: Utility-first CSS framework
- **Heroicons**: Beautiful hand-crafted SVG icons
- **Vite PWA Plugin**: Progressive Web App capabilities

## Development

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install
```

### Development Server

```bash
# Start dev server (with hot reload)
npm run dev

# Server will start at http://localhost:5173/TechFamilyFunFair/
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## Deployment to GitHub Pages

### Automated Deployment

```bash
# Build and deploy in one command
npm run deploy
```

This will:
1. Build the optimized production bundle
2. Push to the `gh-pages` branch
3. Make the site live at: `https://lpcode808.github.io/TechFamilyFunFair/`

### Manual Deployment

If you prefer to deploy manually:

```bash
# Build the project
npm run build

# Install gh-pages globally (if not already installed)
npm install -g gh-pages

# Deploy the dist folder
gh-pages -d dist
```

### GitHub Pages Configuration

1. Go to repository **Settings** → **Pages**
2. Set **Source** to `gh-pages` branch
3. The site will be available at the URL shown

## Updating Content

### Experiences
Edit `src/data/experiences.json`:

```json
{
  "id": "unique-id",
  "title": "Experience Name",
  "provider": "Provider Name",
  "icon": "🎯",
  "description": "Description...",
  "location": "Location in venue",
  "duration": "10-15 minutes",
  "ageRestriction": "Ages 8+",
  "category": "vr|simulation|interactive|educational",
  "cost": "Free"
}
```

### Schedule
Edit `src/data/schedule.json`:

```json
{
  "id": "schedule-id",
  "time": "10:00 AM",
  "title": "Event Title",
  "description": "Event description...",
  "location": "Location",
  "type": "general|ceremony|workshop|performance|competition"
}
```

### Vendors
Edit `src/data/vendors.json`:

```json
{
  "id": "vendor-id",
  "name": "Vendor Name",
  "emoji": "🍕",
  "category": "food|merchandise",
  "description": "Description...",
  "location": "Booth location",
  "phone": "808-555-0000",
  "website": "example.com"
}
```

## Performance Tips

### Image Optimization
1. Use WebP format for images
2. Compress images before adding (target < 100KB)
3. Use responsive images with multiple sizes
4. Add lazy loading: `<img loading="lazy" />`

### Bundle Size
Current production bundle sizes (gzipped):
- React vendor chunk: ~45 KB
- Router chunk: ~15 KB
- Main app: ~30 KB
- **Total initial load: ~90 KB** ✅

### Lighthouse Scores (Target)
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+
- PWA: ✓

## Browser Support

- Chrome/Edge: Last 2 versions
- Firefox: Last 2 versions
- Safari: Last 2 versions
- Mobile browsers: iOS 13+, Android 8+

## Troubleshooting

### Build fails with module not found
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Deployment fails
```bash
# Ensure git is configured
git config user.name "Your Name"
git config user.email "your.email@example.com"

# Try deploying again
npm run deploy
```

### Styles not updating
```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

## License

This project is created for La Pietra Hawaii School for Girls.

## Contact

For questions or issues, contact: 808.922.2744
