import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { contactAPI } from '../../api/contactAPI';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Mapping the 3 UI fields to the API requirements. 
      // Defaulting uncollected fields to gracefully handle the API contract.
      const payload = {
        name: data.name,
        surname: data.surname, 
        email: data.email,
        nation: data.nation,
        activity: data.activity,
        telephone: data.telephone,
        message: data.message,
      };

      await contactAPI.sendMessage(payload);
      toast.success('Message sent successfully! We will get back to you soon.');
      reset();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full min-h-[calc(100vh-96px)] bg-[#05070C] flex justify-center !pt-24 !pb-20 !px-6 md:!px-20">
      <div className="w-full max-w-[1440px] flex flex-col lg:flex-row justify-between items-start gap-16">
        
        {/* Left Column: Text & Info */}
        <div className="flex-1 flex flex-col justify-start items-start gap-6">
          <div className="text-[#2BE3FF] text-xs font-semibold font-['Inter'] tracking-wider uppercase">
            GET IN TOUCH
          </div>
          <h1 className="w-full max-w-[500px] text-[#F5F9FF] text-4xl font-black font-['Inter'] leading-tight">
            Questions About Our EV Charging Cables?
          </h1>
          <p className="w-full max-w-[480px] text-[#8EA0BD] text-base font-normal font-['Inter'] leading-relaxed">
            Whether you need help choosing between our 5m and 8m Type 2 charging cables, have a question about installation, or need support after your purchase — our team is here to help. We typically respond within one business day.
          </p>
          
          <div className="!pt-4 flex flex-col justify-start items-start gap-4">
            <div className="inline-flex justify-start items-center gap-2.5">
              <span className="text-[#2BE3FF] text-sm font-semibold font-['Inter']">Email:</span>
              <a href="mailto:support@evsystems.com.au" className="text-[#8EA0BD] text-sm font-normal font-['Inter'] hover:text-[#2BE3FF] transition-colors">
                support@evsystems.com.au
              </a>
            </div>
            <div className="inline-flex justify-start items-center gap-2.5">
              <span className="text-[#2BE3FF] text-sm font-semibold font-['Inter']">Phone:</span>
              <a href="tel:1300000000" className="text-[#8EA0BD] text-sm font-normal font-['Inter'] hover:text-[#2BE3FF] transition-colors">
                1300 000 000
              </a>
            </div>
            <div className="inline-flex justify-start items-center gap-2.5">
              <span className="text-[#2BE3FF] text-sm font-semibold font-['Inter']">Location:</span>
              <span className="text-[#8EA0BD] text-sm font-normal font-['Inter']">
                Australia
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Form Card */}
        <div className="w-full lg:w-[540px] !p-9 bg-[#0A0F19] rounded-[20px] outline outline-1 outline-offset-[-1px] outline-[#1C2A40] flex flex-col gap-6">
          <h2 className="text-[#F5F9FF] text-xl font-black font-['Inter']">
            Send Us a Message
          </h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-[#F5F9FF] text-xs font-semibold font-['Inter']">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="John"
                  className={`w-full !px-4 !py-3 bg-[#05070C] text-[#F5F9FF] placeholder-[#8EA0BD] text-sm font-normal font-['Inter'] rounded-[10px] outline outline-1 outline-offset-[-1px] transition-colors focus:outline-[#2BE3FF] ${errors.name ? 'outline-red-500' : 'outline-[#1C2A40]'}`}
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="surname" className="text-[#F5F9FF] text-xs font-semibold font-['Inter']">
                  Surname
                </label>
                <input
                  id="surname"
                  type="text"
                  placeholder="Doe"
                  className={`w-full !px-4 !py-3 bg-[#05070C] text-[#F5F9FF] placeholder-[#8EA0BD] text-sm font-normal font-['Inter'] rounded-[10px] outline outline-1 outline-offset-[-1px] transition-colors focus:outline-[#2BE3FF] ${errors.surname ? 'outline-red-500' : 'outline-[#1C2A40]'}`}
                  {...register('surname', { required: 'Surname is required' })}
                />
                {errors.surname && <span className="text-red-500 text-xs">{errors.surname.message}</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[#F5F9FF] text-xs font-semibold font-['Inter']">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className={`w-full !px-4 !py-3 bg-[#05070C] text-[#F5F9FF] placeholder-[#8EA0BD] text-sm font-normal font-['Inter'] rounded-[10px] outline outline-1 outline-offset-[-1px] transition-colors focus:outline-[#2BE3FF] ${errors.email ? 'outline-red-500' : 'outline-[#1C2A40]'}`}
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                  })}
                />
                {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="telephone" className="text-[#F5F9FF] text-xs font-semibold font-['Inter']">
                  Telephone
                </label>
                <input
                  id="telephone"
                  type="tel"
                  placeholder="+8801700000000"
                  className={`w-full !px-4 !py-3 bg-[#05070C] text-[#F5F9FF] placeholder-[#8EA0BD] text-sm font-normal font-['Inter'] rounded-[10px] outline outline-1 outline-offset-[-1px] transition-colors focus:outline-[#2BE3FF] ${errors.telephone ? 'outline-red-500' : 'outline-[#1C2A40]'}`}
                  {...register('telephone', { required: 'Telephone is required' })}
                />
                {errors.telephone && <span className="text-red-500 text-xs">{errors.telephone.message}</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="nation" className="text-[#F5F9FF] text-xs font-semibold font-['Inter']">
                  Nation
                </label>
                <input
                  id="nation"
                  type="text"
                  placeholder="e.g. Bangladesh"
                  className={`w-full !px-4 !py-3 bg-[#05070C] text-[#F5F9FF] placeholder-[#8EA0BD] text-sm font-normal font-['Inter'] rounded-[10px] outline outline-1 outline-offset-[-1px] transition-colors focus:outline-[#2BE3FF] ${errors.nation ? 'outline-red-500' : 'outline-[#1C2A40]'}`}
                  {...register('nation', { required: 'Nation is required' })}
                />
                {errors.nation && <span className="text-red-500 text-xs">{errors.nation.message}</span>}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="activity" className="text-[#F5F9FF] text-xs font-semibold font-['Inter']">
                  Activity
                </label>
                <input
                  id="activity"
                  type="text"
                  placeholder="e.g. Business"
                  className={`w-full !px-4 !py-3 bg-[#05070C] text-[#F5F9FF] placeholder-[#8EA0BD] text-sm font-normal font-['Inter'] rounded-[10px] outline outline-1 outline-offset-[-1px] transition-colors focus:outline-[#2BE3FF] ${errors.activity ? 'outline-red-500' : 'outline-[#1C2A40]'}`}
                  {...register('activity', { required: 'Activity is required' })}
                />
                {errors.activity && <span className="text-red-500 text-xs">{errors.activity.message}</span>}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-[#F5F9FF] text-xs font-semibold font-['Inter']">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Hello, I am interested in your products."
                rows="4"
                className={`w-full !px-4 !py-3 bg-[#05070C] text-[#F5F9FF] placeholder-[#8EA0BD] text-sm font-normal font-['Inter'] rounded-[10px] outline outline-1 outline-offset-[-1px] transition-colors focus:outline-[#2BE3FF] resize-none ${errors.message ? 'outline-red-500' : 'outline-[#1C2A40]'}`}
                {...register('message', { required: 'Message is required' })}
              />
              {errors.message && <span className="text-red-500 text-xs">{errors.message.message}</span>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full !mt-2 !py-3.5 bg-[#2BE3FF] hover:bg-[#2BE3FF]/80 disabled:opacity-50 disabled:cursor-not-allowed rounded-[100px] flex justify-center items-center transition-colors"
            >
              <span className="text-[#05070C] text-base font-semibold font-['Inter']">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </span>
            </button>
          </form>
        </div>
        
      </div>
    </div>
  );
}
