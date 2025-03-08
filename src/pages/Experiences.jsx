import { useMemo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Experiences() {
  const [experienceData, setExperienceData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    console.log('Fetching experiences data...');
    
    // Be consistent with the URL construction
    const dataUrl = import.meta.env.DEV 
      ? '/assets/data/experiences.json' 
      : '/TechFamilyFunFair/assets/data/experiences.json';
    
    console.log('Fetching from URL:', dataUrl);
    
    // Fetch the experiences data
    fetch(dataUrl)
      .then(response => {
        console.log('Response status:', response.status);
        if (!response.ok) {
          console.error('Failed to fetch experiences data:', response);
          throw new Error(`HTTP error! Status: ${response.status}, URL: ${dataUrl}`);
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
  const ExperienceCard = ({ experience }) => {
    // Add this function to prevent navigation while keeping the Link component
    const handleClick = (e) => {
      e.preventDefault();
      // When ready to re-enable, just remove or comment out this function
      console.log('Card clicked:', experience.title);
      // To re-enable full-screen view later, you can uncomment the line below
      // window.location.href = `/experience/${experience.id}`;
    };
    
    return (
      <Link
        key={experience.id}
        to={`/experience/${experience.id}`}
        onClick={handleClick}
        className="bg-white dark:bg-dark-card rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow p-4 flex flex-col cursor-pointer"
      >
        <div className="flex items-start mb-2">
          <div className="text-3xl mr-3">{experience.icon}</div>
          <div>
            <h3 className="font-semibold text-[#004299] dark:text-dark-primary">{experience.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{experience.provider}</p>
          </div>
        </div>
        
        {experience.description && (
          <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
            {experience.description}
          </p>
        )}
        
        {/* Website link - displayed at the bottom of the card */}
        {experience.website && (
          <div className="mt-auto pt-3">
            <a 
              href={experience.website}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} // Prevent card click handler from triggering
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
            >
              <span>Website</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        )}
      </Link>
    );
  };

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
          {/* Prospective Families Section - Moved to top */}
          <div>
            <h2 className="text-2xl font-bold text-[#004299] dark:text-white mb-6 pb-2 border-b dark:border-gray-700">
              Prospective Families
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Future Students Card */}
              <a 
                href="https://www.lapietra.edu/admissions/discover-purpose" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white dark:bg-dark-card rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow p-4 flex flex-col"
              >
                <div className="flex items-start mb-2">
                  <div className="text-3xl mr-3">🎓</div>
                  <div>
                    {/* Removed the title as requested */}
                    <p className="text-sm text-gray-600 dark:text-gray-400">Admissions Information</p>
                  </div>
                </div>
                
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                  Discover everything you need to know about applying to our school, from admissions criteria to important deadlines. Learn about our academic programs, extracurricular activities, and what makes our school special.
                </p>
                
                <div className="mt-auto pt-3">
                  <span className="text-sm text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center">
                    Visit Admissions Page
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </div>
              </a>
              
              {/* Alumnae Card */}
              <a 
                href="https://www.lapietra.edu/alumnae/overview/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white dark:bg-dark-card rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow p-4 flex flex-col"
              >
                <div className="flex items-start mb-2">
                  <div className="text-3xl mr-3">👥</div>
                  <div>
                    {/* Removed the title as requested */}
                    <p className="text-sm text-gray-600 dark:text-gray-400">Alumni Relations</p>
                  </div>
                </div>
                
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                  Stay connected with your alma mater. Learn about alumni events, networking opportunities, and ways to give back to the community. Reconnect with former classmates and share your stories with current students.
                </p>
                
                <div className="mt-auto pt-3">
                  <span className="text-sm text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center">
                    Visit Alumnae Page
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </div>
              </a>
            </div>
          </div>
          
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