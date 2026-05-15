import React from 'react';
import { formatMessageTime } from '../../utils/formatting';

const MessageBubble = ({ message, isOwn }) => {
  return (
    <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'} mb-3 animate-fade-in`}>
      <div
        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
          isOwn
            ? 'bg-neon-purple text-white rounded-br-none'
            : 'glass text-gray-100 rounded-bl-none'
        }`}
      >
        <p className="break-words text-sm md:text-base">{message.text}</p>
        <span className={`text-xs mt-1 block ${
          isOwn ? 'text-purple-200' : 'text-gray-400'
        }`}>
          {formatMessageTime(message.timestamp)}
        </span>
      </div>
    </div>
  );
};

export default MessageBubble;
