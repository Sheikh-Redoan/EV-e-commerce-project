import React from 'react';

export default function Banner() {
  return (
    <div className="relative w-full h-screen bg-[#05070C] flex flex-col items-center justify-end overflow-hidden !pb-20">

      {/* Background Image & Overlays */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('/LandingPageBanner.jpg')" }}
      >
        {/* Figma Gradient: from-black/40 via-black/0 to-black/60 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 mix-blend-multiply"></div>
      </div>

      {/* Call to Action Container */}
      <div className="relative z-10 w-full max-w-[1440px]  flex justify-center lg:justify-center">
        <button className="group !px-[24px] !py-[13px] rounded-[100px] border border-[#2BE3FF] text-[#2BE3FF] text-[20px] font-semibold font-['Inter'] flex items-center gap-2 hover:bg-[#2BE3FF]/10 transition-all duration-300">
          <span>Explore Product</span>
          <span className="transform group-hover:translate-x-1 transition-transform duration-300">
            &rarr;
          </span>
        </button>
      </div>
    </div>
  );
}
