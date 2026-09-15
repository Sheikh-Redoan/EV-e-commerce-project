import React from 'react';
import ProductHero from '../../components/Product/ProductHero';
import TechnicalSpecs from '../../components/Product/TechnicalSpecs';
import ProductFeatures from '../../components/Product/ProductFeatures';
import ManualWarrantyCTA from '../../components/Product/ManualWarrantyCTA';

const mockProduct = {
    "status": "success",
    "message": "Product fetched successfully",
    "data": [
        {
            "product_title": "Retractable 11kW Cable Reel",
            "product_description": "Our 11kW Type 2 retractable charging cable — IPX4 splash-resistant, cold-weather rated to -30°C, with advanced spring reel technology for thousands of smooth retraction cycles. Choose your cable length below.",
            "gallery_image": [
                {
                    "id": 11,
                    "image": "https://admin.evsystems.com.au/uploads/products/1789446584_6aa8c9b80f1a6.jpg"
                },
                {
                    "id": 12,
                    "image": "https://admin.evsystems.com.au/uploads/products/1789446584_6aa8c9b810231.jpg"
                },
                {
                    "id": 13,
                    "image": "https://admin.evsystems.com.au/uploads/products/1789446584_6aa8c9b810cd4.jpg"
                },
                {
                    "id": 14,
                    "image": "https://admin.evsystems.com.au/uploads/products/1789446584_6aa8c9b811b04.jpg"
                }
            ],
            "product_variation": [
                {
                    "id": 13,
                    "price": "449.00",
                    "length": "5.00",
                    "technical_specification": [
                        { "id": 41, "specification_name": "Cable Length", "specification_value": "5m (8m available)" },
                        { "id": 42, "specification_name": "Power Output", "specification_value": "11kW" },
                        { "id": 43, "specification_name": "Voltage", "specification_value": "400V AC" },
                        { "id": 44, "specification_name": "Operating Temperature", "specification_value": "-30°C to 50°C" },
                        { "id": 45, "specification_name": "Cable Material", "specification_value": "TPE, cold-flex rated" },
                        { "id": 46, "specification_name": "Connector Type", "specification_value": "Type 2 (IEC 62196)" },
                        { "id": 47, "specification_name": "Rated Current", "specification_value": "16A, 3-phase" },
                        { "id": 48, "specification_name": "Ingress Protection", "specification_value": "IPX4 — splash resistant" },
                        { "id": 49, "specification_name": "Reel Mechanism", "specification_value": "Retractable spring reel, wall-mounted" },
                        { "id": 50, "specification_name": "Certification", "specification_value": "CE certified" }
                    ]
                },
                {
                    "id": 14,
                    "price": "549.00",
                    "length": "8.00",
                    "technical_specification": [
                        { "id": 51, "specification_name": "Cable Length", "specification_value": "8m" },
                        { "id": 52, "specification_name": "Power Output", "specification_value": "11kW" },
                        { "id": 53, "specification_name": "Voltage", "specification_value": "400V AC" },
                        { "id": 54, "specification_name": "Operating Temperature", "specification_value": "-30°C to 50°C" },
                        { "id": 55, "specification_name": "Cable Material", "specification_value": "TPE, cold-flex rated" },
                        { "id": 56, "specification_name": "Connector Type", "specification_value": "Type 2 (IEC 62196)" },
                        { "id": 57, "specification_name": "Rated Current", "specification_value": "16A, 3-phase" },
                        { "id": 58, "specification_name": "Ingress Protection", "specification_value": "IPX4 — splash resistant" },
                        { "id": 59, "specification_name": "Reel Mechanism", "specification_value": "Retractable spring reel, wall-mounted" },
                        { "id": 60, "specification_name": "Certification", "specification_value": "CE certified" }
                    ]
                }
            ]
        }
    ]
}.data[0];

export default function ProductDetailPage() {
  const productData = mockProduct;
  const [selectedVariation, setSelectedVariation] = React.useState(productData.product_variation[0]);

  return (
    <div className="flex flex-col w-full bg-[#05070C]">
      <ProductHero 
        product={productData} 
        selectedVariation={selectedVariation}
        setSelectedVariation={setSelectedVariation}
      />
      <TechnicalSpecs 
        specifications={selectedVariation?.technical_specification} 
      />
      <ProductFeatures />
      <ManualWarrantyCTA />
    </div>
  );
}
