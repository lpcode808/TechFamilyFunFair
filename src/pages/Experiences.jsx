import { memo, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { FunnelIcon } from '@heroicons/react/24/outline';
import Card from '../components/Card';
import experienceData from '../data/experiences.json';

const ExperienceCard = memo(({ experience }) => (
  <Link
    to={`/experience/${experience.id}`}
    className="card hover:shadow-md transition-shadow flex items-start"
  >
    <div className="text-3xl mr-3">{experience.icon}</div>
    <div className="flex-1 min-w-0">
      <h3 className="font-semibold text-la-pietra-blue">{experience.title}</h3>
      <p className="text-sm text-gray-600 mt-1">{experience.provider}</p>
      <span className={`badge ${getCategoryColor(experience.category)} mt-2`}>
        {experience.category}
      </span>
    </div>
  </Link>
));

ExperienceCard.displayName = 'ExperienceCard';

function getCategoryColor(category) {
  const colors = {
    vr: 'badge-purple',
    simulation: 'badge-blue',
    interactive: 'badge-green',
    educational: 'bg-orange-100 text-orange-800'
  };
  return colors[category] || 'bg-gray-100 text-gray-800';
}

const Experiences = memo(() => {
  const [filterCategory, setFilterCategory] = useState('all');

  // Get unique categories
  const categories = useMemo(() => {
    const cats = [...new Set(experienceData.map(exp => exp.category))];
    return ['all', ...cats];
  }, []);

  // Filter and sort experiences
  const filteredExperiences = useMemo(() => {
    let filtered = experienceData;
    if (filterCategory !== 'all') {
      filtered = experienceData.filter(exp => exp.category === filterCategory);
    }
    return filtered.sort((a, b) => a.title.localeCompare(b.title));
  }, [filterCategory]);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="section-title">Experiences</h1>

      {/* Filter Controls */}
      <Card className="mb-6">
        <div className="flex items-center mb-3">
          <FunnelIcon className="w-5 h-5 text-la-pietra-blue mr-2" />
          <span className="font-semibold text-gray-700">Filter by category:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilterCategory(category)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                filterCategory === category
                  ? 'bg-la-pietra-blue text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </Card>

      {/* Experience Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredExperiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>

      {filteredExperiences.length === 0 && (
        <Card>
          <p className="text-gray-500 text-center py-8">
            No experiences found in this category.
          </p>
        </Card>
      )}
    </div>
  );
});

Experiences.displayName = 'Experiences';

export default Experiences; 