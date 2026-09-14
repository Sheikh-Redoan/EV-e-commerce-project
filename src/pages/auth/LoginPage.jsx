import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../hooks/useAuth';
import { ROUTES } from '../../config/routes';

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, loading, error, isAuthenticated, clearError } = useAuth();
  
  const from = location.state?.from?.pathname || ROUTES.DASHBOARD;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
    return () => clearError();
  }, [isAuthenticated, navigate, from, clearError]);

  const onSubmit = async (data) => {
    const result = await login(data);
    if (!result.error) {
      toast.success('Welcome back!');
      navigate(from, { replace: true });
    } else {
      toast.error(result.payload || 'Login failed');
    }
  };

  return (
    <div className="w-full min-h-[calc(100vh-96px)] bg-[#05070C] flex justify-center items-center !py-20 !px-6">
      <div className="w-full max-w-[460px] !p-8 md:p-10 bg-[#0A0F19] rounded-[24px] outline outline-1 outline-offset-[-1px] outline-[#1C2A40] flex flex-col gap-6">
        
        <div className="flex flex-col gap-2 text-center">
          <span className="text-[#2BE3FF] text-xs font-semibold font-['Inter'] tracking-wider uppercase">
            ACCOUNT ACCESS
          </span>
          <h1 className="text-[#F5F9FF] text-3xl font-black font-['Familjen_Grotesk'] tracking-tight">
            Sign In to EV Systems
          </h1>
          <p className="text-[#8EA0BD] text-sm font-normal font-['Inter']">
            Manage your orders, warranties, and charging accessories.
          </p>
        </div>

        {error && (
          <div className="!p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-xs text-center font-['Inter']">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[#F5F9FF] text-xs font-semibold font-['Inter']">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className={`w-full !px-4 !py-3 bg-[#05070C] text-[#F5F9FF] placeholder-[#8EA0BD] text-sm rounded-[10px] outline outline-1 outline-offset-[-1px] transition-colors focus:outline-[#2BE3FF] ${
                errors.email ? 'outline-red-500' : 'outline-[#1C2A40]'
              }`}
              {...register('email', {
                required: 'Email is required',
                pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
              })}
            />
            {errors.email && (
              <span className="text-red-400 text-xs">{errors.email.message}</span>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center">
              <label className="text-[#F5F9FF] text-xs font-semibold font-['Inter']">
                Password
              </label>
              
            </div>
            <input
              type="password"
              placeholder="••••••••"
              className={`w-full !px-4 !py-3 bg-[#05070C] text-[#F5F9FF] placeholder-[#8EA0BD] text-sm rounded-[10px] outline outline-1 outline-offset-[-1px] transition-colors focus:outline-[#2BE3FF] ${
                errors.password ? 'outline-red-500' : 'outline-[#1C2A40]'
              }`}
              {...register('password', {
                required: 'Password is required'
              })}
            />
            {errors.password && (
              <span className="text-red-400 text-xs">{errors.password.message}</span>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full !mt-2 !py-3.5 bg-[#2BE3FF] hover:bg-[#2BE3FF]/80 disabled:opacity-50 disabled:cursor-not-allowed rounded-[100px] flex justify-center items-center transition-colors shadow-lg shadow-[#2BE3FF]/10"
          >
            <span className="text-[#05070C] text-sm font-bold font-['Inter']">
              {loading ? 'Authenticating...' : 'Sign In'}
            </span>
          </button>
        </form>

        <div className="text-center text-xs text-[#8EA0BD] font-normal font-['Inter']">
          Don't have an account?{' '}
          <Link to={ROUTES.REGISTER} className="text-[#2BE3FF] font-semibold hover:underline">
            Register now
          </Link>
        </div>
      </div>
    </div>
  );
}
