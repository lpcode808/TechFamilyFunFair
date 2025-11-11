import { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  ClockIcon,
  MapPinIcon,
  CalendarIcon,
  SparklesIcon,
  ShoppingBagIcon
} from '@heroicons/react/24/outline';
import Card from '../components/Card';
import vendorsData from '../data/vendors.json';

const Home = memo(() => {
  // Filter only food vendors for home page
  const foodVendors = useMemo(() =>
    vendorsData.filter(v => v.category === 'food'),
    []
  );

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      {/* Hero Section */}
      <Card withHeader className="text-center">
        <div className="py-6">
          <h2 className="text-3xl font-bold text-la-pietra-blue mb-2">
            Welcome to the Fun Fair!
          </h2>
          <p className="text-gray-600 text-lg">
            Explore technology, have fun, and make memories
          </p>
        </div>
      </Card>

      {/* Quick Navigation */}
      <div className="grid grid-cols-2 gap-4">
        <Link to="/experiences" className="card hover:shadow-md transition-shadow">
          <div className="flex flex-col items-center py-4">
            <SparklesIcon className="w-12 h-12 text-la-pietra-blue mb-2" />
            <span className="font-semibold text-la-pietra-blue">Experiences</span>
            <span className="text-xs text-gray-500 mt-1">Interactive activities</span>
          </div>
        </Link>

        <Link to="/schedule" className="card hover:shadow-md transition-shadow">
          <div className="flex flex-col items-center py-4">
            <ClockIcon className="w-12 h-12 text-la-pietra-blue mb-2" />
            <span className="font-semibold text-la-pietra-blue">Schedule</span>
            <span className="text-xs text-gray-500 mt-1">Event timeline</span>
          </div>
        </Link>
      </div>

      {/* Event Details */}
      <Card withHeader>
        <h3 className="text-xl font-semibold text-la-pietra-blue mb-3 flex items-center">
          <CalendarIcon className="w-6 h-6 mr-2" />
          Event Information
        </h3>
        <div className="space-y-3 text-gray-700">
          <div className="flex items-start">
            <ClockIcon className="w-5 h-5 mr-2 text-la-pietra-blue flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-medium">Time:</span>
              <span className="ml-2">9:00 AM - 4:30 PM</span>
            </div>
          </div>
          <div className="flex items-start">
            <MapPinIcon className="w-5 h-5 mr-2 text-la-pietra-blue flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-medium">Location:</span>
              <span className="ml-2">La Pietra Campus Gymnasium</span>
            </div>
          </div>
          <div className="flex items-start">
            <ShoppingBagIcon className="w-5 h-5 mr-2 text-la-pietra-blue flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-medium">Entry:</span>
              <span className="ml-2">Free admission for all attendees</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Food Vendors */}
      <Card withHeader>
        <h3 className="text-xl font-semibold text-la-pietra-blue mb-3">
          🍴 Food & Refreshments
        </h3>
        <p className="text-gray-600 mb-4 text-sm">
          Enjoy delicious food from our local vendors
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {foodVendors.map((vendor) => (
            <div
              key={vendor.id}
              className="bg-gray-50 rounded-lg p-3 border border-gray-200"
            >
              <div className="flex items-start">
                <span className="text-2xl mr-2">{vendor.emoji}</span>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 text-sm">
                    {vendor.name}
                  </h4>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                    {vendor.description}
                  </p>
                  {vendor.location && (
                    <p className="text-xs text-gray-500 mt-1">
                      📍 {vendor.location}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Why Attend */}
      <Card withHeader>
        <h3 className="text-xl font-semibold text-la-pietra-blue mb-3">
          Why Attend?
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="text-la-pietra-blue mr-2">✓</span>
            <span>Experience cutting-edge VR and simulation technology</span>
          </li>
          <li className="flex items-start">
            <span className="text-la-pietra-blue mr-2">✓</span>
            <span>Learn about careers in Hawaii's tech industry</span>
          </li>
          <li className="flex items-start">
            <span className="text-la-pietra-blue mr-2">✓</span>
            <span>Hands-on workshops for kids and adults</span>
          </li>
          <li className="flex items-start">
            <span className="text-la-pietra-blue mr-2">✓</span>
            <span>Meet local innovators and educators</span>
          </li>
          <li className="flex items-start">
            <span className="text-la-pietra-blue mr-2">✓</span>
            <span>Free admission and family-friendly activities</span>
          </li>
        </ul>
      </Card>

      {/* Contact Section */}
      <Card withHeader>
        <h3 className="text-xl font-semibold text-la-pietra-blue mb-3">
          Contact Us
        </h3>
        <p className="text-gray-700 mb-2">
          <span className="font-medium">Phone:</span> 808.922.2744
        </p>
        <p className="text-gray-700">
          <span className="font-medium">Location:</span> 2933 Poni Moi Road, Honolulu, HI 96815
        </p>
      </Card>
    </div>
  );
});

Home.displayName = 'Home';

export default Home;
