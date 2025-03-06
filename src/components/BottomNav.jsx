import { NavLink } from 'react-router-dom';
import { memo } from 'react';
import { HomeIcon, CalendarIcon, ShoppingBagIcon, SparklesIcon } from '@heroicons/react/24/outline';

// Memoized NavLink components
const NavItem = memo(({ to, icon: Icon, label, end = false }) => (
  <NavLink to={to} end={end}>
    {({ isActive }) => (
      <div className={`flex flex-col items-center py-3 px-3 sm:px-4 rounded-t-md transition-colors duration-200 ${
        isActive 
          ? 'bg-[#004299] dark:bg-dark-primary text-white' 
          : 'text-gray-600 dark:text-gray-300 hover:text-[#004299] dark:hover:text-dark-primary'
      }`}>
        <Icon className={`w-6 h-6 ${
          isActive ? 'text-white' : 'text-current'
        }`} />
        <span className="text-xs mt-1 font-medium">{label}</span>
      </div>
    )}
  </NavLink>
));

// Memoize the entire BottomNav component
export default memo(function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-dark-secondary border-t border-gray-200 dark:border-gray-700 pb-safe shadow-lg">
      <div className="flex justify-around max-w-2xl mx-auto">
        <NavItem to="/" icon={HomeIcon} label="Home" end={true} />
        <NavItem to="/vendors" icon={ShoppingBagIcon} label="Merchandise" />
        <NavItem to="/experiences" icon={SparklesIcon} label="Experiences" />
        {/* Map navigation item commented out due to space constraints
        <NavItem to="/map" icon={MapIcon} label="Map" />
        */}
        <NavItem to="/schedule" icon={CalendarIcon} label="Schedule" />
      </div>
    </div>
  );
}); 