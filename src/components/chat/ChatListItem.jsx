import React from 'react';
import { formatTime, truncate } from '../../utils/formatting';
import Avatar from '../common/Avatar';
import Badge from '../common/Badge';

const ChatListItem = ({ chat, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`p-3 md:p-4 cursor-pointer transition-all duration-300 border-l-4 ${
        isSelected
          ? 'bg-dark-700 border-neon-purple'
          : 'hover:bg-dark-800 border-transparent'
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="relative">
          <Avatar src={chat.avatar} name={chat.name} size="md" />
          <Badge status={chat.status} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-semibold text-white truncate">{chat.name}</h3>
            <span className="text-xs text-gray-400 whitespace-nowrap">
              {formatTime(chat.timestamp)}
            </span>
          </div>
          <p className="text-sm text-gray-400 truncate mt-1">
            {truncate(chat.lastMessage, 40)}
          </p>
        </div>

        {chat.unread > 0 && (
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-neon-pink text-white text-xs flex items-center justify-center font-bold">
            {chat.unread}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatListItem;
