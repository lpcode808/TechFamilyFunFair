import { Link } from 'react-router-dom';
import { CalendarIcon, MapIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="pb-20">
      {/* Hero Banner with VR Image */}
      <div className="w-full relative mb-6">
        {/* Hero Image - Replace the URL with the actual path once image is saved to your project */}
        <div className="w-full h-[50vh] md:h-[60vh] bg-cover bg-center" 
             style={{ 
               backgroundImage: "url('/assets/hero-vr-girl.jpg')", 
               backgroundPosition: "center 20%" 
             }}>
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

      <div className="container mx-auto px-4">
        <div className="py-6">
          <h1 className="text-2xl font-bold mb-2">Tech & Family Fun Fair</h1>
          <p className="text-gray-600 mb-6">La Pietra Hawaiʻi School For Girls</p>
          
          {/* Quick Links Section */}
          <div className="bg-white rounded-lg shadow-sm p-5 mb-6 border-t-4 border-t-[#004299]">
            <h2 className="text-xl font-semibold text-[#004299] mb-4">Quick Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/schedule" className="flex items-center justify-center p-3 bg-gray-100 hover:bg-gray-200 text-[#004299] font-medium rounded transition-colors">
                <CalendarIcon className="w-5 h-5 mr-2" />
                Event Schedule
              </Link>
              <Link to="/map" className="flex items-center justify-center p-3 bg-gray-100 hover:bg-gray-200 text-[#004299] font-medium rounded transition-colors">
                <MapIcon className="w-5 h-5 mr-2" />
                Interactive Map
              </Link>
              <Link to="/vendors" className="flex items-center justify-center p-3 bg-gray-100 hover:bg-gray-200 text-[#004299] font-medium rounded transition-colors">
                <ShoppingBagIcon className="w-5 h-5 mr-2" />
                Browse Vendors
              </Link>
            </div>
          </div>

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

          {/* Featured Highlights */}
          <div className="bg-white rounded-lg shadow-sm p-5 mb-6 border-t-4 border-t-[#004299]">
            <h2 className="text-xl font-semibold text-[#004299] mb-4">Event Highlights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded p-4">
                <h3 className="text-lg font-semibold mb-2">Technology Exhibits</h3>
                <p className="text-sm text-gray-700">
                  Explore cutting-edge technology displays and interactive exhibits from local companies and student projects.
                </p>
              </div>
              <div className="border border-gray-200 rounded p-4">
                <h3 className="text-lg font-semibold mb-2">Hands-on Workshops</h3>
                <p className="text-sm text-gray-700">
                  Participate in coding, robotics, and creative workshops suitable for all skill levels and ages.
                </p>
              </div>
              <div className="border border-gray-200 rounded p-4">
                <h3 className="text-lg font-semibold mb-2">Food & Refreshments</h3>
                <p className="text-sm text-gray-700">
                  Enjoy a variety of food options from local vendors throughout the event.
                </p>
              </div>
              <div className="border border-gray-200 rounded p-4">
                <h3 className="text-lg font-semibold mb-2">Community Showcase</h3>
                <p className="text-sm text-gray-700">
                  See demonstrations and performances from community groups and student organizations.
                </p>
              </div>
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