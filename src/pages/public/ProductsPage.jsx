import React from 'react';
import { useSelector } from 'react-redux';
import ProductHero from '../../components/Product/ProductHero';
import TechnicalSpecs from '../../components/Product/TechnicalSpecs';
import ProductFeatures from '../../components/Product/ProductFeatures';
import ManualWarrantyCTA from '../../components/Product/ManualWarrantyCTA';

export default function ProductsPage({ children }) {
    const { products, loading } = useSelector((state) => state.products);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-[#2BE3FF] text-lg">Loading products...</div>
            </div>
        );
    }

    return (
        <div className="flex flex-col w-full">
            {/* Assuming the first product in the list is the one to display for now */}
            {products.length > 0 && <ProductHero product={products[0]} />}
            {products.length > 0 && <TechnicalSpecs specifications={products[0].product_variation[0]?.technical_specification} />}
            {products.length > 0 && <ProductFeatures />}
            {products.length > 0 && <ManualWarrantyCTA />}
            {children}
        </div>
    );
}
