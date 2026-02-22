import { memo } from 'react';

const LABELS = {
  google: "Google",
  yelp: "Yelp",
  instagram: "Instagram"
};

const SocialButton = memo(function SocialButton({ type, url = "#" }) {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="px-4 py-2 rounded-lg bg-hsg-navy dark:bg-dark-primary text-white dark:text-white text-sm font-medium 
        hover:bg-hsg-navy-hover dark:hover:bg-[#2563EB] 
        hover:text-white dark:hover:text-white
        hover:shadow-md hover:scale-105 
        transition-all duration-200 ease-in-out
        inline-block text-center min-w-[90px]"
      title={`Visit ${type} page`}
    >
      {LABELS[type]}
    </a>
  );
});

export default SocialButton;
