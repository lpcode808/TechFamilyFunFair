import { memo, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ClockIcon, UserIcon, ExclamationCircleIcon, MapPinIcon } from '@heroicons/react/24/outline';
import BackButton from '../components/BackButton';
import Card from '../components/Card';
import experienceData from '../data/experiences.json';

const ExperienceDetail = memo(() => {
  const { id } = useParams();

  // Find the experience based on ID
  const experience = useMemo(() => {
    return experienceData.find(exp => exp.id === id) || {};
  }, [id]);

  // Get related experiences from same category
  const relatedExperiences = useMemo(() => {
    if (!experience.category) return [];
    return experienceData
      .filter(exp => exp.category === experience.category && exp.id !== id)
      .slice(0, 3);
  }, [experience, id]);
  
  if (!experience.id) {
    return (
      <div className="container mx-auto px-4 py-6">
        <BackButton to="/experiences" label="Back to Experiences" />
        <Card className="text-center py-8">
          <ExclamationCircleIcon className="w-16 h-16 text-red-500 mx-auto mb-3" />
          <h1 className="text-xl font-bold text-red-700 mb-2">Experience Not Found</h1>
          <p className="text-gray-700 mb-4">
            The experience you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/experiences" className="btn-primary">
            Return to Experiences
          </Link>
        </Card>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-6">
      <BackButton to="/experiences" label="Back to Experiences" />

      <Card withHeader>
        <div className="flex items-center mb-4">
          <div className="text-4xl mr-3">{experience.icon}</div>
          <h1 className="text-2xl font-bold text-la-pietra-blue">{experience.title}</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-blue-50 rounded-lg p-4 mb-4">
              <p className="text-gray-800">{experience.description}</p>
            </div>

            <h2 className="text-lg font-semibold text-la-pietra-blue mb-3">Details</h2>
            <div className="space-y-3">
              {experience.provider && (
                <div className="flex items-start">
                  <span className="text-gray-600 font-medium w-28 flex-shrink-0">Provider:</span>
                  <span className="text-gray-800">{experience.provider}</span>
                </div>
              )}
              {experience.location && (
                <div className="flex items-start">
                  <span className="text-gray-600 font-medium w-28 flex-shrink-0">Location:</span>
                  <span className="text-gray-800 flex items-center">
                    <MapPinIcon className="w-4 h-4 mr-1 text-gray-500" />
                    {experience.location}
                  </span>
                </div>
              )}
              {experience.duration && (
                <div className="flex items-start">
                  <span className="text-gray-600 font-medium w-28 flex-shrink-0">Duration:</span>
                  <span className="text-gray-800 flex items-center">
                    <ClockIcon className="w-4 h-4 mr-1 text-gray-500" />
                    {experience.duration}
                  </span>
                </div>
              )}
              {experience.ageRestriction && (
                <div className="flex items-start">
                  <span className="text-gray-600 font-medium w-28 flex-shrink-0">Age:</span>
                  <span className="text-gray-800 flex items-center">
                    <UserIcon className="w-4 h-4 mr-1 text-gray-500" />
                    {experience.ageRestriction}
                  </span>
                </div>
              )}
              {experience.cost && (
                <div className="flex items-start">
                  <span className="text-gray-600 font-medium w-28 flex-shrink-0">Cost:</span>
                  <span className="text-gray-800 font-semibold text-green-700">
                    {experience.cost}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div>
            {experience.category === 'vr' && (
              <Card className="bg-yellow-50 border-yellow-200">
                <h3 className="font-semibold text-yellow-800 mb-2 flex items-center">
                  <ExclamationCircleIcon className="w-5 h-5 mr-1" />
                  Important Note
                </h3>
                <p className="text-sm text-yellow-800">
                  VR experiences may not be suitable for everyone. If you experience motion sickness or discomfort, please inform a staff member immediately.
                </p>
              </Card>
            )}
          </div>
        </div>

        {relatedExperiences.length > 0 && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="font-semibold text-la-pietra-blue mb-3">
              Similar Experiences
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {relatedExperiences.map(relatedExp => (
                <Link
                  key={relatedExp.id}
                  to={`/experience/${relatedExp.id}`}
                  className="card hover:shadow-md transition-shadow flex items-center"
                >
                  <div className="text-2xl mr-2">{relatedExp.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900 text-sm">{relatedExp.title}</div>
                    <div className="text-xs text-gray-500 truncate">{relatedExp.provider}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </Card>
    </div>
  );
});

ExperienceDetail.displayName = 'ExperienceDetail';

export default ExperienceDetail; 