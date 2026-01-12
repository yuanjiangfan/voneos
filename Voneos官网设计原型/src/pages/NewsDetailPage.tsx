import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { NewsItem, getNewsById, getHotNews, incrementNewsViews } from '../services/newsService';
import bannerImg from '../assets/新闻动态/banner 拷贝 2.png';
import dividerLine from '../assets/虚线/横虚线.png';
import backupImg from '../assets/新闻动态/返回列表.png';

// 新闻详情页面组件
export function NewsDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [news, setNews] = useState<NewsItem | null>(null);
  const [hotNews, setHotNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  // 加载新闻详情
  useEffect(() => {
    const loadNews = async () => {
      if (!id) return;

      setLoading(true);
      const newsId = parseInt(id);
      const data = await getNewsById(newsId);
      setNews(data);
      setLoading(false);

      // 增加浏览量
      if (data) {
        incrementNewsViews(newsId);
      }
    };

    loadNews();
  }, [id]);

  // 加载热门新闻
  useEffect(() => {
    const loadHotNews = async () => {
      const data = await getHotNews();
      setHotNews(data);
    };

    loadHotNews();
  }, []);

  // 获取上一篇和下一篇新闻（暂时设为 null，需要从服务器获取相邻新闻）
  // TODO: 可以通过 getAllNews 然后找到当前新闻的索引来实现
  const prevNews: NewsItem | null = null;
  const nextNews: NewsItem | null = null;

  // 图片加载错误处理
  const handleImageError = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = 'https://via.placeholder.com/800x600?text=图片加载失败';
  }, []);

  // 平滑滚动到顶部
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // 返回新闻列表
  const handleBackToList = useCallback(() => {
    navigate('/news');
  }, [navigate]);

  if (!news) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">新闻未找到</h2>
          <Link
            to="/news"
            className="inline-flex items-center text-[#8E5E16] hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回新闻列表
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white w-full min-h-screen">
      {/* Hero Banner */}
      <section className="w-full relative">
        <img src={bannerImg} alt="新闻动态" className="w-full h-auto object-cover" />
      </section>

      {/* Breadcrumb Navigation */}
      <div className="w-full mx-auto pb-16 mb-8" style={{ maxWidth: '1700px' }}>
        <nav className="flex items-center text-sm text-slate-600">
          <Link to="/" className="hover:text-[#8E5E16] transition-colors">
            首页
          </Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link to="/news" className="hover:text-[#8E5E16] transition-colors">
            新闻动态
          </Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-[#8E5E16] font-medium">新闻详情</span>
        </nav>
      </div>

      {/* Article Content */}
      <div className="w-full mx-auto pb-16" style={{ maxWidth: '1700px' }}>
        <div className="flex flex-row gap-6 sm:gap-8 lg:gap-16">
          {/* Left Side - Main Article Content */}
          <div className="flex-1 min-w-0 bg-white">
            {/* Article Header */}
            <div className="px-8 md:px-12 pt-10 pb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-5xl font-bold text-[#8E5E16] mb-6 leading-tight" style={{ fontSize: '3rem' }}>
                  {news.title}
                </h1>

                <div className="flex items-center gap-6 text-base text-slate-400">
                  <span>发布时间：{news.date}</span>
                  <span>阅读量：{news.views}</span>
                </div>
              </motion.div>
            </div>

            {/* 顶部分隔线 */}
            <div className="px-8 md:px-12 mb-6">
              <img
                src={dividerLine}
                alt="分隔线"
                className="w-full h-auto"
                onError={handleImageError}
              />
            </div>

            {/* Article Body */}
            <div className="px-8 md:px-12 mb-6">
              <p className="text-slate-700 indent-8" style={{ fontSize: '21px', lineHeight: '38px' }}>
                {news.excerpt}
              </p>
            </div>

            <div className="px-8 md:px-12 py-6 mb-6">
              {news.sections && news.sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  className="mb-10"
                >
                  {/* Section Title */}
                  <h2 className="text-xl font-bold text-slate-800 mb-6">
                    {section.subtitle}
                  </h2>

                  {/* Section Content */}
                  <div className="text-slate-700 space-y-4 mb-6">
                    {section.content.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="indent-8" style={{ fontSize: '21px', lineHeight: '38px' }}>
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Section Image */}
                  {section.image != null && (
                    <div className="my-6 overflow-hidden mb-6">
                      <img
                        src={section.image}
                        alt={section.subtitle}
                        className="w-full h-auto object-cover"
                        onError={handleImageError}
                        loading="lazy"
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* 底部分隔线 */}
            <div className="px-8 md:px-12 pb-8 mb-6">
              <img
                src={dividerLine}
                alt="分隔线"
                className="w-full h-auto"
                onError={handleImageError}
              />
            </div>

            {/* Navigation Buttons */}
            <div className="px-8 md:px-12 flex justify-between items-center mb-8">
              {/* Previous & Next Article */}
              <div className="flex flex-col gap-3 max-w-lg">
                {prevNews && (
                  <Link
                    to={`/news/${prevNews.id}`}
                    onClick={scrollToTop}
                    className="text-2xl text-slate-600 hover:text-[#8E5E16] transition-colors flex items-center gap-1 line-clamp-1"
                  >
                    <span title={nextNews.title}>上一篇：{prevNews.title}</span>
                  </Link>
                )}
                {nextNews && (
                  <Link
                    to={`/news/${nextNews.id}`}
                    onClick={scrollToTop}
                    className="text-2xl text-slate-600 hover:text-[#8E5E16] transition-colors flex items-center gap-1 line-clamp-1"
                  >
                    <span title={nextNews.title}>下一篇：{nextNews.title}</span>
                  </Link>
                )}
              </div>

              {/* Back to List Button */}
              <button
                onClick={handleBackToList}
                className="relative inline-block transition-all hover:scale-105"
              >
                <img
                  src={backupImg}
                  alt="按钮背景"
                  className="h-11 w-auto object-contain"
                />
                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-sm font-medium whitespace-nowrap">
                  返回列表
                </span>
              </button>
            </div>
          </div>

          {/* Right Side - Hot News Sidebar */}
          <div className="bg-white p-6 sticky top-24" style={{ width: '350px', flexShrink: 0 }}>
            <h3 className="text-3xl font-bold text-[#8E5E16] mb-6 pb-3 border-b border-slate-200">
              热门资讯
            </h3>
            <div className="flex flex-col gap-6">
              {hotNews.map(hotNewsItem => (
                <Link
                  key={hotNewsItem.id}
                  to={`/news/${hotNewsItem.id}`}
                  onClick={scrollToTop}
                >
                  <motion.div
                    className="group cursor-pointer overflow-hidden transition-all"
                    style={{ backgroundColor: '#F8F6F0', display: 'flex', flexDirection: 'column' }}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* 图片区域 */}
                    <div className="relative overflow-hidden" style={{ height: '200px', flexShrink: 0 }}>
                      <img
                        src={hotNewsItem.image}
                        alt={hotNewsItem.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        onError={handleImageError}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </div>

                    {/* 内容区域 */}
                    <div className="p-6 flex flex-col">
                      {/* 新闻标题区域 */}
                      <div className="overflow-hidden">
                        <h3 className="text-lg md:text-xl font-bold text-[#8E5E16] text-left leading-7 group-hover:text-[#6d4810] transition-colors line-clamp-2 md-4" title={hotNewsItem.title}>
                          {hotNewsItem.title}
                        </h3>
                      </div>

                      {/* 日期区域 */}
                      <div className="flex items-end mt-4">
                        <div className="flex items-end text-sm text-slate-400 gap-2">
                          <img
                            src="/src/assets/新闻动态/矢量智能对象-2.png"
                            alt="日历"
                            className="w-6 h-6 object-contain opacity-70"
                          />
                          <span>{hotNewsItem.date}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
