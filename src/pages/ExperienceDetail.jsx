import { useParams, Link } from 'react-router-dom';
import { useMemo, useEffect, useState } from 'react';
import { ArrowLeftIcon, ClockIcon, UserIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
// MapIcon import removed

export default function ExperienceDetail() {
  const { id } = useParams();
  const [experienceData, setExperienceData] = useState([]);
  
  useEffect(() => {
    // Fetch the experiences data from the public directory
    fetch('/assets/data/experiences.json')
      .then(response => response.json())
      .then(data => setExperienceData(data))
      .catch(error => console.error('Error loading experiences:', error));
  }, []);
  
  // Find the experience based on ID
  const experience = useMemo(() => {
    return experienceData.find(exp => exp.id === id) || {};
  }, [id, experienceData]);

  // Filter to keep only the experiences we're displaying
  const filteredExperiences = useMemo(() => {
    const keepIds = [
      'vr-1', 'flight-sim-1', 'claw-1', 'hpd-keiki', 'hawaii-jobs',
      'hpu', 'looopsie', 'lp-laser', 'lp-robotics', 'mit-lenovo', 'racing-sim'
    ];
    return experienceData.filter(exp => keepIds.includes(exp.id));
  }, [experienceData]);
  
  if (!experience.id) {
    return (
      <div className="container mx-auto px-4 py-8 pb-20">
        <Link to="/experiences" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
          <ArrowLeftIcon className="w-4 h-4 mr-1" />
          Back to Experiences
        </Link>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <ExclamationCircleIcon className="w-12 h-12 text-red-500 mx-auto mb-3" />
          <h1 className="text-xl font-bold text-red-700">Experience Not Found</h1>
          <p className="text-gray-700 mt-2">The experience you're looking for doesn't exist or has been removed.</p>
          <Link to="/experiences" className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
            Return to Experiences
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8 pb-20">
      <Link to="/experiences" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
        <ArrowLeftIcon className="w-4 h-4 mr-1" />
        Back to Experiences
      </Link>
      
      <div className="bg-white rounded-lg shadow-sm p-6 border-t-4 border-t-[#004299]">
        <div className="flex items-center mb-4">
          <div className="text-4xl mr-3">{experience.icon}</div>
          <h1 className="text-2xl font-bold text-[#004299]">{experience.title}</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="bg-blue-50 rounded-lg p-4 mb-4">
              <p className="text-gray-800">{experience.description}</p>
            </div>
            
            <h2 className="text-lg font-semibold text-[#004299] mb-2">Details</h2>
            <ul className="space-y-2 mb-6">
              {experience.provider && (
                <li className="flex items-start">
                  <span className="text-gray-700 font-medium w-32">Provider:</span>
                  <span className="text-gray-800">{experience.provider}</span>
                </li>
              )}
              {experience.location && (
                <li className="flex items-start">
                  <span className="text-gray-700 font-medium w-32">Location:</span>
                  <span className="text-gray-800">
                    {experience.location}
                  </span>
                </li>
              )}
              {experience.duration && (
                <li className="flex items-start">
                  <span className="text-gray-700 font-medium w-32">Duration:</span>
                  <span className="text-gray-800 flex items-center">
                    <ClockIcon className="w-4 h-4 mr-1 text-gray-500" />
                    {experience.duration}
                  </span>
                </li>
              )}
              {experience.ageRestriction && (
                <li className="flex items-start">
                  <span className="text-gray-700 font-medium w-32">Age:</span>
                  <span className="text-gray-800 flex items-center">
                    <UserIcon className="w-4 h-4 mr-1 text-gray-500" />
                    {experience.ageRestriction}
                  </span>
                </li>
              )}
              {experience.cost && (
                <li className="flex items-start">
                  <span className="text-gray-700 font-medium w-32">Cost:</span>
                  <span className="text-gray-800">{experience.cost}</span>
                </li>
              )}
            </ul>
          </div>
          
          <div className="order-first md:order-last">
            <div className="bg-gray-100 rounded-lg p-4 mb-4">
              <h3 className="font-semibold text-[#004299] mb-2">Quick Actions</h3>
              {/* Map link commented out due to space constraints
              <Link 
                to="/map" 
                className="flex items-center justify-center p-3 bg-white hover:bg-gray-50 text-[#004299] font-medium rounded shadow-sm transition-colors mb-2 border border-gray-200"
              >
                <MapIcon className="w-5 h-5 mr-2" />
                Show on Map
              </Link>
              */}
              
              {/* Optional social media sharing buttons could go here */}
            </div>
            
            {experience.id && experience.id.includes('vr') && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-800 mb-2">Note</h3>
                <p className="text-sm text-yellow-800">
                  VR experiences may not be suitable for everyone. If you experience motion sickness or discomfort, please inform a staff member immediately.
                </p>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h3 className="font-semibold text-[#004299] mb-3">You might also be interested in</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {filteredExperiences
              .filter(exp => exp.id !== id)
              .slice(0, 3)
              .map(relatedExp => (
                <Link 
                  key={relatedExp.id} 
                  to={`/experience/${relatedExp.id}`}
                  className="flex items-center bg-gray-50 hover:bg-gray-100 p-3 rounded border border-gray-200 transition-colors"
                >
                  <div className="text-xl mr-2">{relatedExp.icon}</div>
                  <div>
                    <div className="font-medium text-gray-800">{relatedExp.title}</div>
                    <div className="text-xs text-gray-500">{relatedExp.provider}</div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
} 