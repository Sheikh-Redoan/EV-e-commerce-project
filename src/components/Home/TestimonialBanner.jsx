import React from 'react';

export default function TestimonialBanner() {
  return (
    <section className="relative w-full h-[500px] md:h-[620px] flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Set it, plug it.png')" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[820px] px-6 flex flex-col items-center gap-8 text-center">
        <h2 className="text-[#F5F9FF] text-3xl md:text-5xl font-bold font-['Familjen_Grotesk'] leading-tight">
          “Set it, plug it, forget it. Charging finally feels effortless.”
        </h2>
        <p className="text-[#2BE3FF] text-xs font-semibold font-['Inter'] tracking-wide uppercase">
          — EARLY CUSTOMER, MELBOURNE VIC
        </p>
      </div>
    </section>
  );
}
