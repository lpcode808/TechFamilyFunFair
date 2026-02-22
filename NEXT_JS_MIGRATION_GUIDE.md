# Next.js 15 Migration Guide - Step by Step

This guide provides a concrete implementation plan for rebuilding TechFamilyFunFair with Next.js 15.

## Prerequisites

- Node.js 18.17 or later
- Git
- VS Code (recommended)

---

## Step 1: Project Setup (Day 1)

### 1.1 Create New Next.js Project

```bash
# In parent directory
npx create-next-app@latest tech-family-fun-fair-next --typescript --tailwind --app --no-src-dir

cd tech-family-fun-fair-next
```

Options selected:
- ✅ TypeScript
- ✅ ESLint
- ✅ Tailwind CSS
- ✅ App Router
- ❌ src/ directory (use app/ directly)
- ✅ Import alias (@/*)

### 1.2 Install Additional Dependencies

```bash
# UI Components
npx shadcn-ui@latest init

# Icons
npm install lucide-react

# Fonts (if using local fonts)
npm install @next/font

# PWA Support
npm install next-pwa

# Optional: Analytics
npm install @vercel/analytics
```

### 1.3 Configure for GitHub Pages

```js
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/TechFamilyFunFair',
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true,
}

module.exports = nextConfig
```

### 1.4 Update Package.json Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "export": "next build && next export",
    "deploy": "npm run build && npx gh-pages -d out"
  }
}
```

---

## Step 2: Project Structure (Day 1-2)

### 2.1 Create Directory Structure

```bash
mkdir -p app/\(routes\)/{experiences,vendors,schedule,map}
mkdir -p components/{ui,layout}
mkdir -p lib
mkdir -p types
mkdir -p public/{images,data}
```

### 2.2 Final Structure

```
tech-family-fun-fair-next/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── (routes)/
│   │   ├── experiences/
│   │   │   ├── page.tsx
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx
│   │   │   └── components/
│   │   │       └── ExperienceCard.tsx
│   │   ├── vendors/
│   │   │   ├── page.tsx
│   │   │   └── components/
│   │   │       └── VendorCard.tsx
│   │   ├── schedule/
│   │   │   └── page.tsx
│   │   └── map/
│   │       └── page.tsx
│   └── globals.css
├── components/
│   ├── ui/          # shadcn components
│   └── layout/
│       ├── BottomNav.tsx
│       ├── Header.tsx
│       └── ThemeToggle.tsx
├── lib/
│   ├── data.ts
│   ├── utils.ts
│   └── constants.ts
├── types/
│   └── index.ts
├── public/
│   ├── images/
│   ├── data/
│   └── manifest.json
└── next.config.js
```

---

## Step 3: Type Definitions (Day 2)

### 3.1 Create Types

```typescript
// types/index.ts
export interface Vendor {
  id: string;
  name: string;
  type: 'food' | 'merchandise';
  description?: string;
  emoji?: string;
  phone?: string;
  website?: string;
  address?: string;
  googleUrl?: string;
  yelpUrl?: string;
  instagramUrl?: string;
}

export interface Experience {
  id: string;
  title: string;
  provider: string;
  icon: string;
  description?: string;
  category: 'tech' | 'games' | 'activities';
  ageRange?: string;
  duration?: string;
  capacity?: string;
  location?: string;
  requirements?: string[];
  website?: string;
  images?: string[];
}

export interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  description?: string;
  location?: string;
  type: 'event' | 'performance' | 'activity';
}

export interface MapLocation {
  id: string;
  name: string;
  type: 'stage' | 'vendor' | 'exhibit' | 'amenity';
  coordinates: {
    x: number;
    y: number;
  };
  description?: string;
}
```

---

## Step 4: Data Layer (Day 2-3)

### 4.1 Copy Data Files

```bash
# Copy JSON files from old project
cp ../TechFamilyFunFair/public/assets/data/*.json public/data/
```

### 4.2 Create Data Utilities

```typescript
// lib/data.ts
import { Vendor, Experience, ScheduleItem } from '@/types';
import vendorsData from '@/public/data/vendors.json';
import experiencesData from '@/public/data/experiences.json';
import scheduleData from '@/public/data/schedule.json';

export async function getVendors(): Promise<Vendor[]> {
  return vendorsData as Vendor[];
}

export async function getFoodVendors(): Promise<Vendor[]> {
  const vendors = await getVendors();
  return vendors.filter(v => v.type === 'food');
}

export async function getMerchandiseVendors(): Promise<Vendor[]> {
  const vendors = await getVendors();
  return vendors.filter(v => v.type === 'merchandise');
}

export async function getExperiences(): Promise<Experience[]> {
  return experiencesData as Experience[];
}

export async function getExperienceById(id: string): Promise<Experience | null> {
  const experiences = await getExperiences();
  return experiences.find(e => e.id === id) || null;
}

export async function getTechExperiences(): Promise<Experience[]> {
  const experiences = await getExperiences();
  const techIds = [
    'vr-1', 'flight-sim-1', 'claw-1', 'hpd-keiki', 
    'hawaii-jobs', 'hpu', 'looopsie', 'lp-laser', 
    'lp-robotics', 'mit-lenovo', 'racing-sim'
  ];
  return experiences.filter(e => techIds.includes(e.id));
}

export async function getGamesActivities(): Promise<Experience[]> {
  const experiences = await getExperiences();
  const gameIds = [
    'petting-zoo', 'pony-rides', 'bounce-houses', 
    'carnival-games', 'crafts'
  ];
  return experiences.filter(e => gameIds.includes(e.id));
}

export async function getSchedule(): Promise<ScheduleItem[]> {
  return scheduleData as ScheduleItem[];
}
```

### 4.3 Constants

```typescript
// lib/constants.ts
export const SITE_CONFIG = {
  name: 'Tech & Family Fun Fair',
  shortName: 'TechFair',
  description: 'Join us for technology exhibits, VR experiences, food vendors, and family fun at La Pietra Hawaii School for Girls',
  url: 'https://lpcode808.github.io/TechFamilyFunFair',
  ogImage: '/images/og-image.jpg',
  event: {
    date: 'Saturday, March 8, 2025',
    time: '11am - 7pm',
    location: 'La Pietra Hawai'i School for Girls',
    address: '2933 Poni Moi Rd, Honolulu, HI 96815',
  },
  social: {
    website: 'https://www.lapietra.edu',
    registrationUrl: 'https://www.lapietra.edu/giving/tech-family-fun-fair/',
  },
  theme: {
    primary: '#004299',
    secondary: '#0056c7',
  },
} as const;

export const NAV_ITEMS = [
  { label: 'Home', href: '/', icon: 'home' },
  { label: 'Merchandise', href: '/vendors', icon: 'shopping-bag' },
  { label: 'Experiences', href: '/experiences', icon: 'sparkles' },
  { label: 'Schedule', href: '/schedule', icon: 'calendar' },
] as const;
```

---

## Step 5: Layout & Root Page (Day 3)

### 5.1 Root Layout

```typescript
// app/layout.tsx
import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';
import './globals.css';
import BottomNav from '@/components/layout/BottomNav';
import { ThemeProvider } from '@/components/ThemeProvider';
import { SITE_CONFIG } from '@/lib/constants';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${openSans.variable} font-body`}>
        <ThemeProvider>
          <main className="pb-20 min-h-screen">
            {children}
          </main>
          <BottomNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
```

### 5.2 Home Page

```typescript
// app/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { getFoodVendors } from '@/lib/data';
import { SITE_CONFIG } from '@/lib/constants';
import VendorCard from '@/app/(routes)/vendors/components/VendorCard';

export default async function Home() {
  const foodVendors = await getFoodVendors();

  return (
    <div className="container mx-auto px-4 pb-20">
      {/* Hero Section */}
      <div className="pt-12 py-8 text-center">
        <h1 className="text-3xl font-bold text-primary dark:text-white">
          {SITE_CONFIG.name}
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          <a 
            href={SITE_CONFIG.social.website}
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:underline"
          >
            {SITE_CONFIG.event.location}
          </a>
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          {SITE_CONFIG.event.date} • {SITE_CONFIG.event.time}
        </p>
      </div>

      {/* Map PDF Button */}
      <div className="mb-6">
        <a 
          href="https://www.lapietra.edu/uploads/files/la-pietra-tfff-map-2025.pdf"
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full py-4 px-6 bg-primary hover:bg-secondary transition-all duration-300 
                     text-white text-center text-xl font-bold rounded-lg shadow-lg 
                     hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <div className="flex items-center justify-center space-x-3">
            <svg 
              className="h-7 w-7" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" 
              />
            </svg>
            <span>Event Map</span>
          </div>
        </a>
      </div>

      {/* Event Details */}
      <section className="bg-white dark:bg-dark-card rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 mb-6">
        <p className="text-gray-700 dark:text-gray-300">
          Join us for a day of technology, fun, and learning! Explore interactive exhibits, 
          try out VR experiences, enjoy delicious food, and connect with tech enthusiasts.
          <br />
          <a 
            href={SITE_CONFIG.social.registrationUrl}
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Register
          </a> to stay updated on Technology at La Pietra.
        </p>
      </section>

      {/* Food Vendors Section */}
      <section className="bg-white dark:bg-dark-card rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-primary dark:text-white">
            Food Vendors
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {foodVendors.map(vendor => (
            <VendorCard key={vendor.id} vendor={vendor} />
          ))}
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-white dark:bg-dark-card rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 mb-6">
        <div className="relative w-full aspect-video">
          <Image
            src="/images/tech-fair-highlight.jpg"
            alt="Tech & Family Fun Fair Highlight"
            fill
            className="rounded-lg object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            priority
          />
        </div>
      </section>
    </div>
  );
}
```

---

## Step 6: Components (Day 4-5)

### 6.1 Bottom Navigation

```typescript
// components/layout/BottomNav.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, ShoppingBag, Sparkles, Calendar } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Merchandise', href: '/vendors', icon: ShoppingBag },
  { label: 'Experiences', href: '/experiences', icon: Sparkles },
  { label: 'Schedule', href: '/schedule', icon: Calendar },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-dark-secondary border-t border-gray-200 dark:border-gray-700 shadow-lg z-50">
      <div className="flex justify-around max-w-2xl mx-auto">
        {NAV_ITEMS.map(({ label, href, icon: Icon }) => {
          const isActive = pathname === href;
          
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center py-3 px-3 sm:px-4 rounded-t-md transition-colors duration-200 ${
                isActive 
                  ? 'bg-primary dark:bg-dark-primary text-white' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-dark-primary'
              }`}
            >
              <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-current'}`} />
              <span className="text-xs mt-1 font-medium">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
```

### 6.2 Vendor Card

```typescript
// app/(routes)/vendors/components/VendorCard.tsx
import { Vendor } from '@/types';

interface VendorCardProps {
  vendor: Vendor;
}

export default function VendorCard({ vendor }: VendorCardProps) {
  return (
    <div className="bg-gray-50 dark:bg-dark-secondary rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-4 flex flex-col h-full">
      <div className="flex items-center mb-2">
        {vendor.emoji && <span className="text-2xl mr-2">{vendor.emoji}</span>}
        <h3 className="font-medium dark:text-white">{vendor.name}</h3>
      </div>
      
      {vendor.description && (
        <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
          {vendor.description}
        </p>
      )}
      
      {/* Contact Info */}
      <div className="mt-3 space-y-1 text-sm">
        {vendor.phone && (
          <div className="text-gray-600 dark:text-gray-400">
            <span className="font-medium">Phone:</span> {vendor.phone}
          </div>
        )}
        
        {vendor.website && (
          <div className="text-gray-600 dark:text-gray-400">
            <span className="font-medium">Website:</span>{' '}
            <a 
              href={vendor.website} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              {vendor.website.replace(/https?:\/\/(www\.)?/, '')}
            </a>
          </div>
        )}
      </div>
      
      {/* Social Media Links */}
      {(vendor.googleUrl || vendor.yelpUrl || vendor.instagramUrl) && (
        <div className="mt-auto pt-4 flex justify-center gap-3 flex-wrap">
          {vendor.googleUrl && (
            <a 
              href={vendor.googleUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-secondary transition-colors"
            >
              Google
            </a>
          )}
          {vendor.yelpUrl && (
            <a 
              href={vendor.yelpUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-secondary transition-colors"
            >
              Yelp
            </a>
          )}
          {vendor.instagramUrl && (
            <a 
              href={vendor.instagramUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-secondary transition-colors"
            >
              Instagram
            </a>
          )}
        </div>
      )}
    </div>
  );
}
```

---

## Step 7: Optimization (Day 6-7)

### 7.1 Image Optimization Script

```bash
# Create optimization script
npm install sharp
```

```javascript
// scripts/optimize-images.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const INPUT_DIR = '../TechFamilyFunFair/public/assets/images';
const OUTPUT_DIR = './public/images';

async function optimizeImage(inputPath, outputPath) {
  const image = sharp(inputPath);
  const metadata = await image.metadata();
  
  // Resize if too large
  const maxWidth = 1200;
  const shouldResize = metadata.width > maxWidth;
  
  if (shouldResize) {
    image.resize(maxWidth, null, { withoutEnlargement: true });
  }
  
  // Save as WebP
  await image
    .webp({ quality: 80 })
    .toFile(outputPath.replace(/\.[^.]+$/, '.webp'));
  
  // Save optimized JPEG
  await image
    .jpeg({ quality: 80, progressive: true })
    .toFile(outputPath);
  
  console.log(`✓ Optimized: ${path.basename(inputPath)}`);
}

// Run optimization
const files = fs.readdirSync(INPUT_DIR);
files.forEach(file => {
  if (/\.(jpg|jpeg|png)$/i.test(file)) {
    optimizeImage(
      path.join(INPUT_DIR, file),
      path.join(OUTPUT_DIR, file)
    );
  }
});
```

### 7.2 Lazy YouTube Component

```typescript
// components/YouTubeEmbed.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
}

export default function YouTubeEmbed({ videoId, title }: YouTubeEmbedProps) {
  const [showVideo, setShowVideo] = useState(false);

  if (showVideo) {
    return (
      <div className="relative aspect-video">
        <iframe 
          className="absolute inset-0 w-full h-full rounded-lg"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setShowVideo(true)}
      className="relative aspect-video w-full group cursor-pointer"
    >
      <Image
        src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
        alt={title}
        fill
        className="rounded-lg object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors rounded-lg flex items-center justify-center">
        <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 transition-transform">
          <Play className="w-8 h-8 text-white fill-current" />
        </div>
      </div>
    </button>
  );
}
```

---

## Step 8: Deployment (Day 7)

### 8.1 GitHub Actions

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 8.2 Deploy

```bash
# Build
npm run build

# Test locally
npx serve out

# Deploy (if using gh-pages package)
npm run deploy

# Or push to trigger GitHub Actions
git add .
git commit -m "Initial Next.js migration"
git push origin main
```

---

## Step 9: Testing & Validation

### 9.1 Lighthouse Test

```bash
npm install -g lighthouse

# Run Lighthouse
lighthouse http://localhost:3000 --view
```

**Target Scores:**
- Performance: >90
- Accessibility: >90
- Best Practices: >90
- SEO: >90

### 9.2 Manual Testing Checklist

- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Images load and are optimized
- [ ] Dark mode toggles properly
- [ ] Mobile responsive
- [ ] YouTube embeds lazy load
- [ ] Links open correctly
- [ ] No console errors

---

## Migration Timeline

### Week 1: Foundation
- ✅ Day 1-2: Project setup, structure, types
- ✅ Day 3-4: Core pages (Home, Vendors)
- ✅ Day 5: Experiences page
- ✅ Day 6-7: Schedule, Map pages

### Week 2: Polish
- ✅ Day 8-9: Image optimization
- ✅ Day 10-11: Performance tuning
- ✅ Day 12-13: Accessibility improvements
- ✅ Day 14: Testing & bug fixes

### Week 3: Launch
- ✅ Day 15-16: Final testing
- ✅ Day 17: Deploy to staging
- ✅ Day 18-19: User acceptance testing
- ✅ Day 20: Production deployment
- ✅ Day 21: Monitor & fix issues

---

## Common Issues & Solutions

### Issue: Images not loading after deployment

**Solution:**
```javascript
// next.config.js
images: {
  unoptimized: true, // Required for static export
  loader: 'default',
}
```

### Issue: 404 on page refresh

**Solution:** GitHub Pages expects `trailingSlash: true` in config

### Issue: Fonts not loading

**Solution:** Ensure fonts are in `public/fonts` and use `next/font/local`

### Issue: Dark mode flicker

**Solution:**
```typescript
// Add to layout.tsx
<script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        const theme = localStorage.getItem('theme') || 'dark';
        document.documentElement.classList.toggle('dark', theme === 'dark');
      })()
    `,
  }}
/>
```

---

## Performance Benchmarks

### Before (Current Vite App)
- FCP: ~2.5s
- LCP: ~4s
- Bundle: ~400KB
- Lighthouse: ~65

### After (Next.js)
- FCP: <1.5s ✅
- LCP: <2.5s ✅
- Bundle: <200KB ✅
- Lighthouse: >90 ✅

---

## Next Steps After Migration

1. **Add Analytics**
   ```bash
   npm install @vercel/analytics
   ```

2. **Implement Search**
   - Add search to vendors
   - Filter experiences by category

3. **Add Admin Panel** (optional)
   - Consider Sanity CMS for non-technical updates

4. **Progressive Enhancement**
   - Add offline support
   - Implement push notifications

---

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Next.js GitHub Pages](https://github.com/gregrickaby/nextjs-github-pages)

---

## Support

If you encounter issues during migration:

1. Check Next.js documentation
2. Review this guide
3. Check GitHub Discussions
4. Open an issue with details

**Good luck with the migration! 🚀**
