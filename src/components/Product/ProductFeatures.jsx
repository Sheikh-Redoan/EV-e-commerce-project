import React from 'react';

const apiResponse = {
    "status": true,
    "message": "Product conditions fetched successfully",
    "data": [
        {
            "id": 4,
            "title": "11kW TYPE 2 CONNECTOR",
            "subtitle": "High-Speed Home Charging",
            "description": "16A Type 2 connector delivers efficient, fast charging for your EV — safe, reliable, and built to last.",
            "image": "https://admin.evsystems.com.au/uploads/everycondition-terms/1789447122_6aa8cbd2cf792.jpg"
        },
        {
            "id": 3,
            "title": "RETRACTABLE SPRING REEL",
            "subtitle": "Effortless Everyday Storage",
            "description": "Automatically retracts for neat, tangle-free storage — pull out, plug in, and charge with convenience.",
            "image": "https://admin.evsystems.com.au/uploads/everycondition-terms/1789447106_6aa8cbc220b88.jpg"
        },
        {
            "id": 2,
            "title": "-30°C COLD WEATHER READY",
            "subtitle": "Engineered for Harsh Winters",
            "description": "Stays flexible and reliable from -30°C to 50°C — tested to perform in real winter conditions.",
            "image": "https://admin.evsystems.com.au/uploads/everycondition-terms/1789447090_6aa8cbb240086.jpg"
        },
        {
            "id": 1,
            "title": "IPX4 SPLASH RESISTANT",
            "subtitle": "Built to Handle Every Splash",
            "description": "Rated to withstand splashing water from any direction, so you can plug in with confidence in any weather.",
            "image": "https://admin.evsystems.com.au/uploads/everycondition-terms/1789447068_6aa8cb9cc4e15.jpg"
        }
    ]
};

const features = apiResponse.data;

export default function ProductFeatures() {
  return (
    <section className="w-full bg-[#05070C] !px-6 md:!px-20 !py-16 md:!py-24 flex justify-center">
      <div className="w-full max-w-[1440px] flex flex-col justify-start items-start gap-12 overflow-hidden">
        <div className="justify-start text-[#F5F9FF] text-3xl font-bold font-['Inter']">
          Built for Every Condition
        </div>
        
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden">
          {features.map((feature) => (
            <div key={feature.id} className="self-stretch bg-[#0A1119] rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#1C2A40] flex flex-col justify-start items-start overflow-hidden">
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
