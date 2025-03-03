# Tech & Family Fun Fair App

A mobile-first web application for the Tech & Family Fun Fair 2025 event at La Pietra – Hawai'i School for Girls.

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
