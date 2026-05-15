import React from 'react';
import { MessageCircle, Phone, Video, Users, Settings } from 'lucide-react';
import Button from '../common/Button';

const BottomNav = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'chats', icon: MessageCircle, label: 'Chats' },
    { id: 'calls', icon: Phone, label: 'Calls' },
    { id: 'status', icon: Video, label: 'Status' },
    { id: 'contacts', icon: Users, label: 'Contacts' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden glass border-t border-white/10 px-2 py-3 flex justify-around">
      {tabs.map(tab => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        
        return (
          <Button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-200 ${
              isActive
                ? 'text-neon-purple'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Icon size={24} />
            <span className="text-xs font-medium">{tab.label}</span>
          </Button>
        );
      })}
    </div>
  );
};

export default BottomNav;
