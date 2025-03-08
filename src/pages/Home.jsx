import { Link } from 'react-router-dom';
import { CalendarIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { lazy, Suspense, useState, useEffect } from 'react';

export default function Home() {
  const [foodVendors, setFoodVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    console.log('Fetching vendors data...');
    
    // Get the correct base URL for GitHub Pages deployment
    const isDev = import.meta.env.DEV;
    const baseUrl = isDev ? '' : '/TechFamilyFunFair';
    const dataUrl = `${baseUrl}/assets/data/vendors.json`;
    
    console.log('Fetching from URL:', dataUrl);
    
    // Fetch the vendors data
    fetch(dataUrl)
      .then(response => {
        console.log('Response status:', response.status);
        if (!response.ok) {
          console.error('Failed to fetch vendors data:', response);
          throw new Error(`HTTP error! Status: ${response.status}, URL: ${dataUrl}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Vendors data loaded:', data.length, 'items');
        // Filter to only show food vendors
        const foodVendorsData = data.filter(vendor => vendor.type === 'food');
        console.log('Food vendors filtered:', foodVendorsData.length, 'items');
        setFoodVendors(foodVendorsData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading vendors:', error);
        // Show more detailed error information
        setError(`${error.message} - Please check browser console for details`);
        setLoading(false);
      });
  }, []);

  // Social media button component with text
  const SocialButton = ({ type, url = "#" }) => {
    // Default URLs
    const defaultUrls = {
      google: "#",
      yelp: "#",
      instagram: "#"
    };
    
    // Label text for each platform
    const labels = {
      google: "Google",
      yelp: "Yelp",
      instagram: "Instagram"
    };
    
    return (
      <a 
        href={url || defaultUrls[type]} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="px-4 py-2 rounded-lg bg-[#004299] dark:bg-dark-primary text-white dark:text-white text-sm font-medium 
          hover:bg-[#003580] dark:hover:bg-[#2563EB] 
          hover:text-white dark:hover:text-white
          hover:shadow-md hover:scale-105 
          transition-all duration-200 ease-in-out
          inline-block text-center min-w-[90px]"
        title={`Visit ${type} page`}
      >
        {labels[type]}
      </a>
    );
  };

  return (
    <div className="container mx-auto px-4 pb-20">
      {/* Hero Section */}
      <div className="pt-12 py-8 text-center">
        <h1 className="text-3xl font-bold text-[#004299] dark:text-white">Tech & Family Fun Fair</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          <a href="https://www.lapietra.edu" target="_blank" rel="noopener noreferrer" className="hover:underline">
            La Pietra Hawai'i School for Girls
          </a>
        </p>
        <p className="text-gray-600 dark:text-gray-300">Saturday, March 8, 2025 • 11am - 7pm</p>
      </div>
      
      {/* Map PDF Button - Moved up */}
      <div className="mb-6">
        <a 
          href="https://www.lapietra.edu/uploads/files/la-pietra-tfff-map-2025.pdf?v=1741044934751"
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full py-4 px-6 bg-[#004299] hover:bg-[#003580] dark:bg-dark-primary dark:hover:bg-dark-primary-hover transition-all duration-300 
                     text-white dark:text-white text-center text-xl font-bold rounded-lg shadow-lg 
                     hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <div className="flex items-center justify-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <span className="dark:text-white">Event Map</span>
          </div>
        </a>
      </div>
      
      {/* Event Details - header removed */}
      <div className="bg-white dark:bg-dark-card rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 mb-6">
        <p className="text-gray-700 dark:text-gray-300">
          Join us for a day of technology, fun, and learning! Explore interactive exhibits, 
          try out VR experiences, enjoy delicious food, and connect with tech enthusiasts. 
        <br />
          <a href="https://www.lapietra.edu/giving/tech-family-fun-fair/" className="text-blue-600 dark:text-blue-400 hover:underline">Register</a> to stay updated on Technology at La Pietra.
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* <div>
            <h3 className="font-medium text-gray-800 dark:text-gray-200">Location</h3>
            <p className="text-gray-600 dark:text-gray-400">
              <a href="https://www.lapietra.edu" target="_blank" rel="noopener noreferrer" className="hover:underline">
                La Pietra Hawai'i School for Girls
              </a>
            </p>
            <p className="text-gray-600 dark:text-gray-400">2933 Poni Moi Rd, Honolulu, HI 96815</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-800 dark:text-gray-200">Time</h3>
            <p className="text-gray-600 dark:text-gray-400">Sunday, March 9, 2025</p>
            <p className="text-gray-600 dark:text-gray-400">10:00 AM - 2:00 PM</p>
          </div> */}
        </div>
      </div>
      
      {/* Food Vendors Section */}
      <div className="bg-white dark:bg-dark-card rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-[#004299] dark:text-white">Food Vendors</h2>
        </div>
        
        {loading && (
          <div className="text-center py-4">
            <p className="dark:text-gray-300">Loading food vendors...</p>
          </div>
        )}
        
        {error && (
          <div className="text-center py-4 text-red-500">
            <p>Error loading food vendors: {error}</p>
          </div>
        )}
        
        {!loading && !error && (
          <>
            {foodVendors.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {foodVendors.map(vendor => (
                  <div key={vendor.id} className="bg-gray-50 dark:bg-dark-secondary rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-4 flex flex-col h-full">
                    <div className="flex items-center mb-2">
                      {vendor.emoji && <span className="text-2xl mr-2">{vendor.emoji}</span>}
                      <div>
                        <h3 className="font-medium dark:text-white">{vendor.name}</h3>
                      </div>
                    </div>
                    
                    {vendor.description && (
                      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{vendor.description}</p>
                    )}
                    
                    <div className="mt-3 space-y-1 text-sm">
                      {vendor.phone && (
                        <div className="text-gray-600 dark:text-gray-400">
                          <span className="font-medium">Phone:</span> {vendor.phone}
                        </div>
                      )}
                      
                      {vendor.website && (
                        <div className="text-gray-600 dark:text-gray-400">
                          <span className="font-medium">Website:</span>{' '}
                          <a href={vendor.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                            {vendor.website.replace('https://www.', '').replace('https://', '')}
                          </a>
                        </div>
                      )}
                      
                      {vendor.address && (
                        <div className="text-gray-600 dark:text-gray-400">
                          <span className="font-medium">Address:</span> {vendor.address}
                        </div>
                      )}
                    </div>
                    
                    {/* Social Media Buttons - Centered based on how many are shown */}
                    <div className="mt-auto pt-4">
                      {/* Only render social buttons if at least one is available */}
                      {(vendor.googleUrl || vendor.yelpUrl || vendor.instagramUrl) && (
                        <div className="flex justify-center gap-3 flex-wrap">
                          {/* Google Reviews - only if URL exists */}
                          {vendor.googleUrl && <SocialButton type="google" url={vendor.googleUrl} />}
                          
                          {/* Yelp - only if URL exists */}
                          {vendor.yelpUrl && <SocialButton type="yelp" url={vendor.yelpUrl} />}
                          
                          {/* Instagram - only if URL exists */}
                          {vendor.instagramUrl && <SocialButton type="instagram" url={vendor.instagramUrl} />}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center py-4 text-gray-500 dark:text-gray-400">No food vendors available.</p>
            )}
          </>
        )}
      </div>
      
      {/* Merchandise Section - Now first */}
      <div className="bg-white dark:bg-dark-card rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-[#004299] dark:text-white">Merchandise</h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300">
          Shop for tech gadgets, educational toys, and unique merchandise from our vendors.
        </p>
      </div>
      <br></br>
      {/* Experiences Section - Now first */}
      <div className="bg-white dark:bg-dark-card rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-[#004299] dark:text-white">Experiences</h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300">
          Explore interactive tech experiences including VR, robotics, laser cutting, 
          flight simulators, and more! Perfect for all ages.
        </p>
      </div>

      {/* FEATURED IMAGE SECTION */}
      <div className="bg-white dark:bg-dark-card rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-[#004299] dark:text-white"></h2>
        </div>
        <div className="flex justify-center">
          <picture>
            <source srcSet={`${baseUrl}assets/images/tech-fair-highlight.webp`} type="image/webp" />
            <img 
              src={`${baseUrl}assets/images/tech-fair-highlight.jpg`} 
              alt="Tech & Family Fun Fair Highlight" 
              className="rounded-lg max-w-full h-auto shadow-md"
              width="800"
              height="450"
              loading="lazy"
            />
          </picture>
        </div>
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 text-center">
        </p>
      </div>
      
      {/* YOUTUBE EMBEDS SECTION */}
      <div className="bg-white dark:bg-dark-card rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-[#004299] dark:text-white">Featured Videos</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
          <div>
            <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Robotics Overview</h3>
            <div className="relative" style={{ paddingBottom: "56.25%" }}>
              <iframe 
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
                src="https://www.youtube-nocookie.com/embed/LYXsFgiDduc?rel=0" 
                title="Tech Fair Overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Get a quick overview of what to expect at this year's Tech & Family Fun Fair.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Last Year's Highlights</h3>
            <div className="relative" style={{ paddingBottom: "56.25%" }}>
              <iframe 
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
                src="https://www.youtube-nocookie.com/embed/2JK4ypL39fk?rel=0" 
                title="Last Year's Highlights"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              See the excitement and fun from our previous Tech & Family Fun Fair event.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">TechZone innovation space</h3>
            <div className="relative" style={{ paddingBottom: "56.25%" }}>
              <iframe 
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
                src="https://www.youtube-nocookie.com/embed/hEebBBtDL-U?rel=0" 
                title="DIY Robot Workshop"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
Learn about our space that empowers learning            </p>
          </div>
        </div>
        
        <div className="text-center mt-2">
          <p className="text-sm text-gray-500 dark:text-gray-400">
          </p>
        </div>
      </div>
      
      {/* Simplified Help Section */}
      <div className="bg-white dark:bg-dark-card rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 mb-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold text-[#004299] dark:text-white">Need Help?</h2>
        </div>
        <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#004299] dark:text-dark-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p>
            Visit the <span className="font-medium">Information/Volunteer Booth</span> at the main entrance for assistance, event maps, schedules, and general questions.
          </p>
        </div>
      </div>
    </div>
  );
} 