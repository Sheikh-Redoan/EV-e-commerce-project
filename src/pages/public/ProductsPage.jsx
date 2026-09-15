import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductHero from '../../components/Product/ProductHero';
import TechnicalSpecs from '../../components/Product/TechnicalSpecs';
import ProductFeatures from '../../components/Product/ProductFeatures';
import ManualWarrantyCTA from '../../components/Product/ManualWarrantyCTA';

export default function ProductsPage({ children }) {
    const { products, loading } = useSelector((state) => state.products);
    const [selectedVariation, setSelectedVariation] = useState(null);

    // Initialize selectedVariation when products load
    useEffect(() => {
        if (products?.length > 0 && products[0].product_variation?.length > 0 && !selectedVariation) {
            setSelectedVariation(products[0].product_variation[0]);
        }
    }, [products, selectedVariation]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#05070C]">
                <div className="text-[#2BE3FF] text-lg">Loading products...</div>
            </div>
        );
    }

    const currentProduct = products?.length > 0 ? products[0] : null;

    return (
        <div className="flex flex-col w-full bg-[#05070C]">
            {currentProduct && (
                <ProductHero 
                    product={currentProduct} 
                    selectedVariation={selectedVariation} 
                    setSelectedVariation={setSelectedVariation} 
                />
            )}
            {currentProduct && (
                <TechnicalSpecs 
                    specifications={selectedVariation?.technical_specification || currentProduct.product_variation[0]?.technical_specification} 
                />
            )}
            {currentProduct && <ProductFeatures />}
            {currentProduct && <ManualWarrantyCTA />}
            {children}
        </div>
    );
}
