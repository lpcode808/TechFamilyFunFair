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
        'primary': '#004299',
        'primary-hover': '#00306d',
        
        'dark-bg': '#121628',
        'dark-card': '#1E293B',
        'dark-text': '#E2E8F0',
        'dark-primary': '#3B82F6',
        'dark-primary-hover': '#60A5FA',
        'dark-secondary': '#374151',
      },
    },
  },
  plugins: [],
} 