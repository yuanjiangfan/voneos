import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLocation } from 'react-router-dom';

import footerImageHome from '../../assets/footer/页脚图片.png';
import footerImageOther from '../../assets/footer/页脚.png';
import logo from '../../assets/首页/LOGO.png';
import { getAllPlatforms, Platform } from '../../services/platformService';

export function Footer() {
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/home';

  const [showBackToTop, setShowBackToTop] = React.useState(false);
  const [hoverPlatformIndex, setHoverPlatformIndex] = React.useState<number>(-1);
  const scrollThrottleRef = React.useRef<number | null>(null);



  const openPlatformLink = (link?: string) => {
    if (!link) return;
    try {
      const ok = /^(https?:\/\/)[^\s]+$/.test(link);
      if (!ok) return;
      window.open(link, '_blank');
    } catch { }
  };

  const checkScrollPosition = () => {
    setShowBackToTop(window.scrollY > 300);
  };

  const throttleCheckScrollPosition = () => {
    if (scrollThrottleRef.current == null) {
      scrollThrottleRef.current = window.setTimeout(() => {
        checkScrollPosition();
        scrollThrottleRef.current = null;
      }, 100);
    }
  };

  // 获取平台数据
  useEffect(() => {
    const fetchPlatforms = async () => {
      const data = await getAllPlatforms();
      setPlatforms(data);
    };
    fetchPlatforms();
  }, []);

  React.useEffect(() => {
    checkScrollPosition();
    window.addEventListener('scroll', throttleCheckScrollPosition, { passive: true });
    return () => window.removeEventListener('scroll', throttleCheckScrollPosition);
  }, []);

  const navigateTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const isLightFooter = location.pathname === '/brand' || location.pathname === '/contact' || location.pathname.startsWith('/products') || location.pathname === '/news' || location.pathname.startsWith('/news/');
  return (
    <footer className="footer-container" style={isLightFooter ? { background: '#ffffff' } : {}}>
      {/* Decorative Image */}
      <div className="w-full relative z-0" >
        <img
          src={isHomePage ? footerImageHome : footerImageOther}
          alt=""
          className="w-full h-auto block align-bottom"
        />
      </div>

      {/* Footer Top - Overlapping Image with Transparent Background */}
      <div className="relative margin-top-k">
        <div className="footer-top border-none bg-transparent">
          <div className="container mx-auto">
            <div className="footer-row">

              <div className="brand-section">
                <img src={logo} alt="VONEOS" className="brand-title" />
                <p className="brand-slogan">科学营养 爱宠之选</p>
              </div>

              <div className="qr-platform-group flex flex-col items-center gap-4">
                <div className="platform-buttons relative flex gap-5">
                  {platforms.map((item, index) => (
                    <div
                      key={index}
                      className="platform-btn-wrapper relative"
                      onMouseEnter={() => item.type === 'social' && setHoverPlatformIndex(index)}
                      onMouseLeave={() => setHoverPlatformIndex(-1)}
                    >
                      <img
                        className="platform-btn w-[40px] h-[40px] object-contain cursor-pointer opacity-80 hover:opacity-100 transition-opacity"
                        src={item.iconUrl || ''}
                        alt={item.name}
                        onClick={() => item.type === 'ecommerce' && openPlatformLink(item.url)}
                      />

                      {/* QR Code Popover */}
                      {item.type === 'social' && hoverPlatformIndex === index && (
                        <div
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 p-2 bg-white rounded-lg shadow-xl z-50 animate-in fade-in zoom-in duration-200"
                        >
                          {/* Triangle Arrow */}
                          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-white"></div>

                          {/* QR Code Image */}
                          <div className="bg-white flex items-center justify-center overflow-hidden rounded footer-qr-container">
                            {item.qrcodeUrl ? (
                              <img src={item.qrcodeUrl} alt={`${item.name}二维码`} className="w-32 h-32 object-contain" />
                            ) : (
                              <div className="w-32 h-32 bg-gray-100 flex items-center justify-center text-gray-400 text-xs">{item.name}</div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                {/* Copyright Information */}
                <div className="mt-4 text-sm footer-copyright-text">
                  <p className="mb-2 font-medium">© {new Date().getFullYear()} 湖南瑞诺氏海外实验室宠物用品有限公司</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
          onClick={scrollToTop}
          aria-label="回到顶部"
        >
          <ArrowUp size={24} />
        </button>
      </div >
    </footer >
  );
}
