import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import goldBottle from 'figma:asset/317cac038998c4e36412e5105cca95e59b17feb7.png';
import dogBadge from '../../assets/841674919b79fbeb8be97f4abab0c1c54b4db2b9.png';

const products = [
  {
    id: 1,
    target: 'FOR DOGS',
    type: '宠物营养补充剂',
    name: '鲨鱼软骨素',
    image: goldBottle,
  },
  {
    id: 2,
    target: 'FOR DOGS',
    type: '宠物营养补充剂',
    name: '益生菌片',
    image: goldBottle,
  },
  {
    id: 3,
    target: 'FOR DOGS',
    type: '宠物营养补充剂',
    name: '深海鱼油',
    image: goldBottle,
  },
  {
    id: 4,
    target: 'FOR CATS', // Note: Using the same badge image as requested for consistency with the design update
    type: '宠物营养补充剂',
    name: '化毛膏',
    image: goldBottle,
  },
];

export function ProductShowcase() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-[#8B7355] font-bold text-title-primary">金冠系列</h3>
          <h4 className="text-[#C5A47E] font-medium tracking-wide uppercase text-title-secondary">GOLDEN CROWN SERIES</h4>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative h-[420px] rounded-xl overflow-hidden"
            >
              {/* Top Left Badge - Image */}
              <div className="absolute top-5 left-5 z-20 w-12 opacity-90">
                <img src={dogBadge} alt="For Dogs Badge" className="w-full h-auto" />
              </div>

              {/* Product Image Area - Full Height with Positioning */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[85%]">
                {/* Background Glow */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-56 h-56 bg-[#F5E7CB] rounded-full blur-3xl opacity-20" />

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-contain drop-shadow-xl translate-y-4 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text Content - Bottom 1/4 */}
              <div className="absolute bottom-0 left-0 right-0 h-1/4 px-6 pb-6 z-30 text-white flex flex-col justify-end bg-gradient-to-t from-black/40 to-transparent">
                <p className="text-xs text-white/90 mb-0.5 tracking-wide">{product.type}</p>
                <div className="flex items-end justify-between w-full">
                  <h5 className="text-xl font-bold tracking-wide">{product.name}</h5>
                  <div className="flex items-center space-x-1 mb-1 opacity-90 hover:opacity-100 cursor-pointer">
                    <span className="text-[10px] font-medium tracking-wider">查看更多</span>
                    <ArrowRight size={14} className="text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
