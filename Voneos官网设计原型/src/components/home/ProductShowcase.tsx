import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { getHomeProducts, Product } from '../../services/productService';
import goldBottle from '../../assets/317cac038998c4e36412e5105cca95e59b17feb7.png';
import dogBadge from '../../assets/首页/841674919b79fbeb8be97f4abab0c1c54b4db2b9.png';

export function ProductShowcase() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // 从Supabase获取首页产品(is_home=true)
  useEffect(() => {
    const fetchHomeProducts = async () => {
      try {
        const data = await getHomeProducts();
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch home products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchHomeProducts();
  }, []);

  const handlePrevious = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -514, // 卡片宽度(490px) + 间距(24px)
        behavior: 'smooth'
      });
    }
  };

  const handleNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 514, // 卡片宽度(490px) + 间距(24px)
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex items-end justify-between"
        >
          <div>
            <h3 className="text-[#8B7355] font-bold text-title-primary">金冠系列</h3>
            <h4 className="text-[#C5A47E] font-medium tracking-wide uppercase text-title-secondary">GOLDEN CROWN SERIES</h4>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrevious}
              className="product-nav-button group rounded-full transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-md"
              aria-label="Previous products"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#8e5f17';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = '#8e5f17';
              }}
            >
              <ChevronLeft size={24} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
            </button>
            <button
              onClick={handleNext}
              className="product-nav-button group rounded-full transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-md"
              aria-label="Next products"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#8e5f17';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = '#8e5f17';
              }}
            >
              <ChevronRight size={24} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Product scroll container - calculated left margin to match container, allow right overflow */}
      <div className="product-scroll-wrapper" style={{ marginLeft: 'calc((100vw - 1600px) / 2)' }}>
        <div
          ref={scrollContainerRef}
          className="flex gap-6 scroll-smooth scrollbar-hide product-scroll-container"
        >
          {products.map((product, index) => (
            <Link key={`${product.id}-${index}`} to={`/products/${product.category}/${product.id}`} className="block">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative rounded-xl overflow-hidden product-card flex-shrink-0 w-[490px]"
              >
                {/* Top Left Badge - Image */}
                <div className="absolute top-5 left-5 z-20 opacity-90 product-badge-top">
                  <img src={dogBadge} alt="For Dogs Badge" className="w-full h-auto" />
                </div>

                {/* Product Image Area - Full Height with Positioning */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 product-name-container">
                  {/* Background Glow */}
                  <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-56 h-56 bg-[#F5E7CB] rounded-full blur-3xl opacity-20 w-full" />

                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-auto object-contain drop-shadow-xl translate-y-4 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Text Content - Bottom */}
                <div className="absolute bottom-0 left-0 right-0 px-6 pb-6 z-30 text-white flex flex-col justify-end bg-gradient-to-t from-black/40 to-transparent">
                  <p className="product-type-text text-white/90 tracking-wide font-normal">{product.subtitle}</p>
                  <h5 className="product-name-text font-bold tracking-wide">{product.title}</h5>

                  {/* White divider line 2px */}
                  <div className="product-divider" />

                  {/* View more button - left-right layout */}
                  <div className="flex items-center justify-between w-full">
                    <span className="product-view-more-text font-normal tracking-wide">查看更多</span>
                    {/* Custom long solid arrow - 70px */}
                    <svg width="70" height="20" viewBox="0 0 70 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Arrow line */}
                      <rect x="0" y="9" width="65" height="2" fill="white" />
                      {/* Arrow head - solid triangle */}
                      <path d="M65 10L70 10L62.5 3L65 10Z" fill="white" />
                      <path d="M65 10L70 10L62.5 17L65 10Z" fill="white" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
