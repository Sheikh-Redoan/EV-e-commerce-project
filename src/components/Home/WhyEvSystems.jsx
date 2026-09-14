import React from 'react';
import { useSelector } from 'react-redux';

const fallbackReasonsData = [
  {
    num: '01',
    title: 'Splash Resistant',
    desc: 'IPX4-rated protection against splashing water from any direction, in any weather.',
  },
  {
    num: '02',
    title: 'Cold Weather Ready',
    desc: 'Stays flexible and reliable from -30°C to 50°C — built for real Australian winters.',
  },
  {
    num: '03',
    title: 'Retractable Reel',
    desc: 'Advanced spring technology delivers thousands of smooth, effortless retraction cycles.',
  },
  {
    num: '04',
    title: '11kW Fast Charging',
    desc: '16A Type 2 connector delivers efficient, high-speed charging at home.',
  },
];

export default function WhyEvSystems() {
  const { data: landingPageData } = useSelector((state) => state.landingPage);
  const reasonsToDisplay = landingPageData?.whyEvSystems || fallbackReasonsData;

  return (
    <section className="w-full bg-[#05070C] !px-6 md:!px-20 !py-28 flex flex-col gap-14 items-center">
      <div className="w-full max-w-[1440px] flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <h2 className="text-[#F5F9FF] text-3xl md:text-4xl font-bold font-['Familjen_Grotesk']">
          Why EV Systems
        </h2>
        <p className="text-[#8EA0BD] text-base font-normal font-['DM_Sans']">
          Engineered for real-world Australian conditions.
        </p>
      </div>

      <div className="w-full max-w-[1440px] grid grid-cols-1 md:grid-cols-2 md:gap-x-12">
        {reasonsToDisplay.map((item, index) => (
          <div 
            key={item.id || index} 
            className="!py-9 border-t border-[#1C2A40] flex flex-col items-start gap-3.5 !pr-0 md:!pr-10"
          >
            <span className="text-[#2BE3FF] text-sm font-bold font-['Inter']">
              {item.num || `0${index + 1}`}
            </span>
            <h3 className="text-[#F5F9FF] text-2xl font-bold font-['Familjen_Grotesk']">
              {item.title}
            </h3>
            <p className="text-[#8EA0BD] text-base font-normal font-['DM_Sans'] max-w-[500px]">
              {item.description || item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
