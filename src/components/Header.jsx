import { memo } from 'react';

const Header = memo(() => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      {/* Top contact bar */}
      <div className="bg-la-pietra-gray text-white text-sm py-2">
        <div className="container mx-auto px-4 text-center">
          <span>📞 808.922.2744</span>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-la-pietra-blue text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-xl md:text-2xl font-bold text-center">
            La Pietra Hawaii School for Girls
          </h1>
          <p className="text-center text-sm md:text-base mt-1 opacity-90">
            Tech & Family Fun Fair
          </p>
        </div>
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
