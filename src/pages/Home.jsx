import { Link } from 'react-router-dom';
import { CalendarIcon, MapIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="container mx-auto px-4 pb-20">
      <div className="py-8">
        <h1 className="text-3xl font-bold text-center">Tech & Family Fun Fair</h1>
        <p className="text-center text-gray-600 mt-2">March 8, 2025</p>
        
        <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-100">
          <h2 className="font-medium text-lg text-blue-800">Welcome!</h2>
          <p className="mt-2 text-sm text-blue-700">
            Welcome to the Tech & Family Fun Fair 2025! This app will help you navigate the 
            event, find activities, and make the most of your day with us.
          </p>
        </div>
        
        <div className="mt-8 grid grid-cols-1 gap-4">
          <Link 
            to="/schedule" 
            className="bg-white p-4 rounded-lg shadow border border-gray-100 flex items-center"
          >
            <div className="bg-blue-100 p-3 rounded-full">
              <CalendarIcon className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h3 className="font-medium">Event Schedule</h3>
              <p className="text-sm text-gray-500">View all activities and talks</p>
            </div>
          </Link>
          
          <Link 
            to="/map" 
            className="bg-white p-4 rounded-lg shadow border border-gray-100 flex items-center"
          >
            <div className="bg-green-100 p-3 rounded-full">
              <MapIcon className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <h3 className="font-medium">Interactive Map</h3>
              <p className="text-sm text-gray-500">Find your way around the event</p>
            </div>
          </Link>
          
          <Link 
            to="/vendors" 
            className="bg-white p-4 rounded-lg shadow border border-gray-100 flex items-center"
          >
            <div className="bg-purple-100 p-3 rounded-full">
              <ShoppingBagIcon className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <h3 className="font-medium">Food & Vendors</h3>
              <p className="text-sm text-gray-500">Explore food options and merchandise</p>
            </div>
          </Link>
        </div>
        
        <div className="mt-8 bg-yellow-50 rounded-lg p-4 border border-yellow-100">
          <h2 className="font-medium text-yellow-800">Event Info</h2>
          <div className="mt-2">
            <p className="text-sm flex items-center text-yellow-700 mb-1">
              <span className="font-medium w-20">Date:</span> March 8, 2025
            </p>
            <p className="text-sm flex items-center text-yellow-700 mb-1">
              <span className="font-medium w-20">Time:</span> 11:00 AM - 7:00 PM
            </p>
            <p className="text-sm flex items-center text-yellow-700 mb-1">
              <span className="font-medium w-20">Location:</span> La Pietra – Hawai'i School for Girls
            </p>
            <p className="text-sm flex items-center text-yellow-700">
              <span className="font-medium w-20">Address:</span> 2933 Poni Moi Rd, Honolulu, HI 96815
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 