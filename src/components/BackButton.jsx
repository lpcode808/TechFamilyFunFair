import { memo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const BackButton = memo(({ to, label = 'Back' }) => {
  return (
    <Link
      to={to}
      className="inline-flex items-center text-la-pietra-blue hover:text-la-pietra-blue-dark mb-4 font-medium"
    >
      <ArrowLeftIcon className="w-4 h-4 mr-1" />
      {label}
    </Link>
  );
});

BackButton.displayName = 'BackButton';

export default BackButton; 