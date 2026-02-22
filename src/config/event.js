/**
 * EVENT CONFIGURATION
 * ==================
 * Update this file each year with new event details.
 * All event-specific information should be centralized here.
 */

export const EVENT_CONFIG = {
  // Basic Event Info
  name: "Tech & Family Fun Fair",
  year: 2026,
  tagline: "Technology, Fun, and Learning for All Ages",
  
  // Date & Time
  date: "TBD 2026", // Update when confirmed: e.g., "Saturday, March 7, 2026"
  time: "11am - 7pm",
  
  // Location
  venue: "La Pietra Hawai'i School for Girls",
  address: "2933 Poni Moi Rd, Honolulu, HI 96815",
  venueUrl: "https://www.lapietra.edu",
  
  // Links
  registrationUrl: "https://www.lapietra.edu/giving/tech-family-fun-fair/",
  mapPdfUrl: "", // Update when available: e.g., "https://www.lapietra.edu/uploads/files/la-pietra-tfff-map-2026.pdf"
  
  // Social Media & Contact
  contact: {
    email: "", // Add if available
    phone: "", // Add if available
  },
  
  // YouTube Videos - Update video IDs for 2026
  videos: [
    {
      id: "LYXsFgiDduc",
      title: "Robotics Overview",
      description: "Get a quick overview of what to expect at this year's Tech & Family Fun Fair."
    },
    {
      id: "2JK4ypL39fk", 
      title: "Last Year's Highlights",
      description: "See the excitement and fun from our previous Tech & Family Fun Fair event."
    },
    {
      id: "hEebBBtDL-U",
      title: "TechZone Innovation Space",
      description: "Learn about our space that empowers learning."
    }
  ],
  
  // Feature Images
  images: {
    hero: "/assets/images/tech-fair-highlight.jpg",
    heroWebp: "/assets/images/tech-fair-highlight.webp",
  },
  
  // Theme Colors (HSG Brand 2025)
  colors: {
    // Light Mode
    primary: "#003571",        // HSG Navy
    primaryHover: "#002855",
    secondary: "#07a8a8",      // HSG Teal
    accent: "#c8531d",         // Burnt Orange
    success: "#afcd53",        // Lime Green
    background: "#fff7eb",     // Cream
    // Dark Mode
    darkPrimary: "#07a8a8",    // Teal (more visible on dark)
    darkPrimaryHover: "#08bfbf",
    darkBackground: "#001329", // Midnight
    darkCard: "#0a2240",
  }
};

/**
 * Helper to get the full asset URL based on environment
 */
export const getAssetUrl = (path) => {
  const isDev = import.meta.env.DEV;
  const base = isDev ? '' : '/TechFamilyFunFair';
  return `${base}${path}`;
};

/**
 * Helper to get data file URL
 */
export const getDataUrl = (filename) => {
  return getAssetUrl(`/assets/data/${filename}`);
};

export default EVENT_CONFIG;
