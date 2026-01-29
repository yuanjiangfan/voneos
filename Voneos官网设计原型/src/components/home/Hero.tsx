import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { getHomeBanners, Banner } from '../../services/bannerService';
import heartUnselected from '../../assets/首页/b2d60a3007e626530c4f26151cac09a610940128.png';
import heartSelected from '../../assets/首页/a67f782c8eb15f304b30c791f802f0e455953716.png';
import heroImage1 from '../../assets/首页/3b693765c88dcb52e7aee5428b483cd7fef2c78c.png';
import heroImage2 from '../../assets/首页/猫.png';

export function Hero() {
  const defaultBanners: Banner[] = [
    { id: 'local-1', title: 'Default Banner 1', imageUrl: heroImage1, sortOrder: 1 },
    { id: 'local-2', title: 'Default Banner 2', imageUrl: heroImage2, sortOrder: 2 },
    { id: 'local-3', title: 'Default Banner 3', imageUrl: "https://images.unsplash.com/photo-1616968491853-875e02f61e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXQlMjBzbGVlcGluZyUyMG9uJTIwc3VubnklMjB3aW5kb3dzaWxsfGVufDF8fHx8MTc2NTIwMDc0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", sortOrder: 3 }
  ];

  const [banners, setBanners] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Preload images to prevent flickering/reloading
  useEffect(() => {
    const urlsToPreload = [
      heroImage1,
      heroImage2,
      "https://images.unsplash.com/photo-1616968491853-875e02f61e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXQlMjBzbGVlcGluZyUyMG9uJTIwc3VubnklMjB3aW5kb3dzaWxsfGVufDF8fHx8MTc2NTIwMDc0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ];

    urlsToPreload.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  }, []);

  // Fetch banners from Supabase
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const data = await getHomeBanners();
        if (data && data.length > 0) {
          setBanners(data);
          // Preload fetched images
          data.forEach(banner => {
            const img = new Image();
            img.src = banner.imageUrl;
          });
        }
      } catch (error) {
        console.error('Failed to fetch banners:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBanners();
  }, []);

  const displayBanners = banners.length > 0 ? banners : defaultBanners;

  // Auto-switch logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayBanners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, displayBanners.length]);

  const handleManualSwitch = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-screen min-h-[600px] overflow-hidden bg-[#F5E7CB]">
      {/* Background Image Carousel */}
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 z-10"
        >
          <img
            src={displayBanners[currentIndex]?.imageUrl}
            alt={displayBanners[currentIndex]?.title || "Hero Background"}
            className="w-full h-full object-cover object-center opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-[#F5E7CB]/20" />
        </motion.div>
      </AnimatePresence>

      {/* Hidden constant images to keep browser cache active and prevent re-evaluating */}
      <div className="hidden" aria-hidden="true">
        {displayBanners.map((banner, idx) => (
          <img key={`preload-${banner.id}-${idx}`} src={banner.imageUrl} alt="" />
        ))}
      </div>

      {/* Curved Mask Area */}
      <div className="absolute -bottom-0.5 left-0 w-full z-20">
        {/* 
            Increased viewBox height to 320 and control point to 350 to create a significantly deeper/larger arc.
            This allows the 'smile' curve to be much more pronounced.
         */}
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-auto block align-bottom max-h-[25vh]" // Responsive height constraint
          preserveAspectRatio="none"
        >
          {/* 
                Path logic updated for deeper curve:
                M 0,0 -> Start Top-Left
                Q 720,350 1440,0 -> Control point at y=350 pulls the curve down deep
                V 320 -> Down to Bottom-Right
                H 0 -> Left to Bottom-Left
                Z -> Close
            */}
          <path
            fill="#F5E7CB"
            d="M0,0 Q720,350 1440,0 V320 H0 Z"
          />
        </svg>
      </div>

      {/* Hearts Container - Positioned within the beige mask area */}
      <div className="absolute bottom-4 left-0 w-full z-30 flex justify-center pb-2 md:pb-6">
        <div className="flex space-x-6 items-center">
          {displayBanners.map((_, idx) => (
            <button
              key={idx}
              onMouseEnter={() => handleManualSwitch(idx)}
              onClick={() => handleManualSwitch(idx)}
              className="group relative flex items-center justify-center focus:outline-none"
            >
              <motion.img
                src={currentIndex === idx ? heartSelected : heartUnselected}
                alt="Switch slide"
                className="w-6 h-6 object-contain"
                animate={{
                  scale: currentIndex === idx ? 1.2 : 1
                }}
                transition={{ duration: 0.3 }}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
