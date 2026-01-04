import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import hoverDecoration from '../../assets/546ee9abed8018e5eb9a517c284a1d21034a08d6.png';

// Sub-component for individual Nav Links to handle hover state independently
const NavLink = ({ item, linkColor, hoverColor }: { item: { name: string; href: string }; linkColor: string; hoverColor: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const isActive =
    (item.href.startsWith('/') && location.pathname === item.href) ||
    (item.href.startsWith('#') && location.hash === item.href && isHome);

  // Determine Link Type and Props
  let linkProps: any = {};
  let Component: any = 'a';

  if (item.href === '') {
    // Non-clickable link (Undeveloped)
    Component = 'div';
    linkProps = {};
  } else if (item.href.startsWith('/')) {
    // Route Link (e.g., / or /brand)
    Component = Link;
    linkProps = { to: item.href };
  } else if (item.href.startsWith('#')) {
    // Anchor Link
    if (isHome) {
      // On Home: Scroll
      Component = 'a';
      linkProps = { href: item.href };
    } else {
      // Not on Home: Navigate to Home + Anchor
      Component = Link;
      linkProps = { to: '/' + item.href }; // e.g., /#products
    }
  }

  return (
    <Component
      {...linkProps}
      className={`relative flex flex-col items-center justify-center py-2 ${isActive ? 'text-[#8E5E16]' : linkColor
        } ${item.href ? 'cursor-pointer' : 'cursor-default'
        } ${hoverColor} transition-colors duration-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="text-sm font-bold relative z-10">{item.name}</span>
      <AnimatePresence>
        {(isHovered || isActive) && (
          <motion.img
            src={hoverDecoration}
            initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
            animate={{ clipPath: 'inset(0 0 0 0)', opacity: 1 }}
            exit={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[30px] h-auto object-contain pointer-events-none"
            alt=""
          />
        )}
      </AnimatePresence>
    </Component>
  );
};

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Only add scroll listener on homepage
    if (isHome) {
      // Initialize state based on current scroll position
      handleScroll();
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      // On non-home pages, always show as "scrolled" (full width)
      setIsScrolled(true);
    }
  }, [isHome]);

  const navLinks = [
    { name: '首页', href: '/' },
    { name: '品牌初心', href: '/brand' },
    { name: '新闻动态', href: '' },
    { name: '产品系列', href: '' },
    { name: '科学营养', href: '/science' },
    { name: '联系我们', href: '/contact' },
  ];

  // Colors
  const linkColor = 'text-[#DDC58C]';
  const hoverColor = 'hover:text-[#8E5E16]';
  const logoColor = 'text-[#8E5E16]';

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <motion.nav
        layout
        initial={false}
        animate={{
          width: isScrolled ? '100%' : '90%',
          borderRadius: isScrolled ? '0px' : '9999px',
          y: isScrolled ? 0 : 20,
          paddingTop: '1rem',
          paddingBottom: '1rem',
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`bg-white shadow-md pointer-events-auto flex items-center justify-between px-8 md:px-12`}
        style={{
          maxWidth: isScrolled ? '100%' : '1200px'
        }}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img src="/src/assets/LOGO.png" alt="VONEOS" className="h-8 w-auto object-contain" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              item={link}
              linkColor={linkColor}
              hoverColor={hoverColor}
            />
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${logoColor}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-x-0 top-[80px] z-40 p-4 pointer-events-auto md:hidden">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 flex flex-col space-y-6 items-center"
          >
            {navLinks.map((link) => {
              // Logic for Mobile Links (Simplified version of NavLink logic)
              let Component: any = 'a';
              let props: any = {};
              if (link.href.startsWith('/')) {
                Component = Link;
                props = { to: link.href };
              } else {
                if (isHome) {
                  Component = 'a';
                  props = { href: link.href };
                } else {
                  Component = Link;
                  props = { to: '/' + link.href };
                }
              }

              return (
                <Component
                  key={link.name}
                  {...props}
                  className={`text-lg font-bold ${linkColor} ${hoverColor}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Component>
              );
            })}
          </motion.div>
        </div>
      )}
    </div>
  );
}
