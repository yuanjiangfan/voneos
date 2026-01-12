import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/productData';
import { ChevronLeft, ChevronRight, Home, ChevronRight as BreadcrumbArrow } from 'lucide-react';
import bannerImg from '../assets/产品页面/product-3.png';
import horizontalDashedLine from '../assets/虚线/横虚线.png';
import './product.css';

export function ProductDetailPage() {
    const { categoryId, productId } = useParams<{ categoryId: string; productId: string }>();
    const navigate = useNavigate();
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    // 查找当前产品
    const product = products.find(p => p.id === productId);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">产品未找到</h2>
                    <button
                        onClick={() => navigate('/products')}
                        className="px-6 py-2 bg-[#8B7355] text-white rounded-lg hover:bg-[#6d5a42] transition"
                    >
                        返回产品列表
                    </button>
                </div>
            </div>
        );
    }

    const images = product.images || [product.image];

    return (
        <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
            {/* Hero Banner */}
            <div className="relative w-full h-[200px] md:h-[280px]">
                <img
                    src={bannerImg}
                    alt="Product Series"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Breadcrumb Navigation */}
            <div className="w-full" >
                <div className="container mx-auto px-6 py-4 flex justify-center">
                    <div className="flex items-center gap-2 text-sm" style={{ maxWidth: '1600px', width: '100%', color: '#8B7355' }}>
                        <Home size={16} className="text-[#8B7355]" />
                        <button
                            onClick={() => navigate('/')}
                            className="hover:text-[#6d5a42] transition-colors"
                        >
                            首页
                        </button>
                        <BreadcrumbArrow size={14} className="text-[#C5A47E]" />
                        <button
                            onClick={() => navigate('/products')}
                            className="hover:text-[#6d5a42] transition-colors"
                        >
                            品牌产品
                        </button>
                        <BreadcrumbArrow size={14} className="text-[#C5A47E]" />
                        <button
                            onClick={() => navigate(`/products/${product.category}`)}
                            className="hover:text-[#6d5a42] transition-colors"
                        >
                            {product.category === 'dog' ? '保健品系列' : product.category === 'cat' ? '零食系列' : '产品系列'}
                        </button>
                        {product.subCategory && (
                            <>
                                <BreadcrumbArrow size={14} className="text-[#C5A47E]" />
                                <span className="font-medium text-[#6d5a42]">{product.subCategory}</span>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Product Detail Content */}
            <div className="container mx-auto px-6 py-12 flex justify-center" style={{ paddingBottom: '100px', paddingTop: '100px' }}>
                <div className="flex" style={{ maxWidth: '1600px', gap: '130px' }}>
                    {/* Left: Product Carousel - 665px */}
                    <div style={{ width: '665px', flexShrink: 0 }}>
                        {/* Carousel Container */}
                        <div className="relative bg-gray-100 rounded-lg overflow-hidden" style={{ padding: '30px', width: '665px', height: '520px', backgroundColor: 'whitesmoke' }}>
                            {/* Carousel Image */}
                            <img
                                src={images[selectedImageIndex]}
                                alt={product.title}
                                className="w-full h-full object-contain transition-opacity duration-300"
                            />

                            {/* Navigation Arrows */}
                            {images.length > 1 && (
                                <>
                                    <button
                                        onClick={() => setSelectedImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12  hover:bg-white rounded-full flex items-center justify-center  transition-all hover:scale-110"
                                    >
                                        <ChevronLeft size={28} className="text-[#8B7355]" />
                                    </button>
                                    <button
                                        onClick={() => setSelectedImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12  hover:bg-white rounded-full flex items-center justify-center  transition-all hover:scale-110"
                                    >
                                        <ChevronRight size={28} className="text-[#8B7355]" />
                                    </button>
                                </>
                            )}

                            {/* Carousel Indicators (Dots) */}
                            {images.length > 1 && (
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                                    {images.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedImageIndex(index)}
                                            className={`w-2.5 h-2.5 rounded-full transition-all ${selectedImageIndex === index
                                                ? 'bg-[#8B7355] w-8'
                                                : 'bg-white/60 hover:bg-white/80'
                                                }`}
                                            aria-label={`Go to image ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Thumbnail Gallery */}
                        {images.length > 1 && (
                            <div className="flex mt-4 justify-center" style={{ gap: '20px' }}>
                                {images.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImageIndex(index)}
                                        className={`rounded-lg overflow-hidden transition-all ${selectedImageIndex === index
                                            ? 'opacity-100'
                                            : 'opacity-60 hover:opacity-100'
                                            }`}
                                        style={{
                                            width: '100px',
                                            height: '80px',
                                            border: selectedImageIndex === index ? '3px solid #8B7355' : '2px solid #946621'
                                        }}
                                    >
                                        <img
                                            src={image}
                                            alt={`${product.title} - ${index + 1}`}
                                            className="w-full h-full object-cover p-4"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right: Product Information - 805px */}
                    <div className="space-y-6" style={{ width: '805px', flexShrink: 0 }}>
                        {/* Product Title */}
                        <div>
                            <h2 className="text-3xl font-bold text-[#8B7355] mb-2">{product.title}</h2>
                            <p className="text-3xl  uppercase tracking-wide" style={{ color: '#8B7355' }}>{product.titleEn}</p>
                        </div>

                        {/* Divider */}
                        <img src={horizontalDashedLine} alt="" className="w-full my-4" />

                        {/* Product Description */}
                        {product.description && (
                            <div>
                                <h3 className="text-xl font-bold text-[#8B7355] mb-3">产品介绍:</h3>
                                <p className="product-detail-content">{product.description}</p>
                            </div>
                        )}

                        {/* Divider */}
                        <img src={horizontalDashedLine} alt="" className="w-full my-4" />

                        {/* Specifications */}
                        {product.specifications && (
                            <div>
                                <h3 className="text-xl font-bold text-[#8B7355] mb-3">规格:</h3>
                                <p className="product-detail-content">{product.specifications}</p>
                            </div>
                        )}

                        {/* Divider */}
                        <img src={horizontalDashedLine} alt="" className="w-full my-4" />

                        {/* Ingredients */}
                        {product.ingredients && (
                            <div>
                                <h3 className="text-xl font-bold text-[#8B7355] mb-3">组成:</h3>
                                <p className="product-detail-content">{product.ingredients}</p>
                            </div>
                        )}

                        {/* Divider */}
                        <img src={horizontalDashedLine} alt="" className="w-full my-4" />

                        {/* Purchase Links */}
                        {product.purchaseLinks && (
                            <div>
                                <h3 className="text-xl font-bold text-[#8B7355] mb-4">购买:</h3>
                                <div className="flex gap-4">
                                    {product.purchaseLinks.tmall && (
                                        <a
                                            href={product.purchaseLinks.tmall}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className=" text-white rounded-full font-medium hover:bg-[#6d5a42] transition flex items-center justify-center"
                                            style={{ width: '150px', height: '60px', fontSize: '18px', backgroundColor: '#946621' }}
                                        >
                                            天猫
                                        </a>
                                    )}
                                    {product.purchaseLinks.jd && (
                                        <a
                                            href={product.purchaseLinks.jd}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className=" text-white rounded-full font-medium hover:bg-[#6d5a42] transition flex items-center justify-center"
                                            style={{ width: '150px', height: '60px', fontSize: '18px', backgroundColor: '#946621' }}
                                        >
                                            京东
                                        </a>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
