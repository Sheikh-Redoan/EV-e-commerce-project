import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ROUTES } from '../../config/routes';
import { paymentAPI } from '../../api/paymentAPI';

export default function PaymentSuccessPage() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  useEffect(() => {
    // Optionally hit your backend API here to verify the payment using the token
    if (token) {
      paymentAPI.paypalSuccess(token).catch(err => console.error(err));
    }
  }, [token]);

  return (
    <div className="w-full min-h-[calc(100vh-96px)] bg-[#05070C] flex justify-center items-center p-6">
      <div className="w-full max-w-md p-10 bg-[#0A0F19] rounded-[24px] outline outline-1 outline-offset-[-1px] outline-[#1C2A40] flex flex-col items-center gap-6 text-center shadow-2xl">
        <div className="w-20 h-20 rounded-full bg-[#2BE3FF]/10 border border-[#2BE3FF] flex items-center justify-center mb-2">
          <svg className="w-10 h-10 text-[#2BE3FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-[#F5F9FF] text-3xl font-black font-['Familjen_Grotesk']">
          Payment Successful!
        </h1>
        
        <p className="text-[#8EA0BD] text-sm font-normal font-['Inter'] leading-relaxed">
          Thank you for your purchase. Your order has been placed and a confirmation email is on its way to you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full mt-4">
          <Link 
            to={ROUTES.ORDERS || '/dashboard/orders'} 
            className="flex-1 py-3 bg-[#2BE3FF] hover:bg-[#2BE3FF]/80 text-[#05070C] text-sm font-bold font-['Inter'] rounded-[100px] transition-colors"
          >
            View Orders
          </Link>
          <Link 
            to={ROUTES.HOME} 
            className="flex-1 py-3 bg-transparent hover:bg-[#101A2C] text-[#F5F9FF] outline outline-1 outline-[#1C2A40] text-sm font-bold font-['Inter'] rounded-[100px] transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
