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
                  <div key={vendor.id} className="bg-gray-50 rounded-lg shadow-sm border border-gray-100 p-4">
                    <div className="flex items-center mb-2">
                      {vendor.emoji && <span className="text-2xl mr-2">{vendor.emoji}</span>}
                      <div>
                        <h3 className="font-medium">{vendor.name}</h3>
                        <p className="text-sm text-gray-500">{vendor.location}</p>
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