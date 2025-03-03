import { useMemo, useState, useEffect } from 'react';

export default function Vendors() {
  const [vendorsData, setVendorsData] = useState([]);
  
  useEffect(() => {
    // Fetch the vendors data from the public directory
    fetch('/assets/data/vendors.json')
      .then(response => response.json())
      .then(data => setVendorsData(data))
      .catch(error => console.error('Error loading vendors:', error));
  }, []);

  // Filter to only show merchandise vendors
  const merchandiseVendors = useMemo(() => {
    return vendorsData.filter(vendor => vendor.type === 'merchandise');
  }, [vendorsData]);
  
  return (
    <div className="container mx-auto px-4 pb-20">
      <div className="py-6">
        <h1 className="text-2xl font-bold mb-4">Merchandise</h1>
        
        <div className="mt-4 grid gap-4">
          {merchandiseVendors.length > 0 ? (
            merchandiseVendors.map(vendor => (
              <div key={vendor.id} className="bg-white rounded-lg shadow p-4 border border-gray-100">
                <div className="flex justify-between items-start">
                  <div className="flex items-center">
                    {vendor.emoji && <span className="text-2xl mr-2">{vendor.emoji}</span>}
                    <div>
                      <h3 className="font-medium text-lg">{vendor.name}</h3>
                      <p className="text-sm text-gray-500">{vendor.location}</p>
                    </div>
                  </div>
                </div>
                
                {vendor.description && (
                  <p className="mt-2 text-gray-700">{vendor.description}</p>
                )}
                
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
                
                <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
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
                  
                  {vendor.openTime && vendor.closeTime && (
                    <div className="text-gray-600">
                      <span className="font-medium">Hours:</span> {vendor.openTime} - {vendor.closeTime}
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              No merchandise vendors available.
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 