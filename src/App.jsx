import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Schedule = lazy(() => import('./pages/Schedule'));
const Experiences = lazy(() => import('./pages/Experiences'));
const ExperienceDetail = lazy(() => import('./pages/ExperienceDetail'));
const Vendors = lazy(() => import('./pages/Vendors'));

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter basename="/TechFamilyFunFair">
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Header />

          <main className="flex-1 pb-20">
            <Suspense fallback={<LoadingSpinner message="Loading page..." />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/experiences" element={<Experiences />} />
                <Route path="/experience/:id" element={<ExperienceDetail />} />
                <Route path="/vendors" element={<Vendors />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>

          <BottomNav />
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

// Simple 404 component (not lazy loaded since it's small)
function NotFound() {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-6">Page not found</p>
      <a href="/" className="btn-primary">
        Return Home
      </a>
    </div>
  );
}

export default App;
