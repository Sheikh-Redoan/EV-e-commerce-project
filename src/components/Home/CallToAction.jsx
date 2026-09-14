import React from 'react';
import { Link } from 'react-router-dom';

export default function CallToAction() {
  return (
    <section className="w-full bg-[#05070C] !px-6 md:!px-20 !py-16 md:!py-24 flex justify-center">
      <div className="w-full max-w-[1440px] flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <h2 className="text-[#F5F9FF] text-4xl md:text-6xl font-bold font-['Familjen_Grotesk'] leading-tight md:leading-[60.50px]">
          Get Your Cable<br className="hidden md:block" /> Set Up Today
        </h2>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <a 
            href="mailto:support@evsystems.com.au" 
            className="text-[#8EA0BD] text-sm font-normal font-['DM_Sans'] hover:text-[#F5F9FF] transition-colors"
          >
            support@evsystems.com.au
          </a>
          <Link 
            to="/product" 
            className="!px-7 !py-3.5 bg-[#2BE3FF] rounded-lg text-[#05070C] text-sm font-semibold font-['DM_Sans'] hover:bg-[#2BE3FF]/80 transition-colors"
          >
            Shop the Cable
          </Link>
        </div>
      </div>
    </section>
  );
}
