import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserProfile from '../components/profile/UserProfile';
import useAuthStore from '../store/authStore';

const Profile = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-2xl mx-auto animate-fade-in">
        <h1 className="text-3xl font-bold text-white mb-8">Profile</h1>
        <UserProfile />
      </div>
    </div>
  );
};

export default Profile;
