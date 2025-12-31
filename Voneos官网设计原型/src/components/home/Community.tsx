import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/button';
import brandComposition from '../../assets/超级符号-1.png';


export function Community() {
  return (
    <section className="py-12 md:py-24 bg-white relative overflow-hidden">
      {/* Replaced 'container' with custom class for 1700px width */}
      <div className="voneos-container relative z-10">

        {/* Internal Style to bypass Tailwind JIT issues - CRITICAL FIX */}
        <style>{`
          .voneos-container {
            width: 100%;
            margin-right: auto;
            margin-left: auto;
            padding-right: 1.5rem;
            padding-left: 1.5rem;
          }
          
          .voneos-divider {
             border: none;
             border-top: 2px dashed #92641f;
             width: 100%;
             margin-bottom: 24px; /* Space between line and headline */
          }

          .voneos-headline-wrapper { margin-bottom: 3rem; width: 100%; padding-top: 16px; /* Added 16px top margin/padding */ }
          .voneos-headline-cn { font-size: 32px; line-height: 1.2; margin-bottom: 0.5rem; font-weight: 700; color: #8B7355; }
          .voneos-headline-en { font-size: 24px; line-height: 1; font-weight: 500; text-transform: uppercase; color: #8B7355; }
          .voneos-btn-recruit { width: 100%; }
          .voneos-desc { margin-bottom: 3rem; font-size: 0.875rem; line-height: 1.625; color: #4b5563; }
          .voneos-arrow-box { padding: 4px; border-radius: 9999px; background-color: #8B7355; display: inline-flex; transition: background-color 0.15s; }
          
          @media (min-width: 768px) {
            .voneos-headline-wrapper { margin-bottom: 5rem; width: 70%; }
            .voneos-headline-cn { font-size: 50px; margin-bottom: 1.5rem; }
            .voneos-headline-en { font-size: 45px; }
            .voneos-btn-recruit { width: 320px; }
            .voneos-desc { margin-bottom: 4rem; } 
            .voneos-arrow-box { padding: 8px; }
          }
          
          @media (min-width: 1700px) {
            .voneos-container {
              max-width: 1700px;
            }
          }
          /* Fallback for screens smaller than 1700 but larger than standard breakpoints to ensure it grows */
          @media (min-width: 1536px) {
             .voneos-container {
                max-width: 1700px; 
             }
          }

          /* Force icon size since Lucide props might be overridden or ignored */
          .voneos-icon-lg { width: 20px !important; height: 20px !important; color: white; }
        `}</style>

        {/* Dotted Divider Line */}
        <div className="voneos-divider"></div>

        {/* Top Section: Big Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="voneos-headline-wrapper"
        >
          <h3 className="voneos-headline-cn">
            用互动做纽带，让爱有仪式感
          </h3>
          <h4 className="voneos-headline-en">
            WE BIND WITH INTERACTION, <br />
            AND CHERISH LOVE WITH RITUALS.
          </h4>
        </motion.div>

        {/* Bottom Section: Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 items-start">
          {/* Left Content: Recruitment Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="pt-8 md:pt-12"
          >
            <div className="max-w-lg">
              <h5 className="text-[#4A4A4A] text-2xl font-bold mb-4">产品体验官招募</h5>
              <p className="voneos-desc">
                免费新品抢先体验！诚邀您家的「毛孩子试吃官」，<br />
                与我们一同完成这场关于味蕾与健康的探索～
              </p>
              <Button className="voneos-btn-recruit flex justify-between items-center bg-white hover:bg-gray-50 text-[#8B7355] border border-[#8B7355] rounded-full px-8 py-6 group transition-colors">
                <span>立即报名 · 开启体验之旅</span>
                <span className="voneos-arrow-box group-hover:bg-[#705a41]">
                  <ArrowUpRight className="voneos-icon-lg" />
                </span>
              </Button>
            </div>
          </motion.div>

          {/* Right Content: Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-[560px] max-w-full">
              <img
                src={brandComposition}
                alt="Scientific Nutrition • For Your Beloved Pets"
                className="w-full h-auto object-contain select-none"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
