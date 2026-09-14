import React from 'react';

const features = [
  {
    tag: 'IPX4 SPLASH RESISTANT',
    title: 'Built to Handle Every Splash',
    desc: 'Rated to withstand splashing water from any direction, so you can plug in with confidence in any weather.',
    imgAlt: '[ PHOTO: cable plug in the rain, water droplets on connector ]'
  },
  {
    tag: 'RETRACTABLE SPRING REEL',
    title: 'Effortless Everyday Storage',
    desc: 'Automatically retracts for neat, tangle-free storage — pull out, plug in, and charge with convenience.',
    imgAlt: '[ PHOTO: close-up of retractable reel mechanism ]'
  },
  {
    tag: '-30°C COLD WEATHER READY',
    title: 'Engineered for Harsh Winters',
    desc: 'Stays flexible and reliable from -30°C to 50°C — tested to perform in real winter conditions.',
    imgAlt: '[ PHOTO: cable reel mounted outdoors, frost/cold ambience ]'
  },
  {
    tag: '11kW TYPE 2 CONNECTOR',
    title: 'High-Speed Home Charging',
    desc: '16A Type 2 connector delivers efficient, fast charging for your EV — safe, reliable, and built to last.',
    imgAlt: '[ PHOTO: connector close-up, pins detail ]'
  }
];

export default function ProductFeatures() {
  return (
    <section className="w-full bg-[#05070C] !px-6 md:!px-20 !py-16 md:!py-24 flex justify-center">
      <div className="w-full max-w-[1440px] flex flex-col justify-start items-start gap-12 overflow-hidden">
        <div className="justify-start text-[#F5F9FF] text-3xl font-bold font-['Inter']">
          Built for Every Condition
        </div>
        
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden">
          {features.map((feature, idx) => (
            <div key={idx} className="self-stretch bg-[#0A1119] rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#1C2A40] flex flex-col justify-start items-start overflow-hidden">
              <div className="self-stretch h-56 relative bg-[#101A2C] overflow-hidden">
                <div className="left-[16px] top-[190px] absolute justify-start text-[#8EA0BD] text-xs font-normal font-['Inter']">
                  {feature.imgAlt}
                </div>
              </div>
              <div className="self-stretch !px-7 !pt-6 !pb-7 flex flex-col justify-start items-start gap-2 overflow-hidden">
                <div className="justify-start text-[#2BE3FF] text-xs font-semibold font-['Inter'] tracking-wider">
                  {feature.tag}
                </div>
                <div className="justify-start text-[#F5F9FF] text-lg font-bold font-['Inter']">
                  {feature.title}
                </div>
                <div className="w-full max-w-[500px] justify-start text-[#8EA0BD] text-xs font-normal font-['Inter'] leading-relaxed">
                  {feature.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
