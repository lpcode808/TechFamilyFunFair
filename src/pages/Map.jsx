import { useState, useEffect, useMemo, memo } from 'react';
import MapMarker from '../components/MapMarker';

// Memoize the MapMarker component
const MemoizedMapMarker = memo(MapMarker);

export default function Map() {
  const [mapData, setMapData] = useState({ zones: {}, attractions: [] });
  const [scheduleData, setScheduleData] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  
  useEffect(() => {
    // Fetch map data
    fetch('/assets/data/map.json')
      .then(response => response.json())
      .then(data => setMapData(data))
      .catch(error => console.error('Error loading map data:', error));
    
    // Fetch schedule data
    fetch('/assets/data/schedule.json')
      .then(response => response.json())
      .then(data => setScheduleData(data))
      .catch(error => console.error('Error loading schedule data:', error));
  }, []);
  
  // Convert to useMemo to avoid recalculating on each render
  const eventDetails = useMemo(() => {
    const eventMap = {};
    scheduleData.forEach(event => {
      eventMap[event.id] = event;
    });
    return eventMap;
  }, [scheduleData]);
  
  const handleMarkerClick = (id) => {
    setSelectedMarker(selectedMarker === id ? null : id);
  };
  
  // Memoize zone elements to prevent re-renders
  const zoneElements = useMemo(() => {
    return Object.keys(mapData.zones).map(key => {
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
    });
  }, [mapData.zones]);
  
  // Memoize attraction markers
  const attractionMarkers = useMemo(() => {
    return mapData.attractions.map(attraction => {
      const event = eventDetails[attraction.id] || {};
      return (
        <MemoizedMapMarker
          key={attraction.id}
          x={attraction.x}
          y={attraction.y}
          icon={attraction.icon}
          title={event.title || 'Unknown Event'}
          onClick={() => handleMarkerClick(attraction.id)}
          isActive={selectedMarker === attraction.id}
        />
      );
    });
  }, [eventDetails, selectedMarker, mapData.attractions]);
  
  // Memoize selected event details
  const selectedEventElement = useMemo(() => {
    if (!selectedMarker || !eventDetails[selectedMarker]) return null;
    
    const event = eventDetails[selectedMarker];
    return (
      <div className="mt-4 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <h3 className="font-medium">{event.title}</h3>
        <p className="text-sm text-gray-600 mt-1">
          {event.time} at {event.location}
        </p>
        {event.speaker && (
          <p className="text-sm text-gray-600 mt-1">
            Speaker: {event.speaker}
          </p>
        )}
      </div>
    );
  }, [selectedMarker, eventDetails]);
  
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
            {zoneElements}
            
            {/* Event markers */}
            {attractionMarkers}
          </div>
          
          {/* Selected event details */}
          {selectedEventElement}
        </div>
      </div>
    </div>
  );
} 