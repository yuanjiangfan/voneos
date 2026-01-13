import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products, categories, Product } from '../data/productData';
import { ChevronDown, ChevronRight, ArrowRight } from 'lucide-react';
import bannerImg from '../assets/产品页面/二级广告.png';
import dividerLine from '../assets/虚线/横虚线.png';
import dogBtn from '../assets/产品页面/爱犬.png';
import dogBtnHover from '../assets/产品页面/爱犬-h.png';
import catBtn from '../assets/产品页面/爱猫.png';
import catBtnHover from '../assets/产品页面/爱猫-h.png';
import productCardTriangle from '../assets/产品页面/产品卡片三角.png';


export function ProductCategoryPage() {
    const { categoryId } = useParams<{ categoryId: string }>();
    const navigate = useNavigate();
    const [activeSubCategory, setActiveSubCategory] = useState<string | null>(null);
    const [dogHovered, setDogHovered] = useState(false);
    const [catHovered, setCatHovered] = useState(false);

    // Default to 'dog' if categoryId is missing or invalid, though routing should handle it
    const currentCategory = categories.find(c => c.id === categoryId) || categories[0];
    const isDog = currentCategory.id === 'dog';

    // Filter products by main category
    const categoryProducts = products.filter(p => p.category === currentCategory.id);

    // Hardcoded subcategories as per requirement
    const subCategories = ['金罐系列', '化毛膏系列', '口腔护理专区'];

    // Filter products by subcategory if selected
    // If no active subcategory, we still show all category products (or should we default to first? Usually "All" or similar.
    // Design seems to imply clicking one filters it.
    const displayProducts = activeSubCategory
        ? categoryProducts.filter(p => p.subCategory === activeSubCategory)
        : categoryProducts;

    const toggleSubCategory = (sub: string) => {
        if (activeSubCategory === sub) {
            setActiveSubCategory(null);
        } else {
            setActiveSubCategory(sub);
        }
    };

    useEffect(() => {
        // Reset subcategory when category changes
        setActiveSubCategory(null);
    }, [categoryId]);


    return (
        <div className="bg-white min-h-screen">
            {/* Hero Banner */}
            <div className="relative w-full h-[300px] md:h-[400px]">
                <img
                    src={bannerImg}
                    alt="Product Series"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center pl-10 md:pl-40 bg-black/10">
                    {/* Title overlay if needed, currently reusing banner image which has text */}
                </div>
            </div>

            <div className="container mx-auto px-6 py-8">
                {/* Category Toggles */}
                <div className="mb-8">
                    <div className="flex gap-4 category-btn-container">
                        <button
                            onClick={() => navigate('/products/dog')}
                            className="transition-transform hover:scale-105"
                            onMouseEnter={() => setDogHovered(true)}
                            onMouseLeave={() => setDogHovered(false)}
                        >
                            <img
                                src={categoryId === 'dog' || dogHovered ? dogBtnHover : dogBtn}
                                alt="犬用系列"
                                className="h-12"
                            />
                        </button>
                        <button
                            onClick={() => navigate('/products/cat')}
                            className="transition-transform hover:scale-105"
                            onMouseEnter={() => setCatHovered(true)}
                            onMouseLeave={() => setCatHovered(false)}
                        >
                            <img
                                src={categoryId === 'cat' || catHovered ? catBtnHover : catBtn}
                                alt="猫用系列"
                                className="h-12"
                            />
                        </button>
                    </div>
                    {/* Divider Line */}
                    <img src={dividerLine} alt="" className="w-full" />
                </div>

                <div className="flex flex-col md:flex-row product-layout-container">
                    {/* Sidebar Filters */}
                    <div className="flex-shrink-0 category-sidebar category-sidebar-width">
                        <div className="space-y-2">
                            {subCategories.map((sub) => (
                                <div key={sub}>
                                    <button
                                        onClick={() => toggleSubCategory(sub)}
                                        className={`flex items-center justify-between w-full text-left py-2 font-medium hover:text-[#A07040] category-sidebar-item ${activeSubCategory === sub ? 'text-[#A07040]' : ''}`}
                                    >
                                        <span>{sub}</span>
                                        {activeSubCategory === sub ? <ChevronDown size={30} /> : <ChevronRight size={30} />}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="product-grid-area flex-1 product-grid-area-inner">
                        <div className="flex flex-wrap product-grid-container">
                            {displayProducts.length > 0 ? (
                                displayProducts.map((product) => (
                                    <Link key={product.id} to={product.link} className="group relative bg-gradient-to-b from-[#FFF5E6] to-[#D4B895]  product-card-category overflow-hidden transition-shadow block">
                                        <div className="w-full relative">
                                            {/* Product Image */}
                                            <img
                                                src={product.image}
                                                alt={product.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />

                                            {/* Product Info - Overlay */}
                                            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end bg-gradient-to-t from-[#C9A76B]/95 via-[#C9A76B]/70 to-transparent text-white pt-24">
                                                <p className="text-sm opacity-90 mb-2 product-card-title-series">{product.subtitle}</p>
                                                <div className="flex items-end justify-between">
                                                    <h4 className="font-bold leading-none product-card-title-category">{product.title}</h4>
                                                    {/* Custom long solid arrow */}
                                                    {/* <svg width="80" height="20" viewBox="0 0 70 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-1 text-white">
                                                        <rect x="0" y="9" width="65" height="2" fill="currentColor" />
                                                        <path d="M65 10L70 10L62.5 3L65 10Z" fill="currentColor" />
                                                        <path d="M65 10L70 10L62.5 17L65 10Z" fill="currentColor" />
                                                    </svg> */}
                                                    <img src={productCardTriangle} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            ) : (
                                <div className="w-full text-center py-20">
                                    <p className="text-xl text-gray-500">该栏目暂无数据</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
