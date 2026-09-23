import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { paymentAPI } from '../../api/paymentAPI';

export default function CheckoutModal({ isOpen, onClose, product, selectedVariation }) {
  const [isProcessing, setIsProcessing] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (!isOpen) return null;

  const onSubmit = async (data) => {
    setIsProcessing(true);
    try {
      const payload = {
        product_id: product.product_id || product.id,
        product_variation_id: selectedVariation.id,
        quantity: 1, // Defaulting to 1 for direct "Buy Now"
        sub_total: parseFloat(selectedVariation.price),
        tax: 0.00,
        discount: 0.00,
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        country_region: data.country_region,
        address_line_one: data.address_line_one,
        sub_burb: data.sub_burb,
        state: data.state,
        post_code: data.post_code,
        notes: data.notes || "None",
      };

      const response = await paymentAPI.createPayPalPayment(payload);
      
      if (response.data?.status === 'success' && response.data?.paypal_url) {
        // Redirect user to the PayPal sandbox URL
        window.location.href = response.data.paypal_url;
      } else {
        toast.error("Failed to initiate PayPal checkout.");
        setIsProcessing(false);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Payment initialization failed.");
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex justify-center items-center bg-[#05070C]/80 backdrop-blur-sm p-4">
      <div className="w-full max-w-[640px] max-h-[90vh] overflow-y-auto bg-[#0A0F19] rounded-[24px] outline outline-1 outline-offset-[-1px] outline-[#1C2A40] p-6 md:p-10 shadow-2xl scrollbar-hide">
        
        <div className="flex justify-between items-center mb-6 border-b border-[#1C2A40] pb-4">
          <div>
            <h2 className="text-[#F5F9FF] text-2xl font-black font-['Familjen_Grotesk']">Checkout Details</h2>
            <p className="text-[#8EA0BD] text-xs font-normal font-['Inter'] mt-1">
              {product.product_title} ({selectedVariation.length}m) - ${selectedVariation.price} AUD
            </p>
          </div>
          <button onClick={onClose} className="text-[#8EA0BD] hover:text-[#F5F9FF] transition-colors text-2xl leading-none">
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-[#F5F9FF] text-xs font-semibold font-['Inter']">First Name</label>
              <input {...register('first_name', { required: 'First name is required' })} className={`w-full px-4 py-3 bg-[#05070C] text-[#F5F9FF] placeholder-[#8EA0BD] text-sm rounded-[10px] outline outline-1 outline-offset-[-1px] transition-colors focus:outline-[#2BE3FF] ${errors.first_name ? 'outline-red-500' : 'outline-[#1C2A40]'}`} />
              {errors.first_name && <span className="text-red-400 text-xs">{errors.first_name.message}</span>}
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[#F5F9FF] text-xs font-semibold font-['Inter']">Last Name</label>
              <input {...register('last_name', { required: 'Last name is required' })} className={`w-full px-4 py-3 bg-[#05070C] text-[#F5F9FF] placeholder-[#8EA0BD] text-sm rounded-[10px] outline outline-1 outline-offset-[-1px] transition-colors focus:outline-[#2BE3FF] ${errors.last_name ? 'outline-red-500' : 'outline-[#1C2A40]'}`} />
              {errors.last_name && <span className="text-red-400 text-xs">{errors.last_name.message}</span>}
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[#F5F9FF] text-xs font-semibold font-['Inter']">Email Address</label>
            <input type="email" {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })} className={`w-full px-4 py-3 bg-[#05070C] text-[#F5F9FF] placeholder-[#8EA0BD] text-sm rounded-[10px] outline outline-1 outline-offset-[-1px] transition-colors focus:outline-[#2BE3FF] ${errors.email ? 'outline-red-500' : 'outline-[#1C2A40]'}`} />
            {errors.email && <span className="text-red-400 text-xs">{errors.email.message}</span>}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[#F5F9FF] text-xs font-semibold font-['Inter']">Address Line 1</label>
            <input {...register('address_line_one', { required: 'Address is required' })} className={`w-full px-4 py-3 bg-[#05070C] text-[#F5F9FF] placeholder-[#8EA0BD] text-sm rounded-[10px] outline outline-1 outline-offset-[-1px] transition-colors focus:outline-[#2BE3FF] ${errors.address_line_one ? 'outline-red-500' : 'outline-[#1C2A40]'}`} />
            {errors.address_line_one && <span className="text-red-400 text-xs">{errors.address_line_one.message}</span>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-[#F5F9FF] text-xs font-semibold font-['Inter']">Suburb</label>
              <input {...register('sub_burb', { required: 'Suburb is required' })} className={`w-full px-4 py-3 bg-[#05070C] text-[#F5F9FF] placeholder-[#8EA0BD] text-sm rounded-[10px] outline outline-1 outline-offset-[-1px] transition-colors focus:outline-[#2BE3FF] ${errors.sub_burb ? 'outline-red-500' : 'outline-[#1C2A40]'}`} />
              {errors.sub_burb && <span className="text-red-400 text-xs">{errors.sub_burb.message}</span>}
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[#F5F9FF] text-xs font-semibold font-['Inter']">State</label>
              <input {...register('state', { required: 'State is required' })} className={`w-full px-4 py-3 bg-[#05070C] text-[#F5F9FF] placeholder-[#8EA0BD] text-sm rounded-[10px] outline outline-1 outline-offset-[-1px] transition-colors focus:outline-[#2BE3FF] ${errors.state ? 'outline-red-500' : 'outline-[#1C2A40]'}`} />
              {errors.state && <span className="text-red-400 text-xs">{errors.state.message}</span>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-[#F5F9FF] text-xs font-semibold font-['Inter']">Post Code</label>
              <input {...register('post_code', { required: 'Post code is required' })} className={`w-full px-4 py-3 bg-[#05070C] text-[#F5F9FF] placeholder-[#8EA0BD] text-sm rounded-[10px] outline outline-1 outline-offset-[-1px] transition-colors focus:outline-[#2BE3FF] ${errors.post_code ? 'outline-red-500' : 'outline-[#1C2A40]'}`} />
              {errors.post_code && <span className="text-red-400 text-xs">{errors.post_code.message}</span>}
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[#F5F9FF] text-xs font-semibold font-['Inter']">Country / Region</label>
              <input defaultValue="Australia" {...register('country_region', { required: 'Country is required' })} className={`w-full px-4 py-3 bg-[#05070C] text-[#F5F9FF] placeholder-[#8EA0BD] text-sm rounded-[10px] outline outline-1 outline-offset-[-1px] transition-colors focus:outline-[#2BE3FF] ${errors.country_region ? 'outline-red-500' : 'outline-[#1C2A40]'}`} />
              {errors.country_region && <span className="text-red-400 text-xs">{errors.country_region.message}</span>}
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[#F5F9FF] text-xs font-semibold font-['Inter']">Order Notes (Optional)</label>
            <textarea rows="2" {...register('notes')} placeholder="Handle with care" className="w-full px-4 py-3 bg-[#05070C] text-[#F5F9FF] placeholder-[#8EA0BD] text-sm rounded-[10px] outline outline-1 outline-offset-[-1px] outline-[#1C2A40] transition-colors focus:outline-[#2BE3FF] resize-none" />
          </div>

          <div className="border-t border-[#1C2A40] pt-5 mt-2">
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full py-4 bg-[#FFC628] hover:bg-[#e5b224] transition-colors rounded-[100px] flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#FFC628]/10"
            >
              <span className="text-[#191405] text-base font-bold font-['DM_Sans']">
                {isProcessing ? 'Connecting to PayPal...' : `Pay $${selectedVariation.price} AUD via PayPal`}
              </span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
