import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function BackButton({ to, label }) {
  return (
    <Link 
      to={to} 
      className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
    >
      <ArrowLeftIcon className="w-4 h-4 mr-1" />
      {label}
    </Link>
  );
} 