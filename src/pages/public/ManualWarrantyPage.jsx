import React from 'react';

export default function ManualWarrantyPage() {
  return (
    <div className="w-full min-h-[calc(100vh-96px)] bg-[#05070C] flex flex-col items-center !pt-24 !pb-28 !px-6 md:!px-20 relative">
      
      {/* Header Section */}
      <div className="w-full max-w-[1440px] flex flex-col items-center gap-3 text-center !mb-15">
        <div className="text-[#2BE3FF] text-xs font-semibold font-['Inter'] tracking-wider uppercase">
          SUPPORT & DOCUMENTATION
        </div>
        <h1 className="text-[#F5F9FF] text-4xl font-black font-['Inter']">
          Manual & Invoice
        </h1>
        <p className="w-full max-w-[560px] text-[#8EA0BD] text-base font-normal font-['Inter']">
          Everything you need to install, maintain, and get support for your EV Systems charging cable.
        </p>
      </div>
      
      {/* Cards Section */}
      <div className="w-full max-w-[1440px] mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Purchase Invoice Card */}
        <div className="w-full !p-9 bg-[#0A0F19] rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#1C2A40] flex flex-col items-start gap-5">
          <div className="w-14 h-14 bg-[#2BE3FF] rounded-2xl flex justify-center items-center overflow-hidden">
            <div className="w-6 h-6 relative overflow-hidden">
              <div className="w-4 h-5 left-[4px] top-[2px] absolute outline outline-2 outline-offset-[-1px] outline-black rounded-sm" />
              <div className="w-2 h-0 left-[8px] top-[11px] absolute outline outline-2 outline-offset-[-1px] outline-black" />
              <div className="w-1.5 h-0 left-[8px] top-[7px] absolute outline outline-2 outline-offset-[-1px] outline-black" />
            </div>
          </div>
          <h2 className="text-[#F5F9FF] text-xl font-bold font-['Inter']">
            Purchase Invoice.
          </h2>
          <p className="w-full max-w-96 text-[#8EA0BD] text-sm font-normal font-['Inter'] leading-relaxed">
            Step-by-step setup and wall-mounting instructions for the EV Systems retractable charging cable.
          </p>
          <div className="w-full mt-auto !pt-2 flex justify-between items-center">
            <span className="text-[#8EA0BD] text-xs font-normal font-['Inter']">PDF · 2.4 MB</span>
            <a href="#" className="!px-5 !py-2.5 bg-[#2BE3FF] hover:bg-[#2BE3FF]/80 transition-colors rounded-[100px] flex justify-center items-center">
              <span className="text-zinc-950 text-xs font-semibold font-['Inter']">Download PDF &darr;</span>
            </a>
          </div>
        </div>

        {/* Warranty Information Card */}
        <div className="w-full !p-9 bg-[#0A0F19] rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#1C2A40] flex flex-col items-start gap-5">
          <div className="w-14 h-14 bg-[#2BE3FF] rounded-2xl flex justify-center items-center overflow-hidden">
            <div className="w-6 h-6 relative overflow-hidden">
              <div className="w-4 h-5 left-[4px] top-[2px] absolute outline outline-2 outline-offset-[-1px] outline-black rounded-sm" />
              <div className="w-1.5 h-1 left-[9px] top-[10px] absolute outline outline-2 outline-offset-[-1px] outline-black" />
            </div>
          </div>
          <h2 className="text-[#F5F9FF] text-xl font-bold font-['Inter']">
            Warranty Information
          </h2>
          <p className="w-full max-w-96 text-[#8EA0BD] text-sm font-normal font-['Inter'] leading-relaxed">
            Full terms of your 3-year manufacturer warranty, plus how to register your product and make a claim.
          </p>
          <div className="w-full mt-auto !pt-2 flex justify-between items-center">
            <span className="text-[#8EA0BD] text-xs font-normal font-['Inter']">PDF · 480 KB</span>
            <a href="#" className="!px-5 !py-2.5 bg-[#2BE3FF] hover:bg-[#2BE3FF]/80 transition-colors rounded-[100px] flex justify-center items-center">
              <span className="text-zinc-950 text-xs font-semibold font-['Inter']">Download PDF &darr;</span>
            </a>
          </div>
        </div>
        
      </div>
    </div>
  );
}
