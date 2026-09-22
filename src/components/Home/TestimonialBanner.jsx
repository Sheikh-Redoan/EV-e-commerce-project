import React from 'react';
import { useSelector } from 'react-redux';

export default function TestimonialBanner() {
  const { data: landingPageData } = useSelector((state) => state.landingPage);
  const ctaBanner = landingPageData?.cta_banner;

  const bgImage = ctaBanner?.cta_image || '/Set it, plug it.png';
  const title = ctaBanner?.cta_title || '“Set it, plug it, forget it. Charging finally feels effortless.”';
  const subtitle = ctaBanner?.cta_subtitle || '— EARLY CUSTOMER, MELBOURNE VIC';

  return (
    <section className="relative w-full h-[500px] md:h-[620px] flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${bgImage}')` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[820px] px-6 flex flex-col items-center gap-8 text-center">
        <h2 className="text-[#F5F9FF] text-3xl md:text-5xl font-bold font-['Familjen_Grotesk'] leading-tight">
          {title}
        </h2>
        <p className="text-[#2BE3FF] text-xs font-semibold font-['Inter'] tracking-wide uppercase">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
