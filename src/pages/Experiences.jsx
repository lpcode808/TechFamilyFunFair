import { useMemo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

export default function Experiences() {
  const [experienceData, setExperienceData] = useState([]);
  
  useEffect(() => {
    // Fetch the experiences data from the public directory
    fetch('/assets/data/experiences.json')
      .then(response => response.json())
      .then(data => setExperienceData(data))
      .catch(error => console.error('Error loading experiences:', error));
  }, []);

  // Filter to single items for duplicate categories and sort alphabetically
  const filteredExperiences = useMemo(() => {
    const keepIds = [
      'vr-1', 'flight-sim-1', 'claw-1', 'hpd-keiki', 'hawaii-jobs',
      'hpu', 'looopsie', 'lp-laser', 'lp-robotics', 'mit-lenovo', 'racing-sim'
    ];
    
    return experienceData
      .filter(exp => keepIds.includes(exp.id))
      .sort((a, b) => a.title.localeCompare(b.title));
  }, [experienceData]);

  return (
    <div className="container mx-auto px-4 py-8 pb-20">
      <BackButton to="/" label="Back to Home" />
      
      <h1 className="text-2xl font-bold text-[#004299] mb-6">All Experiences</h1>
      
      {/* Experience list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredExperiences.map((experience) => (
          <Link
            key={experience.id}
            to={`/experience/${experience.id}`}
            className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow p-4 flex items-start"
          >
            <div className="text-3xl mr-3">{experience.icon}</div>
            <div>
              <h3 className="font-semibold text-[#004299]">{experience.title}</h3>
              <p className="text-sm text-gray-600">{experience.provider}</p>
              <p className="text-xs text-gray-500 mt-1">
                {experience.location}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Note: Map functionality is commented out due to limited space
      <div className="mt-8 text-center">
        <Link 
          to="/map" 
          className="inline-flex items-center justify-center px-4 py-2 bg-[#004299] text-white rounded-md hover:bg-[#00306d] transition-colors"
        >
          <MapIcon className="w-5 h-5 mr-2" />
          View on Interactive Map
        </Link>
      </div>
      */}
    </div>
  );
} 