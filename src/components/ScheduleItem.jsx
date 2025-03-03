import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon, MapPinIcon, UserIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function ScheduleItem({ item }) {
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpanded = () => setExpanded(!expanded);
  
  return (
    <div className="border rounded-lg mb-3 overflow-hidden bg-white">
      <div 
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={toggleExpanded}
      >
        <div className="flex-1">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-12 text-center">
              <span className="font-medium text-gray-900">{item.time}</span>
            </div>
            <div className="ml-4">
              <h3 className="font-medium text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-500 flex items-center">
                <MapPinIcon className="w-4 h-4 mr-1 inline" />
                {item.location}
              </p>
            </div>
          </div>
        </div>
        <div>
          {expanded ? (
            <ChevronUpIcon className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDownIcon className="w-5 h-5 text-gray-500" />
          )}
        </div>
      </div>
      
      {expanded && (
        <div className="border-t p-4 bg-gray-50">
          {item.speaker && (
            <div className="flex items-center mb-2">
              <UserIcon className="w-4 h-4 mr-2 text-gray-500" />
              <span className="text-sm">{item.speaker}</span>
            </div>
          )}
          <div className="flex items-center">
            <ClockIcon className="w-4 h-4 mr-2 text-gray-500" />
            <span className="text-sm">{item.time}</span>
          </div>
          <div className="mt-2">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
              {item.type}
            </span>
          </div>
        </div>
      )}
    </div>
  );
} 