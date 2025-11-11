import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import {
  HomeIcon,
  ClockIcon,
  SparklesIcon,
  ShoppingBagIcon
} from '@heroicons/react/24/outline';
import {
  HomeIcon as HomeIconSolid,
  ClockIcon as ClockIconSolid,
  SparklesIcon as SparklesIconSolid,
  ShoppingBagIcon as ShoppingBagIconSolid
} from '@heroicons/react/24/solid';

const NavItem = memo(({ to, icon: Icon, iconSolid: IconSolid, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex flex-col items-center justify-center py-2 px-3 transition-colors ${
        isActive ? 'text-la-pietra-blue' : 'text-gray-600'
      }`
    }
  >
    {({ isActive }) => (
      <>
        {isActive ? (
          <IconSolid className="w-6 h-6 mb-1" />
        ) : (
          <Icon className="w-6 h-6 mb-1" />
        )}
        <span className="text-xs font-medium">{label}</span>
      </>
    )}
  </NavLink>
));

NavItem.displayName = 'NavItem';

const BottomNav = memo(() => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 safe-area-inset-bottom">
      <div className="flex justify-around items-center h-16 max-w-screen-xl mx-auto">
        <NavItem
          to="/"
          icon={HomeIcon}
          iconSolid={HomeIconSolid}
          label="Home"
        />
        <NavItem
          to="/experiences"
          icon={SparklesIcon}
          iconSolid={SparklesIconSolid}
          label="Experiences"
        />
        <NavItem
          to="/vendors"
          icon={ShoppingBagIcon}
          iconSolid={ShoppingBagIconSolid}
          label="Merchandise"
        />
        <NavItem
          to="/schedule"
          icon={ClockIcon}
          iconSolid={ClockIconSolid}
          label="Schedule"
        />
      </div>
    </nav>
  );
});

BottomNav.displayName = 'BottomNav';

export default BottomNav;
