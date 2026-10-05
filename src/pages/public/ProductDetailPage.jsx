import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductHero from '../../components/Product/ProductHero';
import TechnicalSpecs from '../../components/Product/TechnicalSpecs';
import ProductFeatures from '../../components/Product/ProductFeatures';
import ManualWarrantyCTA from '../../components/Product/ManualWarrantyCTA';

export default function ProductsPage({ children }) {
    const { products, loading } = useSelector((state) => state.products);
    const [selectedVariation, setSelectedVariation] = useState(null);
    const [activeProductId, setActiveProductId] = useState(null);

    // Initialize selectedVariation and active product when products load
    useEffect(() => {
        if (products?.length > 0) {
            if (!activeProductId) {
                setActiveProductId(products[0].id);
            }
            if (!selectedVariation) {
                const active = products.find(p => p.id === (activeProductId || products[0].id));
                if (active?.product_variation?.length > 0) {
                    setSelectedVariation(active.product_variation[0]);
                }
            }
        }
    }, [products, activeProductId, selectedVariation]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#05070C]">
                <div className="text-[#2BE3FF] text-lg">Loading products...</div>
            </div>
        );
    }

    const currentProduct = products?.find(p => p.id === activeProductId) || (products?.length > 0 ? products[0] : null);

    const handleProductSelect = (product) => {
        setActiveProductId(product.id);
        if (product.product_variation?.length > 0) {
            setSelectedVariation(product.product_variation[0]);
        } else {
            setSelectedVariation(null);
        }
        // scroll to top smoothly
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

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
            
            {/* Product Card System for Multiple Products */}
            {products?.length > 1 && (
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
                    <h2 className="text-2xl font-bold text-white mb-8">Other Products</h2>
                    <div className="grid grid-cols- sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.filter(p => p.id !== currentProduct?.id).map(product => (
                            <div 
                                key={product.id} 
                                onClick={() => handleProductSelect(product)}
                                className="bg-[#0B101A] border border-[#1E293B] rounded-xl overflow-hidden cursor-pointer hover:border-[#2BE3FF] transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="w-full bg-white/5 relative">
                                    <img 
                                        src={product.gallery_image?.[0]?.image} 
                                        alt={product.product_title} 
                                        className="w-full h-48 object-cover mix-blend-screen p-4"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-white mb-2">{product.product_title}</h3>
                                    <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                                        {product.product_description}
                                    </p>
                                    <div className="flex items-center justify-between mt-auto">
                                        <span className="text-[#2BE3FF] font-medium">
                                            {product.product_variation?.[0] ? `$${product.product_variation[0].price}` : 'View Details'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {currentProduct && <ProductFeatures />}
            {currentProduct && <ManualWarrantyCTA />}
            {children}
        </div>
    );
}
