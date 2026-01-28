import React from 'react';
import { motion } from 'motion/react';
import brandComposition from '../../assets/首页/3b693765c88dcb52e7aee5428b483cd7fef2c78c.png';


export function BrandStory() {
  return (
    <section
      id="brand"
      className="relative pt-20 overflow-hidden min-h-[70vh] flex items-center"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0 brand-gradient-bg" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:pr-12"
          >
            <h3 className="text-[#8B7355] font-bold mb-2 text-title-primary">
              因爱而生 · 科学健康

            </h3>
            <h4 className="text-[#8B7355] font-medium tracking-wide mb-8 uppercase text-title-secondary">
              INSPIRED BY LOVE <br />
              SCIENTIFIC HEALTH
            </h4>

            <div className="space-y-6 text-[#8B7355]/90 text-sm md:text-base leading-relaxed text-justify">
              <p>
                在VONEOS 瑞诺氏，爱是一切的开端。我们坚信，真正的健康源于自然的馈赠与科学的精研。甄选全球新鲜原材，坚持无争议添加，以纯净配方守护爱宠天性；融合天然适口成分，让营养成为它们主动追逐的美味。             </p>
              <p>
                基于爱宠不同的生命阶段与品种特质，我们构建分阶段精准营养体系，为成长的每一步提供专属呵护。我们始终以超越欧美标准的严苛品控，践行“守护爱宠健康”的初心——让每一份深爱，都有科学为证。             </p>
              <p className="font-semibold pt-2 opacity-80">
                VONEOS 瑞诺氏——因爱而生，以科学守护爱宠的长久健康。             </p>
            </div>
          </motion.div>

          {/* Image Content - Single Composite Image */}
          <div className="relative flex justify-center items-center w-full">
            <motion.div
              className="relative w-full max-w-[600px] flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src={brandComposition}
                alt="Scientific Nutrition - Dog and Cat with Golden Curve"
                className="w-full h-auto object-contain drop-shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
