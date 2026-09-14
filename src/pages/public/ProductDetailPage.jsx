import React from 'react';
import ProductHero from '../../components/Product/ProductHero';
import TechnicalSpecs from '../../components/Product/TechnicalSpecs';
import ProductFeatures from '../../components/Product/ProductFeatures';
import ManualWarrantyCTA from '../../components/Product/ManualWarrantyCTA';

// Mock data structured exactly like your GET /products/1 endpoint
const mockProduct = {
  id: 1,
  product_title: "Retractable 11kW Cable Reel",
  product_description: "Our 11kW Type 2 retractable charging cable — IPX4 splash resistant, cold-weather rated to -30°C, with advanced spring reel technology for thousands of smooth retraction cycles. Choose your cable length below.",
  gallery_image: [],
  product_variation: [
    {
      id: 1,
      length: "5",
      price: "449.00",
      technical_specification: [
        { id: 1, specification_name: "Cable Length", specification_value: "5m" },
        { id: 2, specification_name: "Power Output", specification_value: "11kW" },
        { id: 3, specification_name: "Voltage", specification_value: "400V AC" },
        { id: 4, specification_name: "Operating Temperature", specification_value: "-30°C to 50°C" },
        { id: 5, specification_name: "Connector Type", specification_value: "Type 2 (IEC 62196)" }
      ]
    },
    {
      id: 2,
      length: "8",
      price: "549.00",
      technical_specification: [
        { id: 6, specification_name: "Cable Length", specification_value: "8m" },
        { id: 7, specification_name: "Power Output", specification_value: "11kW" },
        { id: 8, specification_name: "Voltage", specification_value: "400V AC" },
        { id: 9, specification_name: "Operating Temperature", specification_value: "-30°C to 50°C" },
        { id: 10, specification_name: "Connector Type", specification_value: "Type 2 (IEC 62196)" }
      ]
    }
  ]
};

export default function ProductDetailPage() {
  // In the future:
  // const { id } = useParams();
  // const { selectedProduct, loading } = useProducts(id);
  // const productData = selectedProduct || mockProduct;

  const productData = mockProduct;

  return (
    <div className="flex flex-col w-full bg-[#05070C]">
      <ProductHero product={productData} />
      {/* Defaults to the first variation's specs if user hasn't toggled */}
      <TechnicalSpecs specifications={productData.product_variation[0].technical_specification} />
      <ProductFeatures />
      <ManualWarrantyCTA />
    </div>
  );
}
