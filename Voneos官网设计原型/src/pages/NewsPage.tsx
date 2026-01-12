import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { newsData, NewsItem } from '../data/newsData';
import bannerImg from '../assets/新闻动态/banner 拷贝 2.png';
import brandNews from '../assets/新闻动态/品牌动态.png';
import petCharity from '../assets/新闻动态/爱宠公益.png';
import straightIine from '../assets/虚线/横虚线.png';
import circleIcon from '../assets/新闻动态/椭圆 4 拷贝.png';
import triangleIcon from '../assets/新闻动态/三角形 1.png';
import triangleIcon2 from '../assets/新闻动态/三角形 1-1.png';
import learnMoreIcon from '../assets/新闻动态/点击理解报名.png';
import dividerLine from '../assets/虚线/横虚线.png';
import heartUnselected from 'figma:asset/b2d60a3007e626530c4f26151cac09a610940128.png';
import heartSelected from 'figma:asset/a67f782c8eb15f304b30c791f802f0e455953716.png';

// 新闻轮播组件
const NewsCarousel = React.memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredNews = useMemo(() => newsData.filter(news => news.featured), []);

  // 自动播放
  useEffect(() => {
    if (featuredNews.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev: number) => (prev + 1) % featuredNews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [featuredNews.length]);

  // 手动切换
  const handleManualSwitch = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // 图片加载错误处理
  const handleImageError = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = 'https://via.placeholder.com/800x600/e2e8f0/64748b?text=图片加载中...';
  }, []);

  if (featuredNews.length === 0) {
    return (
      <div className="w-full bg-gradient-to-b from-white to-white py-10">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 text-center text-slate-500">
            暂无精选新闻
          </div>
        </div>
      </div>
    );
  }

  const currentNews = featuredNews[currentIndex];

  return (
    <div className="w-full bg-gradient-to-b from-white to-white py-10">
      <div className="container mx-auto px-2">
        <div className="relative  bg-white" style={{ minHeight: '450px' }}>
          <div
            className="relative overflow-hidden  bg-slate-50"
            style={{ height: '380px', minHeight: '380px' }}
          >
            <AnimatePresence>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 h-full w-full">
                  {/* 左边：新闻图片 */}
                  <div className="relative h-full w-full overflow-hidden bg-slate-200">
                    <img
                      src={currentNews.images[0]}
                      alt={currentNews.title}
                      className="w-full h-full object-over object-center"
                      onError={handleImageError}
                    />

                  </div>

                  {/* 右边：新闻内容 */}
                  <div className="p-6 md:p-8 lg:p-12 flex flex-col justify-between bg-[#F8F6F0] h-full">
                    <div className="flex-1 flex flex-col">
                      <div className="flex items-end text-xs text-slate-400 mb-4 gap-2">
                        <img
                          src="/src/assets/新闻动态/矢量智能对象-2.png"
                          alt="日历"
                          className="w-6 h-6 object-contain opacity-70"
                        />
                        <span>{currentNews.date}</span>
                      </div>

                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#8E5E16] mb-4 md:mb-6 leading-tight line-clamp-1" title={currentNews.title}>
                        {currentNews.title}
                      </h3>

                      <p className="text-sm md:text-base text-slate-600 mb-6 md:mb-8 leading-relaxed line-clamp-4 flex-1 max-w-full w-full">
                        {currentNews.excerpt}
                      </p>
                    </div>

                    <Link
                      to={`/news/${currentNews.id}`}
                      className="relative inline-block transition-all hover:scale-105 self-start"
                    >
                      <img
                        src={learnMoreIcon}
                        alt="按钮背景"
                        className="h-11 w-auto object-contain"
                      />
                      <span className="absolute left-5 top-1/2 -translate-y-1/2 text-[#8E5E16] text-sm font-medium whitespace-nowrap">
                        了解更多
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div>
            {/* 指示器 */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-4 z-50">
              <div className="flex gap-4 bg-white/95 backdrop-blur-sm px-6 py-3 ">
                {featuredNews.map((_: NewsItem, index: number) => (
                  <button
                    key={index}
                    onMouseEnter={() => handleManualSwitch(index)}
                    onClick={() => handleManualSwitch(index)}
                    className="group relative flex items-center justify-center focus:outline-none"
                  >
                    <motion.img
                      src={index === currentIndex ? heartSelected : heartUnselected}
                      alt={`切换到第${index + 1}张`}
                      className="w-7 h-7 object-contain"
                      transition={{ duration: 0.3 }}
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.parentElement?.querySelector('.fallback-indicator') as HTMLElement;
                        if (fallback) fallback.style.display = 'block';
                      }}
                    />
                    <div
                      className={`fallback-indicator hidden w-3 h-3 transition-all ${index === currentIndex ? 'bg-[#8E5E16] scale-125' : 'bg-slate-300 hover:bg-slate-400'
                        }`}
                      style={{ display: 'none' }}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

NewsCarousel.displayName = 'NewsCarousel';

// 新闻卡片组件（横向布局）
const NewsCard = React.memo(({ news }: { news: NewsItem }) => {
  const handleImageError = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = 'https://via.placeholder.com/800x600?text=图片加载失败';
  }, []);

  return (
    <motion.div
      className="bg-white overflow-hidden transition-all duration-300"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ x: 6 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/news/${news.id}`} className="block">
        <div className="flex h-[500px] mb-6">
          {/* 左侧内容 */}
          <div className="w-[85%] p-6 bg-white">
            <div>
              <h3 className="text-lg font-bold text-[#8E5E16] mb-8 line-clamp-1 leading-7 hover:text-[#6d4810] transition-colors" title={news.title}>
                {news.title}
              </h3>

              <p className="text-sm text-slate-600 mb-4 leading-relaxed line-clamp-3 mb-24">
                {news.excerpt}
              </p>
            </div>

            <div>
              <div className="flex items-end justify-between">
                <div className="flex items-end text-sm text-slate-400 gap-2">
                  <img
                    src="/src/assets/新闻动态/矢量智能对象-2.png"
                    alt="日历"
                    className="w-6 h-6 object-contain opacity-70"
                  />
                  <span>{news.date}</span>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧图片 - 固定宽度 */}
          <div className="w-1/3">
            <img
              src={news.images[0]}
              alt={news.title}
              onError={handleImageError}
            />
          </div>
        </div>
      </Link>
      <div>
        <img src={dividerLine} alt="分割线" className="w-full mb-4" />
      </div>
    </motion.div>
  );
});

NewsCard.displayName = 'NewsCard';

// 主页面组件
export function NewsPage() {
  const [activeCategory, setActiveCategory] = useState<'品牌动态' | '爱宠公益'>('品牌动态');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // 横向卡片布局，减少每页显示数量

  // 使用 useMemo 缓存筛选结果
  const filteredNews = useMemo(
    () => newsData.filter(news => news.category === activeCategory),
    [activeCategory]
  );

  const totalPages = Math.max(1, Math.ceil(filteredNews.length / itemsPerPage));

  // 页码自动修正
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    } else if (currentPage < 1) {
      setCurrentPage(1);
    }
  }, [currentPage, totalPages]);

  // 使用 useMemo 缓存分页数据
  const paginatedNews = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredNews.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredNews, currentPage, itemsPerPage]);

  // 使用 useCallback 缓存回调函数
  const handlePrevPage = useCallback(() => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  }, []);

  const handleNextPage = useCallback(() => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  }, [totalPages]);

  const handleCategoryChange = useCallback((category: '品牌动态' | '爱宠公益') => {
    setActiveCategory(category);
    setCurrentPage(1);
  }, []);

  // 生成分页页码
  const pageNumbers = useMemo(() => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('...');

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  }, [currentPage, totalPages]);

  const handleBannerError = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = 'https://via.placeholder.com/1920x400?text=新闻动态横幅';
  }, []);

  return (
    <div className="bg-white w-full min-h-screen">
      {/* Banner图 */}
      <div className="w-full relative mb-16">
        <img
          src={bannerImg}
          alt="新闻动态"
          className="w-full h-auto object-cover"
          onError={handleBannerError}
        />
      </div>

      {/* 新闻轮播 */}
      <NewsCarousel />

      {/* 主体内容 */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* 类别选择 */}
        <div className="flex gap-6 mb-8">
          <button
            onClick={() => handleCategoryChange('品牌动态')}
            className={`relative transition-all duration-300 ${activeCategory === '品牌动态'
              ? 'scale-105 '
              : 'opacity-60 hover:opacity-100 hover:scale-102'
              }`}
          >
            <img src={brandNews} alt="品牌动态" className="h-10 w-auto object-contain" />
            {activeCategory === '品牌动态' && (
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#8E5E16]"></div>
            )}
          </button>
          <button
            onClick={() => handleCategoryChange('爱宠公益')}
            className={`relative transition-all duration-300 ${activeCategory === '爱宠公益'
              ? 'scale-105 '
              : 'opacity-60 hover:opacity-100 hover:scale-102'
              }`}
          >
            <img src={petCharity} alt="爱宠公益" className="h-10 w-auto object-contain" />
            {activeCategory === '爱宠公益' && (
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#8E5E16]"></div>
            )}
          </button>
        </div>
        <div>
          <img src={straightIine} alt="直线" className="w-full h-auto object-cover mb-4" />
        </div>
        {/* 新闻列表 - 横向卡片布局 */}
        {filteredNews.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 bg-white">
            <p className="text-slate-500 text-lg">暂无该分类下的新闻内容</p>
          </div>
        ) : (
          <div className="flex flex-col gap-6 mb-12">
            {paginatedNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        )}

        {/* 分页 */}
        {filteredNews.length > 0 && (
          <div className="flex justify-center items-center gap-3 pb-8">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="w-10 h-10 bg-white hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center disabled:hover:bg-white"
            >
              <img
                src={triangleIcon2}
                alt="上一页"
                className="w-3 h-3 object-contain "
              />
            </button>

            {pageNumbers.map((page, index) => (
              <React.Fragment key={index}>
                {typeof page === 'number' ? (
                  <button
                    onClick={() => setCurrentPage(page)}
                    className={`relative w-10 h-10 transition-all flex items-center justify-center ${currentPage === page
                      ? 'bg-[#8E5E16]'
                      : 'bg-white hover:bg-white '
                      }`}
                  >
                    <span
                      className={`absolute text-sm font-medium z-10 ${currentPage === page ? 'text-white' : 'text-[#8E5E16]'
                        }`}
                    >
                      {page}
                    </span>
                    {currentPage === page && (
                      <img
                        src={circleIcon}
                        alt="" // 背景装饰图，无实际语义，留空符合可访问性规范
                        className="object-contain w-6 h-6 brightness-0 invert opacity-40"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'; // 图片加载失败时隐藏，避免占位符
                        }}
                      />
                    )}
                  </button>
                ) : (
                  <span className="text-slate-400 text-sm">{page}</span>
                )}
              </React.Fragment>
            ))}

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="w-10 h-10 bg-white hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center disabled:hover:bg-white"
            >
              <img src={triangleIcon} alt="下一页" className="w-3 h-3 object-contain" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
