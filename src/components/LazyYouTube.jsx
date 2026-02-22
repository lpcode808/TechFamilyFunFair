import { useState } from 'react';

/**
 * LazyYouTube Component
 * ====================
 * Displays a thumbnail placeholder that loads the actual YouTube iframe
 * only when clicked. This saves ~1.5MB of initial page load.
 */
export default function LazyYouTube({ videoId, title, description }) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  
  const handleClick = () => {
    setIsLoaded(true);
  };
  
  return (
    <div>
      <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">{title}</h3>
      <div 
        className="relative cursor-pointer group"
        style={{ paddingBottom: "56.25%" }}
        onClick={!isLoaded ? handleClick : undefined}
      >
        {isLoaded ? (
          <iframe 
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
            src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <>
            <img 
              src={thumbnailUrl}
              alt={`${title} thumbnail`}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-md"
              loading="lazy"
            />
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-700 transition-colors shadow-lg">
                <svg 
                  className="w-8 h-8 text-white ml-1" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity rounded-lg" />
          </>
        )}
      </div>
      {description && (
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
      )}
    </div>
  );
}
