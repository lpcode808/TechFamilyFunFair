import { useState, useEffect } from 'react';
import ScheduleItem from '../components/ScheduleItem';

export default function Schedule() {
  const [schedule, setSchedule] = useState([]);
  const [filter, setFilter] = useState('all');
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
  
  const filteredSchedule = schedule.filter(item => {
    if (filter === 'all') return true;
    return item.type === filter;
  });
  
  return (
    <div className="container mx-auto px-4 pb-20">
      <div className="py-6">
        <h1 className="text-2xl font-bold dark:text-dark-text">Event Schedule</h1>
        
        <div className="flex overflow-x-auto py-4 space-x-2">
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              filter === 'all' 
                ? 'bg-blue-600 dark:bg-dark-primary text-white' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
            }`}
            onClick={() => setFilter('all')}
          >
            All Events
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              filter === 'tech-talk' 
                ? 'bg-blue-600 dark:bg-dark-primary text-white' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
            }`}
            onClick={() => setFilter('tech-talk')}
          >
            Tech Talks
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              filter === 'activity' 
                ? 'bg-blue-600 dark:bg-dark-primary text-white' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
            }`}
            onClick={() => setFilter('activity')}
          >
            Activities
          </button>
        </div>
        
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
          <div className="mt-4">
            {filteredSchedule.length > 0 ? (
              filteredSchedule.map(item => (
                <ScheduleItem key={item.id} item={item} />
              ))
            ) : (
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                <p>No events matching the selected filter.</p>
                <pre className="mt-4 text-xs text-left bg-gray-100 dark:bg-dark-secondary dark:text-gray-300 p-2 rounded overflow-auto">
                  Available types: {[...new Set(schedule.map(item => item.type))].join(', ')}
                </pre>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 