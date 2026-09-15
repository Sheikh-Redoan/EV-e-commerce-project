import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../hooks/useAuth';
import { ROUTES } from '../../config/routes';

export default function RegisterPage() {
  const navigate = useNavigate();
  const { register: registerAction, loading, error, isAuthenticated, clearError } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch('password');

  useEffect(() => {
    if (isAuthenticated) {
      navigate(ROUTES.PROFILE, { replace: true });
    }
    return () => clearError();
  }, [isAuthenticated, navigate, clearError]);

  const onSubmit = async (data) => {
    const payload = {
      name: data.name,
      email: data.email,
      password: data.password,
      password_confirmation: data.password_confirmation,
    };

    const result = await registerAction(payload);
    if (!result.error) {
      toast.success('Registration successful! Welcome aboard.');
      navigate(ROUTES.PROFILE, { replace: true });
    } else {
      toast.error(result.payload || 'Registration failed');
    }
  };

  return (
    <div className="w-full min-h-[calc(100vh-96px)] bg-[#05070C] flex justify-center items-center !py-20 !px-6">
      <div className="w-full max-w-[480px] !p-8 md:!p-10 bg-[#0A0F19] rounded-[24px] outline outline-1 outline-offset-[-1px] outline-[#1C2A40] flex flex-col gap-6">
        
        <div className="flex flex-col gap-2 text-center">
          <span className="text-[#2BE3FF] text-xs font-semibold font-['Inter'] tracking-wider uppercase">
            JOIN EV SYSTEMS
          </span>
          <h1 className="text-[#F5F9FF] text-3xl font-black font-['Familjen_Grotesk'] tracking-tight">
            Create an Account
          </h1>
          <p className="text-[#8EA0BD] text-sm font-normal font-['Inter']">
            Track cable orders, access warranties, and checkout seamlessly.
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
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className={`w-full !px-4 !py-3 bg-[#05070C] text-[#F5F9FF] placeholder-[#8EA0BD] text-sm rounded-[10px] outline outline-1 outline-offset-[-1px] transition-colors focus:outline-[#2BE3FF] ${
                errors.name ? 'outline-red-500' : 'outline-[#1C2A40]'
              }`}
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && (
              <span className="text-red-400 text-xs">{errors.name.message}</span>
            )}
          </div>

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
                pattern: { value: /^\S+@\S+$/i, message: 'Invalid email format' }
              })}
            />
            {errors.email && (
              <span className="text-red-400 text-xs">{errors.email.message}</span>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[#F5F9FF] text-xs font-semibold font-['Inter']">
              Password
            </label>
            <input
              type="password"
              placeholder="Minimum 8 characters"
              className={`w-full !px-4 !py-3 bg-[#05070C] text-[#F5F9FF] placeholder-[#8EA0BD] text-sm rounded-[10px] outline outline-1 outline-offset-[-1px] transition-colors focus:outline-[#2BE3FF] ${
                errors.password ? 'outline-red-500' : 'outline-[#1C2A40]'
              }`}
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 8, message: 'Password must be at least 8 characters' }
              })}
            />
            {errors.password && (
              <span className="text-red-400 text-xs">{errors.password.message}</span>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[#F5F9FF] text-xs font-semibold font-['Inter']">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Repeat password"
              className={`w-full !px-4 !py-3 bg-[#05070C] text-[#F5F9FF] placeholder-[#8EA0BD] text-sm rounded-[10px] outline outline-1 outline-offset-[-1px] transition-colors focus:outline-[#2BE3FF] ${
                errors.password_confirmation ? 'outline-red-500' : 'outline-[#1C2A40]'
              }`}
              {...register('password_confirmation', {
                required: 'Please confirm your password',
                validate: (value) => value === password || 'Passwords do not match'
              })}
            />
            {errors.password_confirmation && (
              <span className="text-red-400 text-xs">{errors.password_confirmation.message}</span>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full !mt-2 !py-3.5 bg-[#2BE3FF] hover:bg-[#2BE3FF]/80 disabled:opacity-50 disabled:cursor-not-allowed rounded-[100px] flex justify-center items-center transition-colors shadow-lg shadow-[#2BE3FF]/10"
          >
            <span className="text-[#05070C] text-sm font-bold font-['Inter']">
              {loading ? 'Registering...' : 'Create Account'}
            </span>
          </button>
        </form>

        <div className="text-center text-xs text-[#8EA0BD] font-normal font-['Inter']">
          Already registered?{' '}
          <Link to={ROUTES.LOGIN} className="text-[#2BE3FF] font-semibold hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
