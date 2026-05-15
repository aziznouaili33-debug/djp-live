import React from 'react';

const Badge = ({ status = 'offline' }) => {
  const statusColors = {
    online: 'bg-green-500 shadow-lg shadow-green-500/50',
    offline: 'bg-gray-500',
    away: 'bg-yellow-500',
  };

  return (
    <div
      className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-dark-900 ${
        statusColors[status]
      }`}
    />
  );
};

export default Badge;
