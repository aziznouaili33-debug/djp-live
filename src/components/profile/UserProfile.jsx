import React from 'react';
import { Mail, MapPin, Calendar, Pen } from 'lucide-react';
import Avatar from '../common/Avatar';
import Button from '../common/Button';
import useAuthStore from '../../store/authStore';
import { formatDate } from '../../utils/formatting';

const UserProfile = () => {
  const { user } = useAuthStore();
  const [isEditing, setIsEditing] = React.useState(false);

  if (!user) {
    return <div className="text-gray-400">No user data</div>;
  }

  return (
    <div className="p-4 md:p-6 max-w-2xl mx-auto">
      {/* Profile Header */}
      <div className="glass rounded-xl p-6 md:p-8 text-center">
        <div className="flex justify-center mb-4">
          <Avatar src={user.avatar} name={user.name} size="lg" />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
          {user.name}
        </h1>
        <p className="text-neon-purple font-medium mb-4">{user.email}</p>
        <p className="text-gray-300 mb-6">{user.bio}</p>

        <Button
          onClick={() => setIsEditing(!isEditing)}
          className="inline-flex items-center gap-2 bg-neon-purple hover:bg-neon-purple/80 text-white px-6 py-2 rounded-lg transition-colors"
        >
          <Pen size={18} />
          Edit Profile
        </Button>
      </div>

      {/* User Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="glass rounded-xl p-4 flex items-center gap-3">
          <Mail className="text-neon-purple" size={24} />
          <div>
            <p className="text-xs text-gray-400">Email</p>
            <p className="text-white font-medium">{user.email}</p>
          </div>
        </div>

        <div className="glass rounded-xl p-4 flex items-center gap-3">
          <Calendar className="text-neon-blue" size={24} />
          <div>
            <p className="text-xs text-gray-400">Joined</p>
            <p className="text-white font-medium">{formatDate(new Date())}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
