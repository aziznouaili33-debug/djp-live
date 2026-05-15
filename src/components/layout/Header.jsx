import React from 'react';
import { Menu, Bell, Search } from 'lucide-react';
import Button from '../common/Button';

const Header = ({ title, onMenuClick, showSearch = false }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <div className="glass border-b border-white/10 p-4 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <Button
          onClick={onMenuClick}
          className="md:hidden p-2 hover:bg-dark-700 rounded-lg transition-colors"
        >
          <Menu size={24} />
        </Button>
        <h1 className="text-xl font-bold text-white">{title}</h1>
      </div>

      <div className="flex items-center gap-3 flex-1 md:flex-none max-w-xs">
        {showSearch && (
          <div className="hidden md:flex relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-dark-700 text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-neon-purple text-sm"
            />
          </div>
        )}
        <Button className="p-2 hover:bg-dark-700 rounded-lg transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-neon-pink rounded-full" />
        </Button>
      </div>
    </div>
  );
};

export default Header;
