import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SignupForm from '../components/auth/SignupForm';
import useAuthStore from '../store/authStore';

const Signup = () => {
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
          <h1 className="text-4xl font-bold bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent mb-2">
            VIPCHAT
          </h1>
          <p className="text-gray-400">Join thousands of happy users</p>
        </div>

        {/* Form Card */}
        <div className="glass rounded-2xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-white mb-6">Create Account</h2>
          <SignupForm onSuccess={() => navigate('/chat')} />
        </div>

        {/* Login Link */}
        <div className="text-center">
          <p className="text-gray-400 mb-4">Already have an account?</p>
          <Link
            to="/login"
            className="inline-flex items-center gap-2 text-neon-blue hover:text-neon-blue/80 font-semibold transition-colors group"
          >
            Sign In
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
