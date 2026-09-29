import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { paymentAPI } from "../../api/paymentAPI";
import { toast } from "react-toastify";

export default function ProductHero({
  product,
  selectedVariation,
  setSelectedVariation,
}) {
  const [activeImage, setActiveImage] = useState(
    product?.gallery_image?.[0]?.image ||
      "https://placehold.co/600x560?text=Product+Image",
  );
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  if (!product) return null;

  const handleBuyNow = async () => {
    if (
      selectedVariation?.price === "0.00" ||
      selectedVariation?.price == null
    ) {
      navigate("/contact");
      return;
    }
    
    setIsProcessing(true);
    try {
      const payload = {
        product_id: product.product_id || product.id,
        product_variation_id: selectedVariation.id,
        quantity: 1, 
        sub_total: parseFloat(selectedVariation.price),
        tax: 0.00,
        discount: 0.00,
        first_name: "Guest",
        last_name: "User",
        email: "guest@example.com",
        country_region: "Australia",
        address_line_one: "N/A",
        sub_burb: "N/A",
        state: "N/A",
        post_code: "0000",
        notes: "Direct purchase",
      };

      const response = await paymentAPI.createPayPalPayment(payload);
      
      if (response.data?.status === 'success' && response.data?.paypal_url) {
        window.location.href = response.data.paypal_url;
      } else {
        toast.error("Failed to initiate PayPal checkout.");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Payment initialization failed.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
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
                      activeImage === img.image
                        ? "border-[#2BE3FF]"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img.image}
                      alt="thumbnail"
                      className="w-full h-full object-cover bg-[#0A1119]"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="flex-1 flex flex-col items-start gap-5 w-full ">
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
              {selectedVariation?.price == "0.00" ||
              selectedVariation?.price == null
                ? `Contact for price`
                : `$${selectedVariation?.price} AUD`}
            </div>

            {/* Checkout Panel */}
            <div className="w-full !p-6 md:!p-7 bg-[#0A1119] rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#1C2A40] flex flex-col gap-4 !mt-2 box-border">
              <div className="text-[#F5F9FF] text-xs font-semibold font-['DM_Sans']">
                Select cable length
              </div>

              {/* Variations Selector */}
              <div className="w-full flex flex-col sm:flex-row gap-3">
                {(product.product_variation?.length > 0
                  ? product.product_variation
                  : []
                ).map((variation) => {
                  const isSelected = selectedVariation?.id === variation.id;
                  return (
                    <button
                      key={variation.id}
                      onClick={() => setSelectedVariation(variation)}
                      className={`flex-1 w-full !px-4 !py-3 rounded-xl flex flex-col justify-center items-center gap-1 transition-all duration-300 ${
                        isSelected
                          ? "bg-[#2BE3FF] outline-none"
                          : "bg-[#05070C] outline outline-1 outline-offset-[-1px] outline-[#1C2A40] hover:outline-[#8EA0BD]"
                      }`}
                    >
                      <div
                        className={`text-center justify-start text-lg font-bold font-['DM_Sans'] ${isSelected ? "text-zinc-950" : "text-[#F5F9FF]"}`}
                      >
                        {Number(variation.length)}m
                      </div>
                      <div
                        className={`text-center justify-start text-xs font-normal font-['DM_Sans'] ${isSelected ? "text-neutral-900" : "text-[#8EA0BD]"}`}
                      >
                        ${variation.price} AUD
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="justify-start text-[#8EA0BD] text-xs font-semibold font-['DM_Sans'] !mt-2">
                Secure checkout via PayPal
              </div>

              <button
                onClick={handleBuyNow}
                disabled={isProcessing}
                className="w-full !py-4 bg-[#FFC628] hover:bg-[#e5b224] disabled:opacity-50 transition-colors rounded-[100px] flex justify-center items-center overflow-hidden shadow-lg shadow-[#FFC628]/10"
              >
                <div className="justify-start text-[#191405] text-base font-bold font-['DM_Sans']">
                  {isProcessing ? "Connecting to PayPal..." :
                  selectedVariation?.price == "0.00" || selectedVariation?.price == null
                    ? `Contact for price`
                    : `PayPal Buy Now $${selectedVariation?.price} AUD`}
                </div>
              </button>

              <div className="justify-start text-[#8EA0BD] text-xs font-normal font-['DM_Sans']">
                Payments processed securely by PayPal. No account required.
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
