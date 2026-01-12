import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { products, categories } from '../data/productData';
import { ArrowRight } from 'lucide-react';
import bannerImg from '../assets/产品页面/一级广告.png';
import learnMoreBtn from '../assets/产品页面/点击了解更多.png';
import dividerImg from '../assets/虚线/横虚线.png';

import './product.css';

export function ProductSeriesPage() {
    const navigate = useNavigate();
    const dogProducts = products.filter(p => p.category === 'dog' && p.showInSeriesPage).slice(0, 4);
    const catProducts = products.filter(p => p.category === 'cat' && p.showInSeriesPage).slice(0, 4);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-white">
            {/* HMR Update Trigger */}
            {/* Hero Banner */}
            <div className="relative w-full h-[300px] md:h-[500px]">
                <img
                    src={bannerImg}
                    alt="Product Series"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-end pr-10 md:pr-40 bg-gradient-to-r from-transparent to-black/10">
                    {/* Text is likely in the image, but adding accessible text if needed, or overlay */}
                    {/* Based on design, text "产品系列" is in the image. We can leave it clean. */}
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 py-8 md:py-12">
                {/* Dog Section */}
                <div id="dog-section" className="mb-20 product-section">
                    <div className="mb-0">
                        <h2 className="mb-1 text-title-primary">犬用</h2>
                        <h3 className="uppercase tracking-wide text-title-secondary">For Dogs</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 product-grid">
                        {dogProducts.map((product) => (
                            <Link key={product.id} to={product.link} className="group relative rounded-lg overflow-hidden w-full product-card-series block">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#C9A76B]/90 to-transparent p-6 text-white">
                                    <p className="text-sm mb-1 product-card-title-series">{product.subtitle}</p>
                                    <div className="flex items-center justify-between">
                                        <h4 className="font-bold product-card-title-category">{product.title}</h4>
                                        {/* Custom long solid arrow */}
                                        {/* <svg width="80" height="20" viewBox="0 0 70 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-1 text-white">
                                            <rect x="0" y="9" width="65" height="2" fill="currentColor" />
                                            <path d="M65 10L70 10L62.5 3L65 10Z" fill="currentColor" />
                                            <path d="M65 10L70 10L62.5 17L65 10Z" fill="currentColor" />
                                        </svg> */}
                                        <ArrowRight size={20} className="text-white" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="flex justify-center learn-more-btn-container">
                        <Link to="/products/dog">
                            <img
                                src={learnMoreBtn}
                                alt="了解更多"
                                className="cursor-pointer hover:opacity-80 transition-opacity"
                            />
                        </Link>
                    </div>
                </div>
                {/* Image separator */}
                <div className="flex justify-center my-16">
                    <img src={dividerImg} alt="" className="w-full section-divider" />
                </div>


                {/* Cat Section */}
                <div id="cat-section" className="mb-20 product-section">
                    <div className="mb-0">
                        <h2 className="mb-1 text-title-primary">猫用</h2>
                        <h3 className="uppercase tracking-wide text-title-secondary">For Cats</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 product-grid">
                        {catProducts.map((product) => (
                            <Link key={product.id} to={product.link} className="group relative rounded-lg overflow-hidden w-full product-card-series block">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#C9A76B]/90 to-transparent p-6 text-white">
                                    <p className="text-sm mb-1">{product.subtitle}</p>
                                    <div className="flex items-center justify-between">
                                        <h4 className="font-bold product-card-title-series">{product.title}</h4>
                                        <ArrowRight size={20} className="text-white" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="flex justify-center learn-more-btn-container">
                        <Link to="/products/cat">
                            <img
                                src={learnMoreBtn}
                                alt="了解更多"
                                className="cursor-pointer hover:opacity-80 transition-opacity"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
