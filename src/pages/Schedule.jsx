import { useState, useEffect } from 'react';
import ScheduleItem from '../components/ScheduleItem';

export default function Schedule() {
  const [schedule, setSchedule] = useState([]);
  const [filter, setFilter] = useState('all');
  
  useEffect(() => {
    // Fetch schedule data from public directory
    fetch('/assets/data/schedule.json')
      .then(response => response.json())
      .then(data => {
        // Sort schedule by time
        const sortedSchedule = [...data].sort((a, b) => {
          // Convert time strings to comparable values (simple version)
          const timeA = a.time;
          const timeB = b.time;
          return timeA.localeCompare(timeB);
        });
        
        setSchedule(sortedSchedule);
      })
      .catch(error => console.error('Error loading schedule:', error));
  }, []);
  
  const filteredSchedule = schedule.filter(item => {
    if (filter === 'all') return true;
    return item.type === filter;
  });
  
  return (
    <div className="container mx-auto px-4 pb-20">
      <div className="py-6">
        <h1 className="text-2xl font-bold">Event Schedule</h1>
        
        <div className="flex overflow-x-auto py-4 space-x-2">
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setFilter('all')}
          >
            All Events
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              filter === 'tech-talk' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setFilter('tech-talk')}
          >
            Tech Talks
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              filter === 'activity' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setFilter('activity')}
          >
            Activities
          </button>
        </div>
        
        <div className="mt-4">
          {filteredSchedule.length > 0 ? (
            filteredSchedule.map(item => (
              <ScheduleItem key={item.id} item={item} />
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              No events matching the selected filter.
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 