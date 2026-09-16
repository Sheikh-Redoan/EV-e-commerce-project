import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../config/routes';

export default function PaymentCancelPage() {
  return (
    <div className="w-full min-h-[calc(100vh-96px)] bg-[#05070C] flex justify-center items-center p-6">
      <div className="w-full max-w-md p-10 bg-[#0A0F19] rounded-[24px] outline outline-1 outline-offset-[-1px] outline-[#1C2A40] flex flex-col items-center gap-6 text-center shadow-2xl">
        <div className="w-20 h-20 rounded-full bg-red-500/10 border border-red-500 flex items-center justify-center mb-2">
          <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>

        <h1 className="text-[#F5F9FF] text-3xl font-black font-['Familjen_Grotesk']">
          Payment Cancelled
        </h1>

        <p className="text-[#8EA0BD] text-sm font-normal font-['Inter'] leading-relaxed">
          Your payment was cancelled and no charge was made. If this was a mistake, you can try again from your cart.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full mt-4">
          <Link
            to={ROUTES.CHECKOUT}
            className="flex-1 py-3 bg-[#2BE3FF] hover:bg-[#2BE3FF]/80 text-[#05070C] text-sm font-bold font-['Inter'] rounded-[100px] transition-colors"
          >
            Try Again
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
