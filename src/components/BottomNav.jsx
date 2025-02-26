import { NavLink } from 'react-router-dom';
import { HomeIcon, CalendarIcon, MapIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-safe">
      <div className="flex justify-around">
        <NavLink to="/" className={({ isActive }) => 
          `flex flex-col items-center py-2 px-3 ${isActive ? 'text-blue-600' : 'text-gray-500'}`
        } end>
          <HomeIcon className="w-6 h-6" />
          <span className="text-xs mt-1">Home</span>
        </NavLink>
        
        <NavLink to="/vendors" className={({ isActive }) => 
          `flex flex-col items-center py-2 px-3 ${isActive ? 'text-blue-600' : 'text-gray-500'}`
        }>
          <ShoppingBagIcon className="w-6 h-6" />
          <span className="text-xs mt-1">Vendors</span>
        </NavLink>
        
        <NavLink to="/map" className={({ isActive }) => 
          `flex flex-col items-center py-2 px-3 ${isActive ? 'text-blue-600' : 'text-gray-500'}`
        }>
          <MapIcon className="w-6 h-6" />
          <span className="text-xs mt-1">Map</span>
        </NavLink>
        
        <NavLink to="/schedule" className={({ isActive }) => 
          `flex flex-col items-center py-2 px-3 ${isActive ? 'text-blue-600' : 'text-gray-500'}`
        }>
          <CalendarIcon className="w-6 h-6" />
          <span className="text-xs mt-1">Schedule</span>
        </NavLink>
      </div>
    </div>
  );
} 