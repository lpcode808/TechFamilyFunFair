/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // HSG Brand Colors
        'hsg-navy': '#003571',
        'hsg-navy-hover': '#002855',
        'hsg-teal': '#07a8a8',
        'hsg-teal-hover': '#069090',
        'hsg-orange': '#c8531d',
        'hsg-lime': '#afcd53',
        'hsg-cream': '#fff7eb',
        'hsg-midnight': '#001329',
        
        // Light Mode (semantic aliases)
        'primary': '#003571',
        'primary-hover': '#002855',
        'secondary': '#07a8a8',
        'accent': '#c8531d',
        'success': '#afcd53',
        
        // Dark Mode
        'dark-bg': '#001329',
        'dark-card': '#0a2240',
        'dark-card-hover': '#0f2d4d',
        'dark-text': '#fff7eb',
        'dark-text-secondary': '#94a3b8',
        'dark-primary': '#07a8a8',
        'dark-primary-hover': '#08bfbf',
        'dark-secondary': '#0a2240',
        'dark-border': '#1a3a5c',
      },
    },
  },
  plugins: [],
} 