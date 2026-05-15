import React from 'react';

const Input = ({ label, error, ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-white mb-2">
          {label}
        </label>
      )}
      <input
        {...props}
        className={`w-full bg-dark-700 text-white rounded-lg px-4 py-3 border transition-all duration-200 focus:outline-none ${
          error
            ? 'border-neon-pink focus:border-neon-pink focus:ring-2 focus:ring-neon-pink/30'
            : 'border-white/10 focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/30'
        }`}
      />
      {error && (
        <p className="text-neon-pink text-sm mt-1">{error}</p>
      )}
    </div>
  );
};

export default Input;
