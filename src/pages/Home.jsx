import { Link } from 'react-router-dom';
import { CalendarIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { lazy, Suspense, useState, useEffect } from 'react';

export default function Home() {
  const [foodVendors, setFoodVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    console.log('Fetching vendors data...');
    
    // Determine the base URL based on the environment
    const baseUrl = import.meta.env.DEV ? '/' : '/TechFamilyFunFair/';
    const dataUrl = `${baseUrl}assets/data/vendors.json`;
    
    console.log('Fetching from URL:', dataUrl);
    
    // Fetch the vendors data
    fetch(dataUrl)
      .then(response => {
        console.log('Response status:', response.status);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
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
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Social media icon component
  const SocialIcon = ({ type, url = "#" }) => {
    // Default URLs
    const defaultUrls = {
      google: "#",
      yelp: "#",
      instagram: "#"
    };
    
    // Icon paths
    const iconPaths = {
      google: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="w-9 h-9">
          <path d="M12 11h8.53c.11.72.11 1.44 0 2.15-.49 3.39-3.56 5.76-6.99 5.76-3.93 0-7.08-3.16-7.08-7.05s3.15-7.05 7.08-7.05c1.93 0 3.68.79 4.92 2.06l-2 1.99C16.01 8.44 14.58 7.97 13 7.97c-2.35 0-4.27 1.92-4.27 4.29s1.92 4.29 4.27 4.29c1.96 0 3.38-1.04 3.89-2.84H12v-2.71z"/>
        </svg>
      ),
      yelp: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="w-9 h-9">
          <path d="M18.8 14.04c-.48.67-1.76-.19-2.91-1.55-.2-.23-.34-.46-.36-.65.2-2.44 1.04-2.62 1.37-2.62.92 0 2.1 3.13 1.9 4.82zm-5.19-10.9c-.2 2.1.27 2.18 1.22 3.13.4.4.5 1.03-.03 1.57-.56.54-3.03 4.7-3.24 5.03-.25.35-.71.35-1.09.07-.76-.62-.95-1.73-.48-2.67l2.33-4.34c.65-1.25.7-2.76.31-2.8h-.02zM8.15 7.97c1.15.47 1.3.97 1.23 1.59-.03.39-.28.82-.85.95-.4.08-4.74.75-5.12.82-.42.08-.72-.13-.84-.5-.3-1.51.67-2.48 1.95-2.85l3.63-.01zm.95 5.74c-.22-.04-.38-.22-.45-.45-.12-.4-.03-1.64.21-2.39.09-.28.37-.47.66-.38.87.24 4.71 1.39 5.06 1.51.35.09.5.38.4.69-.36 1.44-1.66 1.46-2.86 1.13l-3.02-.11zm-3.94 2.5c.35-.14 3.85-2.37 4.2-2.58.32-.19.66-.1.85.15.23.3.15 1.52.03 2.33-.05.35-.28.6-.56.58-.75-.03-4.64-.25-5-.27-.37-.02-.61-.35-.52-.69.05-.26.44-.7 1-.96z"/>
        </svg>
      ),
      instagram: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="w-9 h-9">
          <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06s-3.056-.01-4.122-.06c-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428.247-.666.636-1.274 1.153-1.772a4.904 4.904 0 011.772-1.153c.637-.247 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.892c-2.67 0-2.986.01-4.04.058-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.352-.3.882-.344 1.857-.048 1.054-.058 1.37-.058 4.04 0 2.672.01 2.988.058 4.042.045.976.207 1.505.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.747.352.137.882.3 1.857.345 1.054.048 1.37.058 4.04.058 2.672 0 2.988-.01 4.042-.058.976-.045 1.505-.207 1.857-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.747-1.15.137-.352.3-.882.345-1.857.048-1.054.058-1.37.058-4.04 0-2.672-.01-2.986-.058-4.04-.045-.976-.207-1.505-.344-1.858-.182-.467-.398-.8-.748-1.15-.35-.35-.683-.566-1.15-.748-.35-.137-.882-.3-1.857-.344-1.054-.048-1.37-.058-4.04-.058zm0 3.25a4.858 4.858 0 110 9.716 4.858 4.858 0 010-9.716zm0 8.014a3.157 3.157 0 100-6.314 3.157 3.157 0 000 6.314zm5.064-8.387a1.092 1.092 0 11-2.183 0 1.092 1.092 0 012.183 0z"/>
        </svg>
      )
    };
    
    return (
      <a 
        href={url || defaultUrls[type]} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-gray-600 hover:text-blue-600 transition-colors"
        title={`Visit ${type} page`}
      >
        {iconPaths[type]}
      </a>
    );
  };

  return (
    <div className="container mx-auto px-4 pb-20">
      {/* Hero Section */}
      <div className="py-8 text-center">
        <h1 className="text-3xl font-bold text-[#004299]">Tech & Family Fun Fair</h1>
        <p className="mt-2 text-gray-600">La Pietra Hawai'i School for Girls</p>
        <p className="text-gray-600">March 9, 2025 • 10am - 2pm</p>
      </div>
      
      {/* Event Details */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
        <h2 className="text-xl font-bold text-[#004299] mb-2">Event Details</h2>
        <p className="text-gray-700">
          Join us for a day of technology, fun, and learning! Explore interactive exhibits, 
          try out VR experiences, enjoy delicious food, and connect with tech enthusiasts.
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium text-gray-800">Location</h3>
            <p className="text-gray-600">La Pietra Hawai'i School for Girls</p>
            <p className="text-gray-600">2933 Poni Moi Rd, Honolulu, HI 96815</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-800">Time</h3>
            <p className="text-gray-600">Sunday, March 9, 2025</p>
            <p className="text-gray-600">10:00 AM - 2:00 PM</p>
          </div>
        </div>
      </div>
      
      {/* Food Vendors Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-[#004299]">Food Vendors</h2>
        </div>
        
        {loading && (
          <div className="text-center py-4">
            <p>Loading food vendors...</p>
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
                  <div key={vendor.id} className="bg-gray-50 rounded-lg shadow-sm border border-gray-100 p-4 flex flex-col h-full">
                    <div className="flex items-center mb-2">
                      {vendor.emoji && <span className="text-2xl mr-2">{vendor.emoji}</span>}
                      <div>
                        <h3 className="font-medium">{vendor.name}</h3>
                      </div>
                    </div>
                    
                    {vendor.description && (
                      <p className="mt-2 text-sm text-gray-700">{vendor.description}</p>
                    )}
                    
                    <div className="mt-3 space-y-1 text-sm">
                      {vendor.phone && (
                        <div className="text-gray-600">
                          <span className="font-medium">Phone:</span> {vendor.phone}
                        </div>
                      )}
                      
                      {vendor.website && (
                        <div className="text-gray-600">
                          <span className="font-medium">Website:</span>{' '}
                          <a href={vendor.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            {vendor.website.replace('https://www.', '').replace('https://', '')}
                          </a>
                        </div>
                      )}
                      
                      {vendor.address && (
                        <div className="text-gray-600">
                          <span className="font-medium">Address:</span> {vendor.address}
                        </div>
                      )}
                    </div>
                    
                    {/* Social Media Icons - Centered based on how many are shown */}
                    <div className="mt-auto pt-4">
                      {/* Only render social icons if at least one is available */}
                      {(vendor.googleUrl || vendor.yelpUrl || vendor.instagramUrl) && (
                        <div className="flex justify-center space-x-6">
                          {/* Google Reviews - only if URL exists */}
                          {vendor.googleUrl && <SocialIcon type="google" url={vendor.googleUrl} />}
                          
                          {/* Yelp - only if URL exists */}
                          {vendor.yelpUrl && <SocialIcon type="yelp" url={vendor.yelpUrl} />}
                          
                          {/* Instagram - only if URL exists */}
                          {vendor.instagramUrl && <SocialIcon type="instagram" url={vendor.instagramUrl} />}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center py-4 text-gray-500">No food vendors available.</p>
            )}
          </>
        )}
      </div>
      
      {/* Experiences Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-[#004299]">Experiences</h2>
          <Link to="/experiences" className="text-blue-600 hover:text-blue-800 text-sm">
            View all experiences
          </Link>
        </div>
        <p className="text-gray-700">
          Explore interactive tech experiences including VR, robotics, laser cutting, 
          flight simulators, and more! Perfect for all ages.
        </p>
        <div className="mt-4">
          <Link 
            to="/experiences" 
            className="inline-block bg-[#004299] text-white py-2 px-4 rounded hover:bg-[#00306d] transition-colors"
          >
            Browse Experiences
          </Link>
        </div>
      </div>
      
      {/* Merchandise Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-[#004299]">Merchandise</h2>
          <Link to="/vendors" className="text-blue-600 hover:text-blue-800 text-sm">
            View all merchandise
          </Link>
        </div>
        <p className="text-gray-700">
          Shop for tech gadgets, educational toys, and unique merchandise from our vendors.
        </p>
        <div className="mt-4">
          <Link 
            to="/vendors" 
            className="inline-block bg-[#004299] text-white py-2 px-4 rounded hover:bg-[#00306d] transition-colors"
          >
            Browse Merchandise
          </Link>
        </div>
      </div>
    </div>
  );
} 