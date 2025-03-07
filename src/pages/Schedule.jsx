import { useState, useEffect } from 'react';

export default function Schedule() {
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    console.log('Fetching schedule data...');
    
    // Determine the base URL based on the environment
    const baseUrl = import.meta.env.DEV ? '/' : '/TechFamilyFunFair/';
    const dataUrl = `${baseUrl}assets/data/schedule.json`;
    
    console.log('Fetching from URL:', dataUrl);
    
    // Fetch schedule data from public directory
    fetch(dataUrl)
      .then(response => {
        console.log('Response status:', response.status);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Schedule data loaded:', data.length, 'items');
        // Sort schedule by time
        const sortedSchedule = [...data].sort((a, b) => {
          // Convert time strings to comparable values (simple version)
          const timeA = a.time;
          const timeB = b.time;
          return timeA.localeCompare(timeB);
        });
        
        setSchedule(sortedSchedule);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading schedule:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);
  
  // Group events by location
  const stage1Events = schedule.filter(item => item.location.includes('Stage 1'));
  const stage2Events = schedule.filter(item => item.location.includes('Stage 2'));
  
  // Simple schedule item component
  const ScheduleItem = ({ item }) => (
    <div className="border rounded-lg mb-3 overflow-hidden bg-white dark:bg-dark-card dark:border-gray-700 p-4">
      <div className="flex items-center">
        <div className="flex-shrink-0 w-20 text-center">
          <span className="font-medium text-gray-900 dark:text-white">{item.time}</span>
        </div>
        <div className="ml-4 flex-1">
          <h3 className="font-medium text-gray-900 dark:text-white">{item.title}</h3>
          <div className="mt-1">
            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
              item.type === 'performance' 
                ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200' 
                : 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
            }`}>
              {item.type === 'performance' ? 'Performance' : 'Activity'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
  
  return (
    <div className="container mx-auto px-4 pb-20">
      <div className="py-6">
        <h1 className="text-2xl font-bold dark:text-dark-text mb-6">Event Schedule</h1>
        
        {loading && (
          <div className="text-center py-8">
            <p className="dark:text-dark-text">Loading schedule...</p>
          </div>
        )}
        
        {error && (
          <div className="text-center py-8 text-red-500">
            <p>Error loading schedule: {error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-4 px-4 py-2 bg-blue-500 dark:bg-dark-primary text-white rounded"
            >
              Retry
            </button>
          </div>
        )}
        
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Stage 1 Section */}
            <div>
              <h2 className="text-xl font-bold text-[#004299] dark:text-white mb-4 pb-2 border-b dark:border-gray-700">
                Stage 1 (Gym)
              </h2>
              {stage1Events.length > 0 ? (
                stage1Events.map(item => (
                  <ScheduleItem key={item.id} item={item} />
                ))
              ) : (
                <p className="text-gray-500 dark:text-gray-400">No events scheduled for Stage 1.</p>
              )}
            </div>
            
            {/* Stage 2 Section */}
            <div>
              <h2 className="text-xl font-bold text-[#004299] dark:text-white mb-4 pb-2 border-b dark:border-gray-700">
                Stage 2 (Great Lawn)
              </h2>
              {stage2Events.length > 0 ? (
                stage2Events.map(item => (
                  <ScheduleItem key={item.id} item={item} />
                ))
              ) : (
                <p className="text-gray-500 dark:text-gray-400">No events scheduled for Stage 2.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 