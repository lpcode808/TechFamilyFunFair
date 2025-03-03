import { Link } from 'react-router-dom';
import { CalendarIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import vendorsData from '../assets/data/vendors.json';
import { lazy, Suspense } from 'react';

// Lazily load food vendor data
const foodVendors = vendorsData.filter(vendor => vendor.type === 'food');

export default function Home() {
  return (
    <div className="pb-20">
      {/* Hero Banner - Temporarily hidden 
      <div className="w-full relative mb-6">
        <div 
          className="w-full h-[50vh] md:h-[60vh] bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('/assets/hero-vr-girl.jpg')", 
            backgroundPosition: "center 20%" 
          }}
          loading="lazy"
          aria-label="Tech Family Fun Fair - VR Experience"
        >
          <div className="absolute inset-0 bg-blue-900/30"></div>
          <div className="absolute bottom-0 left-0 w-full p-4 md:p-8 text-white">
            <div className="max-w-3xl">
              <h2 className="text-lg md:text-xl font-light mb-1 text-shadow">DISCOVER, PLAY, EMPOWER</h2>
              <h1 className="text-3xl md:text-5xl font-bold mb-2 text-shadow">TECH & FAMILY<br />FUN FAIR</h1>
              <p className="text-xl md:text-2xl font-medium mb-6 text-shadow">March 8, 2025 | 11-7PM</p>
              <a href="#register" className="inline-block py-2 px-6 bg-[#004299] text-white text-center font-medium rounded hover:bg-[#0056c7] transition-colors">
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
      */}

      <div className="container mx-auto px-4">
        <div className="py-6">
          <h1 className="text-2xl font-bold mb-2">Tech & Family Fun Fair</h1>
          <p className="text-gray-600 mb-6">La Pietra Hawaiʻi School For Girls</p>
          
          {/* Event Details Grid */}
          <div className="bg-white rounded-lg shadow-sm p-5 mb-6 border-t-4 border-t-[#004299]">
            <h2 className="text-xl font-semibold text-[#004299] mb-4">Event Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-[#004299] mb-3">When & Where</h3>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <span className="text-[#004299] font-semibold w-20">Date:</span>
                    <span>Saturday, March 8, 2025</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#004299] font-semibold w-20">Time:</span>
                    <span>11:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#004299] font-semibold w-20">Location:</span>
                    <span>La Pietra Hawaii School for Girls</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#004299] font-semibold w-20">Address:</span>
                    <span>2933 Poni Moi Rd, Honolulu, HI 96815</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#004299] mb-3">About the Event</h3>
                <p className="mb-4 text-gray-700">
                  Join us for a day of technology, innovation, and family fun! This annual 
                  event brings together students, families, and the community to explore STEAM 
                  activities and enjoy interactive demonstrations.
                </p>
                <p className="text-gray-700">
                  With robotics displays, coding workshops, arts and crafts, food vendors, 
                  and games for all ages, there's something for everyone at the Tech & Family Fun Fair!
                </p>
              </div>
            </div>
          </div>

          {/* Food Vendors Section */}
          <div className="bg-white rounded-lg shadow-sm p-5 mb-6 border-t-4 border-t-[#004299]">
            <h2 className="text-xl font-semibold text-[#004299] mb-4">Food Vendors</h2>
            <p className="mb-4">Enjoy delicious food and treats from these amazing local vendors:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {foodVendors.map(vendor => (
                <div key={vendor.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">{vendor.emoji}</span>
                    <h3 className="text-lg font-semibold">{vendor.name}</h3>
                  </div>
                  <p className="text-gray-700 mb-3">{vendor.description}</p>
                  <div className="text-sm space-y-1 text-gray-600">
                    {vendor.location && (
                      <p><span className="font-semibold">Location:</span> {vendor.location}</p>
                    )}
                    {vendor.phone && (
                      <p><span className="font-semibold">Phone:</span> {vendor.phone}</p>
                    )}
                    {vendor.website && (
                      <p><span className="font-semibold">Website:</span> <a href={vendor.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{vendor.website.replace('https://www.', '').replace('https://', '')}</a></p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 text-center">
              <Link to="/vendors" className="inline-block text-[#004299] font-medium hover:underline">
                View all merchandise →
              </Link>
            </div>
          </div>

          {/* Registration CTA */}
          <div id="register" className="bg-[#f8f9fa] border border-gray-200 rounded-lg shadow-sm p-5 text-center">
            <h2 className="text-xl font-semibold text-[#004299] mb-4">Registration</h2>
            <p className="mb-4">Attendance is free, but registration is recommended for planning purposes.</p>
            <a href="http://lapietra.edu/TechFair" className="inline-block py-2 px-6 bg-[#004299] text-white text-center font-medium rounded hover:bg-[#0056c7] transition-colors">
              Register at lapietra.edu/TechFair
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 