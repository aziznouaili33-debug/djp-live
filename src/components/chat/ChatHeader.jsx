import React from 'react';
import { Phone, Video, Info } from 'lucide-react';
import Button from '../common/Button';
import Avatar from '../common/Avatar';
import Badge from '../common/Badge';

const ChatHeader = ({ chat }) => {
  return (
    <div className="glass p-4 border-b border-white/10 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="relative">
          <Avatar src={chat.avatar} name={chat.name} size="md" />
          <Badge status={chat.status} />
        </div>
        <div>
          <h2 className="font-semibold text-white">{chat.name}</h2>
          <p className="text-xs text-gray-400">
            {chat.status === 'online' ? 'Online now' : 'Offline'}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button className="p-2 hover:bg-dark-700 rounded-lg transition-colors text-gray-400 hover:text-white">
          <Phone size={20} />
        </Button>
        <Button className="p-2 hover:bg-dark-700 rounded-lg transition-colors text-gray-400 hover:text-white">
          <Video size={20} />
        </Button>
        <Button className="p-2 hover:bg-dark-700 rounded-lg transition-colors text-gray-400 hover:text-white">
          <Info size={20} />
        </Button>
      </div>
    </div>
  );
};

export default ChatHeader;
