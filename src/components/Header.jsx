import React from 'react';
import ThemeToggle from './ThemeToggle';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full">
      {/* Top gray bar */}
      <div className="bg-gray-800 dark:bg-dark-secondary text-white text-sm py-1 px-4 flex justify-between items-center">
        <span>808.922.2744</span>
        <ThemeToggle />
      </div>
      
      {/* Main header */}
      <div className="bg-[#004299] dark:bg-dark-primary text-white py-3 px-4 text-center">
        <h1 className="text-2xl font-bold mb-1">Tech & Family Fun Fair</h1>
        <p className="text-sm">Join us for a day of learning and fun!</p>
      </div>
      
      {/* Navigation menu - optional, shown on larger screens */}
      <nav className="hidden sm:flex bg-gray-700 dark:bg-dark-secondary text-white py-2 px-4 justify-center space-x-4">
        <Link to="/" className="text-sm hover:underline">HOME</Link>
        <Link to="/experiences" className="text-sm hover:underline">EXPERIENCES</Link>
        <Link to="/vendors" className="text-sm hover:underline">VENDORS</Link>
        <Link to="/schedule" className="text-sm hover:underline">SCHEDULE</Link>
      </nav>
    </header>
  );
};

export default Header; 