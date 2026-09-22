import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function CallToAction() {
  const { data: landingPageData } = useSelector((state) => state.landingPage);
  const ctaBanner = landingPageData?.cta_banner;

  const buttonText = ctaBanner?.cta_button_text || 'Shop the Cable';
  let buttonUrl = ctaBanner?.cta_button_url || '/product';
  
  if (buttonUrl.includes('evsystems.com.au')) {
    const urlParts = buttonUrl.split('evsystems.com.au');
    buttonUrl = urlParts[1] || '/';
    if (!buttonUrl.startsWith('/')) {
      buttonUrl = '/' + buttonUrl;
    }
  } else if (!buttonUrl.startsWith('/') && !buttonUrl.startsWith('http')) {
    buttonUrl = '/' + buttonUrl;
  }

  const isExternal = buttonUrl.startsWith('http');

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
          {isExternal ? (
            <a 
              href={buttonUrl} 
              className="!px-7 !py-3.5 bg-[#2BE3FF] rounded-lg text-[#05070C] text-sm font-semibold font-['DM_Sans'] hover:bg-[#2BE3FF]/80 transition-colors"
            >
              {buttonText}
            </a>
          ) : (
            <Link 
              to={buttonUrl} 
              className="!px-7 !py-3.5 bg-[#2BE3FF] rounded-lg text-[#05070C] text-sm font-semibold font-['DM_Sans'] hover:bg-[#2BE3FF]/80 transition-colors"
            >
              {buttonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
