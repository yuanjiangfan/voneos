import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import './footer.css';

export function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/home';

  const [showBackToTop, setShowBackToTop] = React.useState(false);
  const [hoverPlatformIndex, setHoverPlatformIndex] = React.useState<number>(-1);
  const scrollThrottleRef = React.useRef<number | null>(null);

  const platforms = [
    {
      platformName: '微信',
      icon: '/src/assets/other_logo/微信.png',
      type: 'qr',
      qrcode: '/src/assets/二维码/微信二维码.png'
    },
    {
      platformName: '小红书',
      icon: '/src/assets/other_logo/小红书.png',
      type: 'qr',
      qrcode: '/src/assets/二维码/微信二维码.png'
    },
    {
      platformName: '天猫',
      icon: '/src/assets/other_logo/天猫.png',
      type: 'link',
      link: 'https://www.baidu.com'
    },
    {
      platformName: '京东',
      icon: '/src/assets/other_logo/京东.png',
      type: 'link',
      link: 'https://www.baidu.com'
    }
  ];

  const certifications = [
    { name: 'ISO认证', description: '国际标准化组织认证' },
    { name: '食品安全认证', description: '国家食品安全管理体系认证' },
    { name: '有机认证', description: '有机食品生产认证' }
  ];

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
          src={isHomePage ? "/src/assets/footer/页脚图片.png" : "/src/assets/footer/页脚.png"}
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
                <img src="/src/assets/LOGO.png" alt="VONEOS" className="brand-title" />
                <p className="brand-slogan">科学营养 • 爱宠之选</p>
              </div>
              <div className="qr-platform-group">
                <div className="platform-buttons relative flex gap-5">
                  {platforms.map((item, index) => (
                    <div
                      key={index}
                      className="platform-btn-wrapper relative"
                      onMouseEnter={() => item.type === 'qr' && setHoverPlatformIndex(index)}
                      onMouseLeave={() => setHoverPlatformIndex(-1)}
                    >
                      <img
                        className="platform-btn w-[40px] h-[40px] object-contain cursor-pointer opacity-80 hover:opacity-100 transition-opacity"
                        src={item.icon}
                        alt={item.platformName}
                        onClick={() => item.type === 'link' && openPlatformLink(item.link)}
                      />

                      {/* QR Code Popover */}
                      {item.type === 'qr' && hoverPlatformIndex === index && (
                        <div
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 p-2 bg-white rounded-lg shadow-xl z-50 animate-in fade-in zoom-in duration-200"
                        >
                          {/* Triangle Arrow */}
                          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-white"></div>

                          {/* QR Image */}
                          <div style={{ width: '76px', height: '76px' }} className="bg-white flex items-center justify-center overflow-hidden rounded">
                            <img src={item.qrcode} alt={`${item.platformName}二维码`} className="w-full h-full object-cover" />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bg pt-[50px]" >
          <div className="footer-bottom" style={{ background: "#c4a567", color: "#95621e" }}>
            <div className="container">
              <div className="bottom-content">
                <div className="copyright">
                  <p>© 2024 VONEOS瑞诺氏宠物食品有限公司 版权所有</p>
                  <p>
                    <a href="#privacy" onClick={(e) => { e.preventDefault(); navigateTo('privacy'); }}>隐私政策</a> |
                    <a href="#terms" onClick={(e) => { e.preventDefault(); navigateTo('terms'); }}>用户协议</a> |
                    <a href="#sitemap" onClick={(e) => { e.preventDefault(); navigateTo('sitemap'); }}>网站地图</a> |
                    <a href="#contact" onClick={(e) => { e.preventDefault(); navigateTo('contact'); }}>联系我们</a>
                  </p>
                </div>
                <div className="certifications">
                  {certifications.map((c, i) => (
                    <span key={i} className="cert-badge" title={c.description}>{c.name}</span>
                  ))}
                </div>
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
    </footer>
  );
}
