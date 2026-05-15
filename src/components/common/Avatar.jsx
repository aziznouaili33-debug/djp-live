import React from 'react';
import { getInitials } from '../../utils/formatting';

const Avatar = ({ src, name, size = 'md', onClick }) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-12 h-12 text-sm',
    lg: 'w-16 h-16 text-lg',
  };

  return (
    <div
      onClick={onClick}
      className={`${
        sizeClasses[size]
      } rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-neon-purple to-neon-blue flex-shrink-0 cursor-pointer hover:shadow-lg transition-all ${
        onClick ? 'hover:shadow-glow-purple' : ''
      }`}
    >
      {src ? (
        <img src={src} alt={name} className="w-full h-full object-cover" />
      ) : (
        <span className="font-bold text-white">{getInitials(name)}</span>
      )}
    </div>
  );
};

export default Avatar;
