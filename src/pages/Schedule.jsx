import { memo, useMemo, useState } from 'react';
import {
  ClockIcon,
  MapPinIcon,
  FunnelIcon
} from '@heroicons/react/24/outline';
import Card from '../components/Card';
import scheduleData from '../data/schedule.json';

const Schedule = memo(() => {
  const [filterType, setFilterType] = useState('all');
  const [expandedId, setExpandedId] = useState(null);

  // Get unique event types
  const eventTypes = useMemo(() => {
    const types = [...new Set(scheduleData.map(item => item.type))];
    return ['all', ...types];
  }, []);

  // Filter schedule based on selected type
  const filteredSchedule = useMemo(() => {
    if (filterType === 'all') return scheduleData;
    return scheduleData.filter(item => item.type === filterType);
  }, [filterType]);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getTypeColor = (type) => {
    const colors = {
      general: 'bg-gray-100 text-gray-800',
      ceremony: 'bg-blue-100 text-blue-800',
      workshop: 'bg-purple-100 text-purple-800',
      performance: 'bg-green-100 text-green-800',
      competition: 'bg-orange-100 text-orange-800',
      demonstration: 'bg-pink-100 text-pink-800',
      talk: 'bg-indigo-100 text-indigo-800',
      activity: 'bg-yellow-100 text-yellow-800'
    };
    return colors[type] || colors.general;
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="section-title">Event Schedule</h1>

      {/* Filter Controls */}
      <Card className="mb-6">
        <div className="flex items-center mb-3">
          <FunnelIcon className="w-5 h-5 text-la-pietra-blue mr-2" />
          <span className="font-semibold text-gray-700">Filter by type:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {eventTypes.map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                filterType === type
                  ? 'bg-la-pietra-blue text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </Card>

      {/* Schedule Items */}
      <div className="space-y-3">
        {filteredSchedule.length > 0 ? (
          filteredSchedule.map((item) => {
            const isExpanded = expandedId === item.id;

            return (
              <div
                key={item.id}
                className="card hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => toggleExpand(item.id)}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-20">
                    <div className="flex items-center text-la-pietra-blue font-semibold">
                      <ClockIcon className="w-4 h-4 mr-1" />
                      <span className="text-sm">{item.time}</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <h3 className="font-semibold text-gray-900 pr-2">
                        {item.title}
                      </h3>
                      <span className={`badge ${getTypeColor(item.type)} flex-shrink-0 text-xs`}>
                        {item.type}
                      </span>
                    </div>

                    {isExpanded && (
                      <div className="mt-2 space-y-2">
                        <p className="text-gray-600 text-sm">{item.description}</p>
                        {item.location && (
                          <div className="flex items-center text-sm text-gray-500">
                            <MapPinIcon className="w-4 h-4 mr-1" />
                            {item.location}
                          </div>
                        )}
                      </div>
                    )}

                    {!isExpanded && (
                      <p className="text-gray-500 text-sm mt-1 line-clamp-1">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <Card>
            <p className="text-gray-500 text-center py-8">
              No events found for this filter.
            </p>
          </Card>
        )}
      </div>

      {/* Legend */}
      <Card className="mt-6">
        <h3 className="font-semibold text-gray-700 mb-2 text-sm">
          Tap any event for more details
        </h3>
        <p className="text-gray-500 text-xs">
          Times are approximate and subject to change. Check with event staff for updates.
        </p>
      </Card>
    </div>
  );
});

Schedule.displayName = 'Schedule';

export default Schedule;
