import { useMemo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Experiences() {
  const [experienceData, setExperienceData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    console.log('Fetching experiences data...');
    
    // Determine the base URL based on the environment
    const baseUrl = import.meta.env.DEV ? '/' : '/TechFamilyFunFair/';
    const dataUrl = `${baseUrl}assets/data/experiences.json`;
    
    console.log('Fetching from URL:', dataUrl);
    
    // Fetch the experiences data
    fetch(dataUrl)
      .then(response => {
        console.log('Response status:', response.status);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Experiences data loaded:', data.length, 'items');
        setExperienceData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading experiences:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Filter tech exhibits (original experiences)
  const techExhibits = useMemo(() => {
    console.log('Filtering tech exhibits from data:', experienceData.length, 'items');
    const keepIds = [
      'vr-1', 'flight-sim-1', 'claw-1', 'hpd-keiki', 'hawaii-jobs',
      'hpu', 'looopsie', 'lp-laser', 'lp-robotics', 'mit-lenovo', 'racing-sim'
    ];
    
    const filtered = experienceData
      .filter(exp => keepIds.includes(exp.id))
      .sort((a, b) => a.title.localeCompare(b.title));
    
    console.log('Filtered tech exhibits:', filtered.length, 'items');
    return filtered;
  }, [experienceData]);
  
  // Filter games and activities
  const gamesActivities = useMemo(() => {
    console.log('Filtering games and activities from data:', experienceData.length, 'items');
    const activityIds = [
      'petting-zoo', 'pony-rides', 'bounce-houses', 'carnival-games', 'crafts'
    ];
    
    const filtered = experienceData
      .filter(exp => activityIds.includes(exp.id))
      .sort((a, b) => a.title.localeCompare(b.title));
    
    console.log('Filtered games and activities:', filtered.length, 'items');
    return filtered;
  }, [experienceData]);
  
  // Experience card component (to avoid duplicating code)
  const ExperienceCard = ({ experience }) => (
    <Link
      key={experience.id}
      to={`/experience/${experience.id}`}
      className="bg-white dark:bg-dark-card rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow p-4 flex flex-col"
    >
      <div className="flex items-start mb-2">
        <div className="text-3xl mr-3">{experience.icon}</div>
        <div>
          <h3 className="font-semibold text-[#004299] dark:text-dark-primary">{experience.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{experience.provider}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {experience.location}
          </p>
        </div>
      </div>
      
      {experience.description && (
        <p className="text-sm text-gray-700 dark:text-gray-300 mt-2 line-clamp-3">
          {experience.description}
        </p>
      )}
      
      <div className="mt-auto pt-3 flex flex-wrap gap-2">
        {experience.ageRestriction && (
          <span className="text-xs bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-2 py-1 rounded">
            Age: {experience.ageRestriction}
          </span>
        )}
        {experience.duration && (
          <span className="text-xs bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-200 px-2 py-1 rounded">
            {experience.duration}
          </span>
        )}
      </div>
    </Link>
  );

  return (
    <div className="container mx-auto px-4 py-8 pb-20">
      {loading && (
        <div className="text-center py-8">
          <p className="dark:text-dark-text">Loading experiences...</p>
        </div>
      )}
      
      {error && (
        <div className="text-center py-8 text-red-500">
          <p>Error loading experiences: {error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-blue-500 dark:bg-dark-primary text-white rounded"
          >
            Retry
          </button>
        </div>
      )}
      
      {!loading && !error && (
        <div className="space-y-10">
          {/* Tech Exhibits Section */}
          <div>
            <h2 className="text-2xl font-bold text-[#004299] dark:text-white mb-6 pb-2 border-b dark:border-gray-700">
              Tech Exhibits
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {techExhibits.length > 0 ? (
                techExhibits.map((experience) => (
                  <ExperienceCard key={experience.id} experience={experience} />
                ))
              ) : (
                <div className="col-span-3 text-center py-8 text-gray-500">
                  <p>No tech exhibits found.</p>
                </div>
              )}
            </div>
          </div>
          
          {/* Games & Activities Section */}
          <div>
            <h2 className="text-2xl font-bold text-[#004299] dark:text-white mb-6 pb-2 border-b dark:border-gray-700">
              Games & Activities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {gamesActivities.length > 0 ? (
                gamesActivities.map((experience) => (
                  <ExperienceCard key={experience.id} experience={experience} />
                ))
              ) : (
                <div className="col-span-3 text-center py-8 text-gray-500">
                  <p>No games or activities found.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 