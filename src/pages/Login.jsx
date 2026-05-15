import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import LoginForm from '../components/auth/LoginForm';
import useAuthStore from '../store/authStore';

const Login = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/chat');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent mb-2">
            VIPCHAT
          </h1>
          <p className="text-gray-400">Welcome back to amazing conversations</p>
        </div>

        {/* Form Card */}
        <div className="glass rounded-2xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-white mb-6">Sign In</h2>
          <LoginForm onSuccess={() => navigate('/chat')} />
        </div>

        {/* Signup Link */}
        <div className="text-center">
          <p className="text-gray-400 mb-4">Don't have an account?</p>
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 text-neon-purple hover:text-neon-purple/80 font-semibold transition-colors group"
          >
            Create Account
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
