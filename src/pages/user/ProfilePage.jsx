import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { profileAPI } from '../../api/profileAPI';
import { useAuth } from '../../hooks/useAuth';
import { ROUTES } from '../../config/routes';

const TABS = {
  PERSONAL: 'personal',
  ADDRESS: 'address',
  LOCATION: 'location',
  SECURITY: 'security',
  DANGER: 'danger'
};

export default function ProfilePage() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  
  const [activeTab, setActiveTab] = useState(TABS.PERSONAL);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      const res = await profileAPI.getProfileInfo();
      if (res.data?.success) {
        setProfile(res.data.data);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to load profile data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const tabs = [
    { id: TABS.PERSONAL, label: 'Personal Information' },
    { id: TABS.ADDRESS, label: 'Address Book' },
    { id: TABS.LOCATION, label: 'Location Settings' },
    { id: TABS.SECURITY, label: 'Security' },
    { id: TABS.DANGER, label: 'Danger Zone', isDanger: true }
  ];

  if (loading) {
    return (
      <div className="w-full min-h-[calc(100vh-96px)] bg-[#05070C] flex justify-center items-center">
        <div className="text-[#2BE3FF] text-sm font-semibold font-['Inter'] animate-pulse">
          Loading Profile...
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-[calc(100vh-96px)] bg-[#05070C] py-12 px-6 md:px-12 flex justify-center">
      <div className="w-full max-w-[1100px] flex flex-col md:flex-row gap-8 items-start">
        
        {/* Sidebar Navigation */}
        <div className="w-full md:w-64 flex flex-col gap-2 shrink-0">
          <div className="mb-4 px-4">
            <h2 className="text-[#F5F9FF] text-2xl font-black font-['Familjen_Grotesk']">Settings</h2>
          </div>
          <div className="flex flex-row md:flex-col gap-2 overflow-x-auto scrollbar-hide pb-2 md:pb-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold font-['Inter'] transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? tab.isDanger
                      ? 'bg-red-500/10 text-red-500 outline outline-1 outline-red-500/50'
                      : 'bg-[#2BE3FF]/10 text-[#2BE3FF] outline outline-1 outline-[#2BE3FF]/50'
                    : 'text-[#8EA0BD] hover:bg-[#101A2C] hover:text-[#F5F9FF]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Panel */}
        <div className="flex-1 w-full bg-[#0A0F19] rounded-[24px] outline outline-1 outline-offset-[-1px] outline-[#1C2A40] p-6 md:p-10">
          {activeTab === TABS.PERSONAL && <PersonalInfo profile={profile} onUpdate={fetchProfile} />}
          {activeTab === TABS.ADDRESS && <AddressInfo profile={profile} onUpdate={fetchProfile} />}
          {activeTab === TABS.LOCATION && <LocationInfo profile={profile} onUpdate={fetchProfile} />}
          {activeTab === TABS.SECURITY && <SecurityInfo />}
          {activeTab === TABS.DANGER && <DangerZone profile={profile} logout={logout} navigate={navigate} />}
        </div>
      </div>
    </div>
  );
}

/* =========================================
   Tab Components
========================================= */

function PersonalInfo({ profile, onUpdate }) {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    defaultValues: {
      name: profile?.name || '',
      phone: profile?.phone || '',
    }
  });

  const onSubmit = async (data) => {
    try {
      const res = await profileAPI.updateProfile(data);
      if (res.data?.success) {
        toast.success(res.data.message || "Profile updated successfully.");
        onUpdate();
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update profile");
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-5 pb-6 border-b border-[#1C2A40]">
        <img 
          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(profile?.name || 'U')}&background=1C2A40&color=2BE3FF`} 
          alt="Avatar" 
          className="w-16 h-16 rounded-full border-2 border-[#2BE3FF] object-cover"
        />
        <div>
          <h3 className="text-[#F5F9FF] text-xl font-bold font-['Inter']">Personal Information</h3>
          <p className="text-[#8EA0BD] text-xs font-['Inter'] mt-1">Manage your basic profile details.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-[#F5F9FF] text-xs font-semibold font-['Inter']">Full Name</label>
            <input 
              {...register('name', { required: 'Name is required' })} 
              className={`w-full px-4 py-3 bg-[#05070C] text-[#F5F9FF] text-sm rounded-[10px] outline outline-1 outline-offset-[-1px] focus:outline-[#2BE3FF] transition-colors ${errors.name ? 'outline-red-500' : 'outline-[#1C2A40]'}`} 
            />
            {errors.name && <span className="text-red-400 text-xs">{errors.name.message}</span>}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[#F5F9FF] text-xs font-semibold font-['Inter']">Phone Number</label>
            <input 
              {...register('phone')} 
              placeholder="+61 400 000 000" 
              className="w-full px-4 py-3 bg-[#05070C] text-[#F5F9FF] placeholder-[#8EA0BD] text-sm rounded-[10px] outline outline-1 outline-offset-[-1px] outline-[#1C2A40] focus:outline-[#2BE3FF] transition-colors" 
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[#F5F9FF] text-xs font-semibold font-['Inter'] flex items-center justify-between">
              Email Address <span className="text-[#8EA0BD] text-[10px] uppercase tracking-wider">Read Only</span>
            </label>
            <input disabled value={profile?.email || ''} className="w-full px-4 py-3 bg-[#05070C] text-[#8EA0BD] text-sm rounded-[10px] outline outline-1 outline-offset-[-1px] outline-[#1C2A40] opacity-60 cursor-not-allowed" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[#F5F9FF] text-xs font-semibold font-['Inter'] flex items-center justify-between">
              Account Role <span className="text-[#8EA0BD] text-[10px] uppercase tracking-wider">Read Only</span>
            </label>
            <input disabled value={profile?.role || 'User'} className="w-full px-4 py-3 bg-[#05070C] text-[#8EA0BD] text-sm rounded-[10px] outline outline-1 outline-offset-[-1px] outline-[#1C2A40] opacity-60 cursor-not-allowed capitalize" />
          </div>
        </div>

        <button type="submit" disabled={isSubmitting} className="mt-4 self-end px-8 py-3 bg-[#2BE3FF] hover:bg-[#2BE3FF]/80 text-[#05070C] text-sm font-semibold font-['Inter'] rounded-[100px] transition-colors disabled:opacity-50">
          {isSubmitting ? 'Saving...' : 'Save Changes'}
        </button>
      </form>
    </div>
  );
}

function AddressInfo({ profile, onUpdate }) {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    defaultValues: {
      address: profile?.address || '',
      city: profile?.city || '',
      zip: profile?.zip || ''
    }
  });

  const onSubmit = async (data) => {
    try {
      const res = await profileAPI.changeAddress(data.address, data.city, data.zip);
      if (res.data?.success) {
        toast.success(res.data.message || "Address updated successfully.");
        onUpdate();
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update address");
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="pb-6 border-b border-[#1C2A40]">
        <h3 className="text-[#F5F9FF] text-xl font-bold font-['Inter']">Address Book</h3>
        <p className="text-[#8EA0BD] text-xs font-['Inter'] mt-1">Update your primary shipping address for orders.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-[#F5F9FF] text-xs font-semibold font-['Inter']">Street Address</label>
          <input {...register('address', { required: 'Address is required' })} placeholder="123 Example Street" className={`w-full px-4 py-3 bg-[#05070C] text-[#F5F9FF] placeholder-[#8EA0BD] text-sm rounded-[10px] outline outline-1 outline-offset-[-1px] focus:outline-[#2BE3FF] transition-colors ${errors.address ? 'outline-red-500' : 'outline-[#1C2A40]'}`} />
          {errors.address && <span className="text-red-400 text-xs">{errors.address.message}</span>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-[#F5F9FF] text-xs font-semibold font-['Inter']">City</label>
            <input {...register('city', { required: 'City is required' })} placeholder="Melbourne" className={`w-full px-4 py-3 bg-[#05070C] text-[#F5F9FF] placeholder-[#8EA0BD] text-sm rounded-[10px] outline outline-1 outline-offset-[-1px] focus:outline-[#2BE3FF] transition-colors ${errors.city ? 'outline-red-500' : 'outline-[#1C2A40]'}`} />
            {errors.city && <span className="text-red-400 text-xs">{errors.city.message}</span>}
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[#F5F9FF] text-xs font-semibold font-['Inter']">Postal / Zip Code</label>
            <input {...register('zip', { required: 'Zip code is required' })} placeholder="3000" className={`w-full px-4 py-3 bg-[#05070C] text-[#F5F9FF] placeholder-[#8EA0BD] text-sm rounded-[10px] outline outline-1 outline-offset-[-1px] focus:outline-[#2BE3FF] transition-colors ${errors.zip ? 'outline-red-500' : 'outline-[#1C2A40]'}`} />
            {errors.zip && <span className="text-red-400 text-xs">{errors.zip.message}</span>}
          </div>
        </div>

        <button type="submit" disabled={isSubmitting} className="mt-4 self-end px-8 py-3 bg-[#2BE3FF] hover:bg-[#2BE3FF]/80 text-[#05070C] text-sm font-semibold font-['Inter'] rounded-[100px] transition-colors disabled:opacity-50">
          {isSubmitting ? 'Saving...' : 'Save Address'}
        </button>
      </form>
    </div>
  );
}

function LocationInfo({ profile, onUpdate }) {
  const { register, handleSubmit, formState: { errors, isSubmitting }, setError } = useForm({
    defaultValues: {
      latitude: '',
      longitude: ''
    }
  });

  const onSubmit = async (data) => {
    try {
      const res = await profileAPI.updateLocation(data.latitude, data.longitude);
      toast.success(res.data?.message || "Location updated successfully.");
      onUpdate();
    } catch (error) {
      const errRes = error.response?.data;
      // Handle the specific API validation errors mapping
      if (error.response?.status === 422 && errRes?.errors) {
        if (errRes.errors.user_latitude) {
          setError('latitude', { message: errRes.errors.user_latitude[0] });
        }
        if (errRes.errors.user_longitude) {
          setError('longitude', { message: errRes.errors.user_longitude[0] });
        }
      } else {
        toast.error(errRes?.message || "Failed to update location.");
      }
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="pb-6 border-b border-[#1C2A40]">
        <h3 className="text-[#F5F9FF] text-xl font-bold font-['Inter']">Location Coordinates</h3>
        <p className="text-[#8EA0BD] text-xs font-['Inter'] mt-1">Set specific map coordinates for installation services.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-[#F5F9FF] text-xs font-semibold font-['Inter']">Latitude</label>
          <input type="text" {...register('latitude', { required: 'Latitude is required' })} placeholder="e.g. -37.8136" className={`w-full px-4 py-3 bg-[#05070C] text-[#F5F9FF] placeholder-[#8EA0BD] text-sm rounded-[10px] outline outline-1 outline-offset-[-1px] focus:outline-[#2BE3FF] transition-colors ${errors.latitude ? 'outline-red-500' : 'outline-[#1C2A40]'}`} />
          {errors.latitude && <span className="text-red-400 text-xs">{errors.latitude.message}</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[#F5F9FF] text-xs font-semibold font-['Inter']">Longitude</label>
          <input type="text" {...register('longitude', { required: 'Longitude is required' })} placeholder="e.g. 144.9631" className={`w-full px-4 py-3 bg-[#05070C] text-[#F5F9FF] placeholder-[#8EA0BD] text-sm rounded-[10px] outline outline-1 outline-offset-[-1px] focus:outline-[#2BE3FF] transition-colors ${errors.longitude ? 'outline-red-500' : 'outline-[#1C2A40]'}`} />
          {errors.longitude && <span className="text-red-400 text-xs">{errors.longitude.message}</span>}
        </div>
        
        <div className="md:col-span-2 flex justify-end mt-4">
          <button type="submit" disabled={isSubmitting} className="px-8 py-3 bg-[#2BE3FF] hover:bg-[#2BE3FF]/80 text-[#05070C] text-sm font-semibold font-['Inter'] rounded-[100px] transition-colors disabled:opacity-50">
            {isSubmitting ? 'Saving...' : 'Update Coordinates'}
          </button>
        </div>
      </form>
    </div>
  );
}

function SecurityInfo() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, watch, reset } = useForm();
  const newPassword = watch('new_password');

  const onSubmit = async (data) => {
    try {
      const res = await profileAPI.changePassword(data.old_password, data.new_password, data.new_password_confirmation);
      if (res.data?.success) {
        toast.success(res.data.message || "Password updated successfully.");
        reset();
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update password.");
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="pb-6 border-b border-[#1C2A40]">
        <h3 className="text-[#F5F9FF] text-xl font-bold font-['Inter']">Security Settings</h3>
        <p className="text-[#8EA0BD] text-xs font-['Inter'] mt-1">Update your password to keep your account secure.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 max-w-lg">
        <div className="flex flex-col gap-2">
          <label className="text-[#F5F9FF] text-xs font-semibold font-['Inter']">Current Password</label>
          <input type="password" placeholder="••••••••" {...register('old_password', { required: 'Current password is required' })} className={`w-full px-4 py-3 bg-[#05070C] text-[#F5F9FF] text-sm rounded-[10px] outline outline-1 outline-offset-[-1px] focus:outline-[#2BE3FF] transition-colors ${errors.old_password ? 'outline-red-500' : 'outline-[#1C2A40]'}`} />
          {errors.old_password && <span className="text-red-400 text-xs">{errors.old_password.message}</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[#F5F9FF] text-xs font-semibold font-['Inter']">New Password</label>
          <input type="password" placeholder="Minimum 8 characters" {...register('new_password', { required: 'New password is required', minLength: { value: 8, message: 'Must be at least 8 characters' } })} className={`w-full px-4 py-3 bg-[#05070C] text-[#F5F9FF] text-sm rounded-[10px] outline outline-1 outline-offset-[-1px] focus:outline-[#2BE3FF] transition-colors ${errors.new_password ? 'outline-red-500' : 'outline-[#1C2A40]'}`} />
          {errors.new_password && <span className="text-red-400 text-xs">{errors.new_password.message}</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[#F5F9FF] text-xs font-semibold font-['Inter']">Confirm New Password</label>
          <input type="password" placeholder="Repeat new password" {...register('new_password_confirmation', { required: 'Please confirm password', validate: val => val === newPassword || 'Passwords do not match' })} className={`w-full px-4 py-3 bg-[#05070C] text-[#F5F9FF] text-sm rounded-[10px] outline outline-1 outline-offset-[-1px] focus:outline-[#2BE3FF] transition-colors ${errors.new_password_confirmation ? 'outline-red-500' : 'outline-[#1C2A40]'}`} />
          {errors.new_password_confirmation && <span className="text-red-400 text-xs">{errors.new_password_confirmation.message}</span>}
        </div>
        
        <button type="submit" disabled={isSubmitting} className="mt-4 px-8 py-3 bg-[#2BE3FF] hover:bg-[#2BE3FF]/80 text-[#05070C] text-sm font-semibold font-['Inter'] rounded-[100px] transition-colors disabled:opacity-50">
          {isSubmitting ? 'Updating...' : 'Update Password'}
        </button>
      </form>
    </div>
  );
}

function DangerZone({ profile, logout, navigate }) {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    defaultValues: { email: profile?.email || '' }
  });

  const onSubmit = async (data) => {
    try {
      const res = await profileAPI.deleteAccount(data.email, data.password);
      if (res.data?.success) {
        toast.success(res.data.message || "Account permanently deleted.");
        await logout();
        navigate(ROUTES.HOME, { replace: true });
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete account. Please verify credentials.");
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="pb-6 border-b border-[#1C2A40]">
        <h3 className="text-red-500 text-xl font-bold font-['Inter']">Danger Zone</h3>
        <p className="text-[#8EA0BD] text-xs font-['Inter'] mt-1">
          Permanently delete your account. This action cannot be undone. All warranties, orders, and data will be lost.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 max-w-lg">
        <div className="flex flex-col gap-2">
          <label className="text-[#F5F9FF] text-xs font-semibold font-['Inter']">Confirm Email</label>
          <input type="email" {...register('email', { required: 'Email is required' })} className={`w-full px-4 py-3 bg-[#05070C] text-[#F5F9FF] text-sm rounded-[10px] outline outline-1 outline-offset-[-1px] focus:outline-red-500 transition-colors ${errors.email ? 'outline-red-500' : 'outline-[#1C2A40]'}`} />
          {errors.email && <span className="text-red-400 text-xs">{errors.email.message}</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[#F5F9FF] text-xs font-semibold font-['Inter']">Confirm Password</label>
          <input type="password" placeholder="Enter password to confirm" {...register('password', { required: 'Password is required' })} className={`w-full px-4 py-3 bg-[#05070C] text-[#F5F9FF] text-sm rounded-[10px] outline outline-1 outline-offset-[-1px] focus:outline-red-500 transition-colors ${errors.password ? 'outline-red-500' : 'outline-[#1C2A40]'}`} />
          {errors.password && <span className="text-red-400 text-xs">{errors.password.message}</span>}
        </div>
        
        <button type="submit" disabled={isSubmitting} className="mt-4 px-8 py-3 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white outline outline-1 outline-red-500 text-sm font-semibold font-['Inter'] rounded-[100px] transition-colors disabled:opacity-50">
          {isSubmitting ? 'Deleting...' : 'Permanently Delete Account'}
        </button>
      </form>
    </div>
  );
}
