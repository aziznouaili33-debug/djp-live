import React, { useEffect, useState } from 'react';

const TypingIndicator = ({ isTyping, userName }) => {
  const [dots, setDots] = useState(1);

  useEffect(() => {
    if (!isTyping) return;

    const interval = setInterval(() => {
      setDots(prev => (prev % 3) + 1);
    }, 400);

    return () => clearInterval(interval);
  }, [isTyping]);

  if (!isTyping) return null;

  return (
    <div className="flex items-center gap-2 mb-3 animate-bounce-subtle">
      <div className="glass px-4 py-2 rounded-lg flex items-center gap-1">
        <div className="w-2 h-2 rounded-full bg-neon-purple animate-bounce-subtle" style={{ animationDelay: '0s' }} />
        <div className="w-2 h-2 rounded-full bg-neon-blue animate-bounce-subtle" style={{ animationDelay: '0.2s' }} />
        <div className="w-2 h-2 rounded-full bg-neon-pink animate-bounce-subtle" style={{ animationDelay: '0.4s' }} />
      </div>
      {userName && <span className="text-xs text-gray-400">{userName} is typing...</span>}
    </div>
  );
};

export default TypingIndicator;
