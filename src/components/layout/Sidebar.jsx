import React, { useState } from 'react';
import { Menu, X, LogOut } from 'lucide-react';
import Button from '../common/Button';
import useAuthStore from '../../store/authStore';

const Sidebar = ({ isOpen, onClose }) => {
  const { user, logout } = useAuthStore();
  const [activeTab, setActiveTab] = useState('chats');

  const menuItems = [
    { id: 'chats', label: 'Chats', icon: '💬' },
    { id: 'calls', label: 'Calls', icon: '📞' },
    { id: 'status', label: 'Status', icon: '📹' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-30"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:relative inset-y-0 left-0 w-64 glass border-r border-white/10 transform transition-transform duration-300 z-40 md:z-0 md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
            VIPCHAT
          </h1>
          <Button
            onClick={onClose}
            className="md:hidden p-2 hover:bg-dark-700 rounded-lg transition-colors"
          >
            <X size={20} />
          </Button>
        </div>

        {/* Menu Items */}
        <nav className="p-4 space-y-2">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
                activeTab === item.id
                  ? 'bg-neon-purple text-white'
                  : 'text-gray-300 hover:bg-dark-700'
              }`}
            >
              <span className="mr-2">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        {/* Spacer */}
        <div className="flex-1" />

        {/* User Section */}
        <div className="p-4 border-t border-white/10">
          {user && (
            <div className="mb-4">
              <p className="text-xs text-gray-400 mb-1">Logged in as</p>
              <p className="text-sm font-semibold text-white truncate">{user.name}</p>
            </div>
          )}
          <Button
            onClick={() => {
              logout();
              onClose();
            }}
            className="w-full flex items-center justify-center gap-2 bg-neon-pink/20 hover:bg-neon-pink/30 text-neon-pink py-2 rounded-lg transition-colors font-medium"
          >
            <LogOut size={18} />
            Logout
          </Button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
