import React, { useState } from 'react';

export default function ProductHero({ product, selectedVariation, setSelectedVariation }) {
  // State for active image in the gallery
  const [activeImage, setActiveImage] = useState(product?.gallery_image?.[0]?.image || "https://placehold.co/600x560?text=Product+Image");

  if (!product) return null;

  return (
    <section className="w-full bg-[#05070C] !px-6 md:!px-20 !py-12 md:!py-20 flex justify-center">
      <div className="w-full max-w-[1440px] flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
        
        {/* Product Image Gallery */}
        <div className="flex-1 w-full max-w-[600px] flex flex-col gap-4">
          <div className="w-full h-auto lg:h-[560px] rounded-[20px] overflow-hidden bg-[#0A1119] border border-[#1C2A40]">
            <img 
              className="w-full h-full object-cover" 
              src={activeImage} 
              alt={product.product_title} 
            />
          </div>
          {/* Thumbnails */}
          {product.gallery_image && product.gallery_image.length > 1 && (
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {product.gallery_image.map((img) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(img.image)}
                  className={`w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all ${
                    activeImage === img.image ? 'border-[#2BE3FF]' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img.image} alt="thumbnail" className="w-full h-full object-cover bg-[#0A1119]" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="flex-1 flex flex-col items-start gap-5 w-full overflow-hidden">
          <div className="justify-start text-[#2BE3FF] text-xs font-semibold font-['DM_Sans'] tracking-wider uppercase">
            Type 2 EV Charging Cable
          </div>
          <div className="w-full md:w-[640px] justify-start text-[#F5F9FF] text-3xl md:text-4xl font-bold font-['Familjen_Grotesk']">
            {product.product_title}
          </div>
          <div className="w-full md:w-[560px] justify-start text-[#8EA0BD] text-base font-normal font-['DM_Sans'] leading-relaxed">
            {product.product_description}
          </div>
          <div className="justify-start text-[#F5F9FF] text-3xl font-black font-['DM_Sans']">
            ${selectedVariation?.price || '449.00'} AUD
          </div>

          {/* Checkout Panel */}
          <div className="w-full !p-6 md:!p-7 bg-[#0A1119] rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#1C2A40] flex flex-col justify-start items-start gap-4 !mt-2">
            <div className="justify-start text-[#F5F9FF] text-xs font-semibold font-['DM_Sans']">
              Select cable length
            </div>
            
            {/* Variations Selector */}
            <div className="w-full md:w-72 flex flex-col sm:flex-row justify-start items-start gap-3 overflow-hidden">
              {(product.product_variation?.length > 0 ? product.product_variation : []).map((variation) => {
                const isSelected = selectedVariation?.id === variation.id;
                return (
                  <button
                    key={variation.id}
                    onClick={() => setSelectedVariation(variation)}
                    className={`flex-1 w-full !px-4 !py-2.5 rounded-xl flex flex-col justify-start items-center gap-0.5 overflow-hidden transition-all duration-300 ${
                      isSelected 
                        ? 'bg-[#2BE3FF] outline-none' 
                        : 'bg-[#05070C] outline outline-1 outline-offset-[-1px] outline-[#1C2A40] hover:outline-[#8EA0BD]'
                    }`}
                  >
                    <div className={`text-center justify-start text-lg font-bold font-['DM_Sans'] ${isSelected ? 'text-zinc-950' : 'text-[#F5F9FF]'}`}>
                      {Number(variation.length)}m
                    </div>
                    <div className={`text-center justify-start text-xs font-normal font-['DM_Sans'] ${isSelected ? 'text-neutral-900' : 'text-[#8EA0BD]'}`}>
                      ${variation.price} AUD
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="justify-start text-[#8EA0BD] text-xs font-semibold font-['DM_Sans'] !mt-2">
              Secure checkout via PayPal
            </div>
            <button className="w-full !py-4 bg-[#FFC628] hover:bg-[#e5b224] transition-colors rounded-[100px] flex justify-center items-center overflow-hidden">
              <div className="justify-start text-[#191405] text-base font-bold font-['DM_Sans']">
                PayPal • Buy Now — ${selectedVariation?.price || '449.00'} AUD
              </div>
            </button>
            <div className="justify-start text-[#8EA0BD] text-xs font-normal font-['DM_Sans']">
              🔒 Payments processed securely by PayPal. No account required.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
