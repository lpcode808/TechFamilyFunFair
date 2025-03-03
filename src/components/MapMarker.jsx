import { useState } from 'react';

export default function MapMarker({ x, y, icon, title, onClick, isActive }) {
  const [hover, setHover] = useState(false);
  
  const markerStyle = {
    left: x,
    top: y,
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    zIndex: hover || isActive ? 10 : 1
  };
  
  // Different icons based on type
  const getIconComponent = () => {
    switch (icon) {
      case 'robot':
        return '🤖';
      case 'paw':
        return '🐾';
      case 'brain':
        return '🧠';
      case 'drone':
        return '🚁';
      default:
        return '📍';
    }
  };
  
  return (
    <div 
      className={`cursor-pointer transition-all duration-200 ${isActive ? 'scale-125' : hover ? 'scale-110' : 'scale-100'}`}
      style={markerStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      <div className="flex flex-col items-center">
        <div className={`text-2xl ${isActive ? 'animate-bounce' : ''}`}>
          {getIconComponent()}
        </div>
        {(hover || isActive) && (
          <div className="mt-1 bg-white rounded-md px-2 py-1 text-xs shadow-md whitespace-nowrap">
            {title}
          </div>
        )}
      </div>
    </div>
  );
} 