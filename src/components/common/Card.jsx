import React from 'react';

const Card = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`glass rounded-xl p-6 transition-all duration-200 hover:shadow-lg hover:shadow-neon-purple/20 ${
        className
      }`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
