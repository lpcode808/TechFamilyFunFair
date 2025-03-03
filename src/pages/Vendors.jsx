import { useState } from 'react';
import vendorsData from '../assets/data/vendors.json';

export default function Vendors() {
  const [filter, setFilter] = useState('all');
  
  const filteredVendors = vendorsData.filter(vendor => {
    if (filter === 'all') return true;
    return vendor.type === filter;
  });
  
  return (
    <div className="container mx-auto px-4 pb-20">
      <div className="py-6">
        <h1 className="text-2xl font-bold">Food & Vendors</h1>
        
        <div className="flex overflow-x-auto py-4 space-x-2">
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              filter === 'all' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setFilter('all')}
          >
            All Vendors
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              filter === 'food' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setFilter('food')}
          >
            Food
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              filter === 'merchandise' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setFilter('merchandise')}
          >
            Merchandise
          </button>
        </div>
        
        <div className="mt-4 grid gap-4">
          {filteredVendors.length > 0 ? (
            filteredVendors.map(vendor => (
              <div key={vendor.id} className="bg-white rounded-lg shadow p-4 border border-gray-100">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-lg">{vendor.name}</h3>
                    <p className="text-sm text-gray-500">{vendor.location}</p>
                  </div>
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                    {vendor.type}
                  </span>
                </div>
                
                {vendor.items && (
                  <div className="mt-3">
                    <h4 className="text-sm font-medium text-gray-700">Available Items:</h4>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {vendor.items.map((item, i) => (
                        <span key={i} className="bg-gray-100 px-2 py-1 rounded text-xs">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {vendor.openTime && vendor.closeTime && (
                  <div className="mt-3 text-sm text-gray-600">
                    <span className="font-medium">Hours:</span> {vendor.openTime} - {vendor.closeTime}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              No vendors matching the selected filter.
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 