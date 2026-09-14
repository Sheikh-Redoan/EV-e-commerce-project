import React from 'react';

export default function TechnicalSpecs({ specifications }) {
  // Fallback to demo specifications if none are provided by the API yet
  const specsData = specifications?.length > 0 ? specifications : [
    { id: 1, specification_name: "Cable Length", specification_value: "5m (8m available)" },
    { id: 2, specification_name: "Power Output", specification_value: "11kW" },
    { id: 3, specification_name: "Voltage", specification_value: "400V AC" },
    { id: 4, specification_name: "Operating Temperature", specification_value: "-30°C to 50°C" },
    { id: 5, specification_name: "Cable Material", specification_value: "TPE, cold-flex rated" },
    { id: 6, specification_name: "Connector Type", specification_value: "Type 2 (IEC 62196)" },
    { id: 7, specification_name: "Rated Current", specification_value: "16A, 3-phase" },
    { id: 8, specification_name: "Ingress Protection", specification_value: "IPX4 — splash resistant" },
    { id: 9, specification_name: "Reel Mechanism", specification_value: "Retractable spring reel, wall-mounted" },
    { id: 10, specification_name: "Certification", specification_value: "CE certified" }
  ];

  if (!specsData || specsData.length === 0) return null;
  return (
    <section className="w-full bg-[#05070C] !px-6 md:!px-20 !py-16 md:!py-24 flex justify-center">
      <div className="w-full max-w-[1440px] flex flex-col justify-start items-start gap-8 overflow-hidden">
        <div className="justify-start text-[#F5F9FF] text-3xl font-bold font-['Inter']">
          Technical Specifications
        </div>
        
        <div className="w-full inline-flex flex-col md:flex-row justify-start items-start gap-6 overflow-hidden">
          <div className="flex-1 w-full inline-flex flex-col justify-start items-start overflow-hidden">
            {specsData.slice(0, Math.ceil(specsData.length / 2)).map((spec) => (
              <div 
                key={spec.id} 
                className="self-stretch !py-4 border-b border-[#1C2A40] inline-flex justify-between items-center overflow-hidden"
              >
                <div className="justify-start text-[#8EA0BD] text-sm font-normal font-['Inter']">
                  {spec.specification_name}
                </div>
                <div className="text-right justify-start text-[#F5F9FF] text-sm font-semibold font-['Inter']">
                  {spec.specification_value}
                </div>
              </div>
            ))}
          </div>
          <div className="flex-1 w-full inline-flex flex-col justify-start items-start overflow-hidden">
            {specsData.slice(Math.ceil(specsData.length / 2)).map((spec) => (
              <div 
                key={spec.id} 
                className="self-stretch !py-4 border-b border-[#1C2A40] inline-flex justify-between items-center overflow-hidden"
              >
                <div className="justify-start text-[#8EA0BD] text-sm font-normal font-['Inter']">
                  {spec.specification_name}
                </div>
                <div className="text-right justify-start text-[#F5F9FF] text-sm font-semibold font-['Inter']">
                  {spec.specification_value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
