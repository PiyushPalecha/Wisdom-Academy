import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { X, Loader2, Mail, Lock, User } from 'lucide-react';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';

export default function AuthModal({ isOpen, mode, onClose, onChangeMode }) {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();
  
  useEffect(() => {
    if (!isOpen) {
      reset();
    }
  }, [isOpen, reset, mode]);

  const onSubmit = async (data) => {
    // Simulate API request delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    if (mode === 'login') {
      toast.success('Successfully logged in to Wisdom Academy!');
    } else {
      toast.success('Account created! Welcome to Wisdom Academy!');
    }
    
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-blue-950/40 backdrop-blur-sm"
            onClick={!isSubmitting ? onClose : undefined}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="px-8 pt-8 pb-6 text-center relative z-10">
              <button 
                onClick={!isSubmitting ? onClose : undefined}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>
              <h2 className="text-3xl font-extrabold text-blue-950 mb-2">
                {mode === 'login' ? 'Welcome Back!' : 'Join Us Today'}
              </h2>
              <p className="text-gray-500 font-medium text-sm">
                {mode === 'login' 
                  ? 'Enter your credentials to access your courses.' 
                  : 'Start your journey of innovative learning.'}
              </p>
            </div>

            {/* Form */}
            <div className="px-8 pb-8 relative z-10">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {mode === 'signup' && (
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      {...register('name', { required: 'Name is required' })}
                      type="text"
                      disabled={isSubmitting}
                      className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#7D52F4]/50 focus:border-[#7D52F4] outline-none transition-all placeholder:text-gray-400 font-medium"
                      placeholder="Full Name"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1 absolute -bottom-5 left-2">{errors.name.message}</p>}
                  </div>
                )}

                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                    })}
                    type="email"
                    disabled={isSubmitting}
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#7D52F4]/50 focus:border-[#7D52F4] outline-none transition-all placeholder:text-gray-400 font-medium"
                    placeholder="Email Address"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1 absolute -bottom-5 left-2">{errors.email.message}</p>}
                </div>

                <div className="relative !mb-6">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Must be at least 6 characters'} })}
                    type="password"
                    disabled={isSubmitting}
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#7D52F4]/50 focus:border-[#7D52F4] outline-none transition-all placeholder:text-gray-400 font-medium"
                    placeholder="Password"
                  />
                  {errors.password && <p className="text-red-500 text-xs mt-1 absolute -bottom-5 left-2">{errors.password.message}</p>}
                </div>

                {mode === 'login' && (
                  <div className="flex justify-end pt-1">
                    <button type="button" className="text-sm font-bold text-[#7D52F4] hover:text-[#6c43d9] transition-colors">
                      Forgot Password?
                    </button>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#7D52F4] hover:bg-[#6c43d9] text-white py-3.5 rounded-xl font-bold shadow-lg shadow-[#7D52F4]/30 transition-all flex items-center justify-center gap-2 mt-2 group"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    mode === 'login' ? 'Sign In' : 'Create Account'
                  )}
                </button>
              </form>

              <div className="mt-8 text-center text-sm font-medium text-gray-500">
                {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
                <button
                  type="button"
                  onClick={() => onChangeMode(mode === 'login' ? 'signup' : 'login')}
                  disabled={isSubmitting}
                  className="text-[#7D52F4] font-bold hover:text-[#6c43d9] transition-colors disabled:opacity-50"
                >
                  {mode === 'login' ? 'Sign Up' : 'Log In'}
                </button>
              </div>
            </div>

            {/* Decorative Background blob */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none -z-10" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

AuthModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  mode: PropTypes.oneOf(['login', 'signup']),
  onClose: PropTypes.func.isRequired,
  onChangeMode: PropTypes.func.isRequired,
};
