# Content Update Guide for Tech & Family Fun Fair 2026

This guide explains how to update content for the annual event.

## Quick Start

**To update for a new year, you mainly need to edit these files:**

1. `src/config/event.js` - Event details (date, time, links, videos)
2. `public/assets/data/vendors.json` - Food & merchandise vendors
3. `public/assets/data/experiences.json` - Tech exhibits & activities
4. `public/assets/data/schedule.json` - Event schedule

---

## 1. Event Configuration (`src/config/event.js`)

This is the **main file** for event-specific details:

```javascript
export const EVENT_CONFIG = {
  // Update these each year
  year: 2026,
  date: "Saturday, March 7, 2026",  // Update when confirmed
  time: "11am - 7pm",
  
  // Links - update when available
  mapPdfUrl: "https://www.lapietra.edu/uploads/files/la-pietra-tfff-map-2026.pdf",
  registrationUrl: "https://www.lapietra.edu/giving/tech-family-fun-fair/",
  
  // YouTube videos - update video IDs for new content
  videos: [
    {
      id: "VIDEO_ID_HERE",  // Just the ID from YouTube URL
      title: "Video Title",
      description: "Brief description"
    }
  ]
};
```

### YouTube Video IDs
To get a video ID from a YouTube URL:
- URL: `https://www.youtube.com/watch?v=LYXsFgiDduc`
- ID: `LYXsFgiDduc` (the part after `v=`)

---

## 2. Food Vendors (`public/assets/data/vendors.json`)

Each vendor looks like this:

```json
{
  "id": "food-1",
  "name": "Vendor Name",
  "type": "food",
  "emoji": "🍔",
  "description": "Brief description of the food.",
  "location": "Food Court A",
  "phone": "(808) 555-1234",
  "website": "https://example.com",
  "address": "123 Main St, Honolulu, HI",
  "googleUrl": "https://maps.app.goo.gl/...",
  "yelpUrl": "https://www.yelp.com/biz/...",
  "instagramUrl": "https://www.instagram.com/..."
}
```

**Types:** `"food"` or `"merchandise"`

**To add a vendor:** Copy an existing entry and update the fields.
**To remove a vendor:** Delete the entire `{...}` block (including the comma before it if it's not the first).

---

## 3. Experiences (`public/assets/data/experiences.json`)

```json
{
  "id": "unique-id",
  "title": "Experience Name",
  "category": "experience",
  "provider": "Company/Organization Name",
  "description": "What visitors will experience.",
  "ageRestriction": "All ages",
  "duration": "10 minutes",
  "location": "Tech Zone",
  "waitTime": "Typically 15-20 minutes",
  "icon": "🎮",
  "website": "https://example.com"
}
```

**Categories:** `"experience"` for tech exhibits, `"activity"` for games/activities

**Note:** The IDs shown on the Experiences page are controlled in `src/pages/Experiences.jsx` in the `keepIds` array. Update that array to show/hide experiences.

---

## 4. Schedule (`public/assets/data/schedule.json`)

```json
{
  "id": "stage1-12pm",
  "title": "Event Title",
  "time": "12:00 PM",
  "location": "Stage 1 (Gym)",
  "type": "performance"
}
```

**Types:** `"performance"` or `"activity"`
**Locations:** `"Stage 1 (Gym)"` or `"Stage 2 (Great Lawn)"`

---

## Testing Changes

1. Run the dev server:
   ```bash
   cd /Users/justinlai/Coding/TechFamilyFunFair
   npm run dev
   ```

2. Open `http://localhost:5173` (or whatever port shows up)

3. Changes to JSON files should show immediately after page refresh.

---

## Deploying

```bash
npm run build
npm run deploy
```

The site will be live at: https://lpcode808.github.io/TechFamilyFunFair/

---

## File Structure Quick Reference

```
TechFamilyFunFair/
├── src/
│   ├── config/
│   │   └── event.js          # ← MAIN CONFIG FILE
│   ├── components/
│   │   └── LazyYouTube.jsx   # YouTube lazy loading
│   └── pages/
│       ├── Home.jsx          # Homepage
│       ├── Experiences.jsx   # Tech exhibits page
│       ├── Vendors.jsx       # Merchandise page
│       └── Schedule.jsx      # Event schedule
└── public/
    └── assets/
        ├── data/
        │   ├── vendors.json      # ← VENDORS DATA
        │   ├── experiences.json  # ← EXPERIENCES DATA
        │   └── schedule.json     # ← SCHEDULE DATA
        └── images/
            └── tech-fair-highlight.jpg  # Hero image
```

---

## Common Tasks

### Change the event date
Edit `src/config/event.js` → `date` field

### Add a new food vendor
Add entry to `public/assets/data/vendors.json` with `"type": "food"`

### Update YouTube videos
Edit `src/config/event.js` → `videos` array

### Hide the map button (until PDF is ready)
Set `mapPdfUrl: ""` in `src/config/event.js`

### Update the hero image
Replace `public/assets/images/tech-fair-highlight.jpg` (and `.webp` version)
