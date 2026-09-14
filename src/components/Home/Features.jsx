import React from 'react';
import { useSelector } from 'react-redux';

const fallbackFeatureData = [
  {
    icon: 'IP',
    title: 'IPX4 Splashproof',
    desc: 'Built to withstand splashing water from any direction.',
  },
  {
    icon: '-30',
    title: '-30°C Cold Ready',
    desc: 'Engineered to perform reliably in harsh winter conditions.',
  },
  {
    icon: 'kW',
    title: '11kW Type 2',
    desc: 'Powerful, efficient charging for most EVs on Australian roads.',
  },
  {
    icon: '∞',
    title: 'Retractable Reel',
    desc: 'Spring-return tech rated for thousands of retraction cycles.',
  },
];

export default function Features() {
  const { data: landingPageData } = useSelector((state) => state.landingPage);
  const featuresToDisplay = landingPageData?.features || fallbackFeatureData;

  return (
    <section className="w-full bg-[#05070C] px-6 md:!px-20 !py-24 flex flex-col items-center gap-14">
      <div className="flex flex-col items-center gap-2.5 text-center">
        <span className="text-[#2BE3FF] text-xs font-medium font-['DM_Mono'] tracking-widest uppercase">
          Built for all conditions
        </span>
        <h2 className="text-[#F5F9FF] text-3xl md:text-4xl font-bold font-['Familjen_Grotesk']">
          Fast. Reliable. Ready When You Are.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1440px]">
        {featuresToDisplay.map((feature, index) => (
          <div 
            key={feature.id || index} 
            className="!p-[30px] bg-[#1C2A40] rounded-2xl flex flex-col items-start gap-4 hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 rounded-full  flex justify-center items-center overflow-hidden ">
              {typeof feature.icon === 'string' && feature.icon.startsWith('http') ? (
                <img src={feature.icon} alt={feature.title} className="w-full h-full object-contain" />
              ) : (
                <span className="text-[#2BE3FF] text-sm font-bold font-['Inter']">
                  {feature.icon}
                </span>
              )}
            </div>
            <h3 className="text-[#F5F9FF] text-base font-bold font-['DM_Sans']">
              {feature.title}
            </h3>
            <p className="text-[#8EA0BD] text-sm font-normal font-['DM_Sans']">
              {feature.description || feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
