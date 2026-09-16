import React, { useState, useEffect } from 'react';
import { productsAPI } from '../../api/productsAPI';

export default function ProductFeatures() {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    productsAPI.getConditions()
      .then((res) => {
        if (res.data?.data) {
          setFeatures(res.data.data);
        }
      })
      .catch((err) => console.error('Failed to fetch product conditions:', err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="w-full bg-[#05070C] px-6 md:px-20 py-16 md:py-24 flex justify-center">
        <div className="w-full max-w-[1440px] grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-[#0A1119] rounded-2xl outline outline-1 outline-[#1C2A40] overflow-hidden animate-pulse">
              <div className="h-56 bg-[#101A2C]" />
              <div className="px-7 pt-6 pb-7 flex flex-col gap-3">
                <div className="h-3 w-24 bg-[#1C2A40] rounded" />
                <div className="h-5 w-48 bg-[#1C2A40] rounded" />
                <div className="h-3 w-full bg-[#1C2A40] rounded" />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (!features.length) return null;

  return (
    <section className="w-full bg-[#05070C] !px-6 md:!px-20 !py-16 md:!py-24 flex justify-center">
      <div className="w-full max-w-[1440px] flex flex-col justify-start items-start gap-12 overflow-hidden">
        <div className="justify-start text-[#F5F9FF] text-3xl font-bold font-['Inter']">
          Built for Every Condition
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="self-stretch bg-[#0A1119] rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#1C2A40] flex flex-col justify-start items-start overflow-hidden"
            >
              <div className="self-stretch h-56 relative bg-[#101A2C] overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="self-stretch !px-7 !pt-6 !pb-7 flex flex-col justify-start items-start gap-2 overflow-hidden">
                <div className="justify-start text-[#2BE3FF] text-xs font-semibold font-['Inter'] tracking-wider">
                  {feature.title}
                </div>
                <div className="justify-start text-[#F5F9FF] text-lg font-bold font-['Inter']">
                  {feature.subtitle}
                </div>
                <div className="w-full max-w-[500px] justify-start text-[#8EA0BD] text-xs font-normal font-['Inter'] leading-relaxed">
                  {feature.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
