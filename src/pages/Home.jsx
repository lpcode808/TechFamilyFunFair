import { Link } from 'react-router-dom';
import { CalendarIcon, MapIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="pb-20">
      <div className="event-header bg-[#004299] text-white p-6 text-center">
        <h1 className="text-3xl font-bold mb-3">Tech & Family Fun Fair</h1>
        <h2 className="text-xl mb-4">March 16, 2024</h2>
        <p className="text-lg">
          Welcome to La Pietra's Tech & Family Fun Fair! 
          Explore the schedule, map, and vendors below.
        </p>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Quick Links Section */}
        <div className="content-card p-5 mb-6">
          <h2 className="section-title mb-4">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/schedule" className="quick-link-button">
              <CalendarIcon className="w-6 h-6 mr-2" />
              Event Schedule
            </Link>
            <Link to="/map" className="quick-link-button">
              <MapIcon className="w-6 h-6 mr-2" />
              Interactive Map
            </Link>
            <Link to="/vendors" className="quick-link-button">
              <ShoppingBagIcon className="w-6 h-6 mr-2" />
              Browse Vendors
            </Link>
          </div>
        </div>

        {/* Event Details */}
        <div className="content-card p-5 mb-6">
          <h2 className="section-title mb-4">Event Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-[#004299] mb-3">When & Where</h3>
              <div className="space-y-2">
                <div className="flex items-start">
                  <span className="text-[#004299] font-semibold w-20">Date:</span>
                  <span>Saturday, March 16, 2024</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#004299] font-semibold w-20">Time:</span>
                  <span>10:00 AM - 2:00 PM</span>
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
              <h3 className="text-xl font-semibold text-[#004299] mb-3">About the Event</h3>
              <p className="mb-4">
                Join us for a day of technology, innovation, and family fun! This annual 
                event brings together students, families, and the community to explore STEAM 
                activities and enjoy interactive demonstrations.
              </p>
              <p>
                With robotics displays, coding workshops, arts and crafts, food vendors, 
                and games for all ages, there's something for everyone at the Tech & Family Fun Fair!
              </p>
            </div>
          </div>
        </div>

        {/* Registration CTA */}
        <div className="content-card bg-[#f8f9fa] p-5 text-center">
          <h2 className="section-title mb-4">Registration</h2>
          <p className="mb-4">Attendance is free, but registration is recommended for planning purposes.</p>
          <a href="#" className="primary-button inline-block">
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
} 