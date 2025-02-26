import { useState, useEffect } from 'react';
import MapMarker from '../components/MapMarker';
import mapData from '../assets/data/map.json';
import scheduleData from '../assets/data/schedule.json';

export default function Map() {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [eventDetails, setEventDetails] = useState({});
  
  useEffect(() => {
    // Create a mapping of event IDs to their details
    const eventMap = {};
    scheduleData.forEach(event => {
      eventMap[event.id] = event;
    });
    setEventDetails(eventMap);
  }, []);
  
  const handleMarkerClick = (id) => {
    setSelectedMarker(selectedMarker === id ? null : id);
  };
  
  return (
    <div className="container mx-auto px-4 pb-20">
      <div className="py-6">
        <h1 className="text-2xl font-bold">Event Map</h1>
        
        <div className="mt-4 bg-gray-100 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-2">
            Tap on markers to see event details. Pan and zoom to navigate the map.
          </p>
          
          <div className="relative bg-blue-50 border border-blue-200 rounded-lg overflow-hidden" style={{ height: '60vh' }}>
            {/* This would be replaced with a real map or SVG in production */}
            <div className="absolute inset-0 p-4 text-center flex items-center justify-center text-gray-400">
              <span className="text-sm">Interactive venue map would appear here</span>
            </div>
            
            {/* Zone overlays */}
            {Object.keys(mapData.zones).map(key => {
              const zone = mapData.zones[key];
              return (
                <div 
                  key={key}
                  className="absolute bg-blue-200 bg-opacity-40 rounded border border-blue-300 flex items-center justify-center"
                  style={{
                    left: zone.x,
                    top: zone.y,
                    width: zone.width,
                    height: zone.height
                  }}
                >
                  <span className="text-xs font-medium text-blue-800 p-1 bg-white bg-opacity-70 rounded">
                    {zone.name}
                  </span>
                </div>
              );
            })}
            
            {/* Event markers */}
            {mapData.attractions.map(attraction => {
              const event = eventDetails[attraction.id] || {};
              return (
                <MapMarker
                  key={attraction.id}
                  x={attraction.x}
                  y={attraction.y}
                  icon={attraction.icon}
                  title={event.title || 'Unknown Event'}
                  onClick={() => handleMarkerClick(attraction.id)}
                  isActive={selectedMarker === attraction.id}
                />
              );
            })}
          </div>
          
          {/* Selected event details */}
          {selectedMarker && eventDetails[selectedMarker] && (
            <div className="mt-4 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-medium">{eventDetails[selectedMarker].title}</h3>
              <p className="text-sm text-gray-600 mt-1">
                {eventDetails[selectedMarker].time} at {eventDetails[selectedMarker].location}
              </p>
              {eventDetails[selectedMarker].speaker && (
                <p className="text-sm text-gray-600 mt-1">
                  Speaker: {eventDetails[selectedMarker].speaker}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 