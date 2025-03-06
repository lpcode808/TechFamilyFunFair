import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import BottomNav from './components/BottomNav';
import ThemeToggle from './components/ThemeToggle';
import { useTheme } from './context/ThemeContext';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Schedule = lazy(() => import('./pages/Schedule'));
const Map = lazy(() => import('./pages/Map'));
const Vendors = lazy(() => import('./pages/Vendors'));
const Experiences = lazy(() => import('./pages/Experiences'));
const ExperienceDetail = lazy(() => import('./pages/ExperienceDetail'));

// Loading fallback
const LoadingFallback = () => (
  <div className="flex justify-center items-center min-h-[70vh]">
    <div className="animate-pulse text-[#004299] dark:text-dark-primary text-lg">Loading...</div>
  </div>
);

function App() {
  const { isDarkMode } = useTheme();
  
  return (
    <Router>
      <div className={`min-h-screen bg-gray-50 ${isDarkMode ? 'dark bg-dark-bg text-dark-text' : ''}`}>
        <ThemeToggle />
        <main className="pb-16">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/map" element={<Map />} />
              <Route path="/vendors" element={<Vendors />} />
              <Route path="/experiences" element={<Experiences />} />
              <Route path="/experience/:id" element={<ExperienceDetail />} />
            </Routes>
          </Suspense>
        </main>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
