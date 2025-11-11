import { memo } from 'react';

const Card = memo(({ children, className = '', withHeader = false }) => {
  const baseClasses = 'card';
  const headerClasses = withHeader ? 'card-header' : '';

  return (
    <div className={`${baseClasses} ${headerClasses} ${className}`}>
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;
