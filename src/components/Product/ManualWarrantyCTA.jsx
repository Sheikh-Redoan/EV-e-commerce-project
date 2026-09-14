import React from 'react';
import { Link } from 'react-router-dom';

export default function ManualWarrantyCTA() {
  return (
    <section className="w-full bg-[#0B1220] border-t border-b border-[#1C2A40] flex justify-center">
      <div className="w-full max-w-[1440px] !px-6 md:!px-16 !py-12 md:!py-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 overflow-hidden">
        <div className="inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden">
          <div className="justify-start text-[#F5F9FF] text-2xl font-semibold font-['Inter']">
            Need the manual or warranty details?
          </div>
          <div className="justify-start text-[#8EA0BD] text-base font-normal font-['Inter']">
            Download the installation manual and warranty information for this product.
          </div>
        </div>
        <Link 
          to="/manual-warranty"
          className="!px-6 !py-3 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-[#2BE3FF] flex justify-start items-center gap-2 overflow-hidden hover:bg-[#2BE3FF]/10 transition-colors whitespace-nowrap"
        >
          <div className="justify-start text-[#2BE3FF] text-sm font-semibold font-['Inter']">
            Manual & Warranty &rarr;
          </div>
        </Link>
      </div>
    </section>
  );
}
