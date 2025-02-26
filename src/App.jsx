import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import BottomNav from './components/BottomNav';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Schedule = lazy(() => import('./pages/Schedule'));
const Map = lazy(() => import('./pages/Map'));
const Vendors = lazy(() => import('./pages/Vendors'));

// Loading fallback
const LoadingFallback = () => (
  <div className="flex justify-center items-center min-h-[70vh]">
    <div className="animate-pulse text-[#004299] text-lg">Loading...</div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <main>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/map" element={<Map />} />
              <Route path="/vendors" element={<Vendors />} />
            </Routes>
          </Suspense>
        </main>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
