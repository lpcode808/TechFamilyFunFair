import { useMemo, useState, useEffect } from 'react';

export default function Vendors() {
  // Flag to control displaying available items - set to false to hide items
  // To re-enable items display, simply change this to true
  const showAvailableItems = false;
  
  const [vendorsData, setVendorsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    console.log('Fetching vendors data...');
    
    // Get the correct base URL for GitHub Pages deployment
    const isDev = import.meta.env.DEV;
    const baseUrl = isDev ? '' : '/TechFamilyFunFair';
    const dataUrl = `${baseUrl}/assets/data/vendors.json`;
    
    console.log('Fetching from URL:', dataUrl);
    
    // Fetch the vendors data
    fetch(dataUrl)
      .then(response => {
        console.log('Response status:', response.status);
        if (!response.ok) {
          console.error('Failed to fetch vendors data:', response);
          throw new Error(`HTTP error! Status: ${response.status}, URL: ${dataUrl}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Vendors data loaded:', data.length, 'items');
        setVendorsData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading vendors:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Filter to only show merchandise vendors, excluding Island Art & Jewelry
  const merchandiseVendors = useMemo(() => {
    console.log('Filtering vendors from data:', vendorsData.length, 'items');
    const filtered = vendorsData.filter(vendor => 
      vendor.type === 'merchandise' && vendor.id !== 'merch-3' // Exclude Island Art & Jewelry
    );
    console.log('Filtered merchandise vendors:', filtered.length, 'items');
    return filtered;
  }, [vendorsData]);
  
  return (
    <div className="container mx-auto px-4 pb-20">
      <div className="py-6">
        <h1 className="text-2xl font-bold mb-4 dark:text-dark-text">Merchandise</h1>
        
        {loading && (
          <div className="text-center py-8">
            <p className="dark:text-dark-text">Loading merchandise vendors...</p>
          </div>
        )}
        
        {error && (
          <div className="text-center py-8 text-red-500">
            <p>Error loading merchandise vendors: {error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-4 px-4 py-2 bg-blue-500 dark:bg-dark-primary text-white rounded"
            >
              Retry
            </button>
          </div>
        )}
        
        {!loading && !error && (
          <div className="mt-4 grid gap-4">
            {merchandiseVendors.length > 0 ? (
              merchandiseVendors.map(vendor => (
                <div key={vendor.id} className="bg-white dark:bg-dark-card rounded-lg shadow p-4 border border-gray-100 dark:border-gray-700">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      {vendor.emoji && <span className="text-2xl mr-2">{vendor.emoji}</span>}
                      <div>
                        <h3 className="font-medium text-lg dark:text-white">{vendor.name}</h3>
                      </div>
                    </div>
                  </div>
                  
                  {vendor.description && (
                    <p className="mt-2 text-gray-700 dark:text-gray-300">{vendor.description}</p>
                  )}
                  
                  {/* Available Items section - only rendered if showAvailableItems is true */}
                  {showAvailableItems && vendor.items && (
                    <div className="mt-3">
                      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Available Items:</h4>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {vendor.items.map((item, i) => (
                          <span key={i} className="bg-gray-100 dark:bg-dark-secondary px-2 py-1 rounded text-xs dark:text-gray-300">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Original code for reference:
                  {vendor.items && (
                    <div className="mt-3">
                      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Available Items:</h4>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {vendor.items.map((item, i) => (
                          <span key={i} className="bg-gray-100 dark:bg-dark-secondary px-2 py-1 rounded text-xs dark:text-gray-300">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  */}
                  
                  {/* Website section - made more prominent */}
                  {vendor.website && (
                    <div className="mt-3">
                      <div className="text-gray-600 dark:text-gray-400">
                        <span className="font-medium">Website:</span>{' '}
                        <a 
                          href={vendor.website} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                        >
                          {vendor.website.replace('https://www.', '').replace('https://', '')}
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p>No merchandise vendors available.</p>
                <pre className="mt-4 text-xs text-left bg-gray-100 p-2 rounded overflow-auto">
                  {JSON.stringify(vendorsData, null, 2)}
                </pre>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 