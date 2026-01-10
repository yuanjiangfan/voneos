import { supabase } from '../lib/supabase';

// 数据库表类型定义
export interface NewsItemDB {
  id: number;
  created_at: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  featured: boolean;
  views: number;
}

export interface NewsSectionDB {
  id: number;
  created_at: string;
  subtitle: string;
  image: string;
  content: string;
  news_item_id: number;
}

// 前端使用的类型（兼容现有代码）
export interface NewsItem {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  featured: boolean;
  views: number;
  sections?: NewsSection[];
}

export interface NewsSection {
  subtitle: string;
  image: string;
  content: string;
}

/**
 * 获取所有新闻列表
 */
export async function getAllNews(): Promise<NewsItem[]> {
  try {
    const { data, error } = await supabase
      .from('news_item')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching news:', error);
      return [];
    }

    console.log('getAllNews - 原始数据:', data);

    // 转换数据库格式到前端格式
    const result = (data || []).map(item => ({
      id: item.id,
      title: item.title,
      date: item.date,
      excerpt: item.excerpt,
      image: item.image,
      category: item.category,
      author: item.author,
      featured: item.featured,
      views: item.views
    }));

    console.log('getAllNews - 转换后结果:', result);
    console.log('getAllNews - 总数:', result.length);

    return result;
  } catch (error) {
    console.error('Exception fetching news:', error);
    return [];
  }
}

/**
 * 获取特色新闻（用于轮播）
 */
export async function getFeaturedNews(): Promise<NewsItem[]> {
  try {
    const { data, error } = await supabase
      .from('news_item')
      .select('*')
      .eq('featured', true)
      .order('created_at', { ascending: false })
      .limit(5);

    if (error) {
      console.error('Error fetching featured news:', error);
      return [];
    }

    console.log('getFeaturedNews - 原始数据:', data);

    const result = (data || []).map(item => ({
      id: item.id,
      title: item.title,
      date: item.date,
      excerpt: item.excerpt,
      image: item.image,
      category: item.category,
      author: item.author,
      featured: item.featured,
      views: item.views
    }));

    console.log('getFeaturedNews - 转换后结果:', result);
    console.log('getFeaturedNews - 总数:', result.length);

    return result;
  } catch (error) {
    console.error('Exception fetching featured news:', error);
    return [];
  }
}

/**
 * 获取热门资讯（按浏览量排序，取前3条）
 */
export async function getHotNews(): Promise<NewsItem[]> {
  try {
    const { data, error } = await supabase
      .from('news_item')
      .select('*')
      .order('views', { ascending: false })
      .limit(3);

    if (error) {
      console.error('Error fetching hot news:', error);
      return [];
    }

    console.log('getHotNews - 原始数据:', data);

    const result = (data || []).map(item => ({
      id: item.id,
      title: item.title,
      date: item.date,
      excerpt: item.excerpt,
      image: item.image,
      category: item.category,
      author: item.author,
      featured: item.featured,
      views: item.views
    }));

    console.log('getHotNews - 转换后结果:', result);
    console.log('getHotNews - 总数:', result.length);

    return result;
  } catch (error) {
    console.error('Exception fetching hot news:', error);
    return [];
  }
}

/**
 * 根据ID获取单条新闻及其段落
 */
export async function getNewsById(id: number): Promise<NewsItem | null> {
  try {
    console.log('getNewsById - 查询ID:', id);

    // 获取新闻主体
    const { data: newsData, error: newsError } = await supabase
      .from('news_item')
      .select('*')
      .eq('id', id)
      .single();

    if (newsError || !newsData) {
      console.error('Error fetching news by id:', newsError);
      return null;
    }

    console.log('getNewsById - 新闻主体数据:', newsData);

    // 获取新闻段落
    const { data: sectionsData, error: sectionsError } = await supabase
      .from('news_sections')
      .select('*')
      .eq('news_item_id', id)
      .order('id', { ascending: true });

    if (sectionsError) {
      console.error('Error fetching news sections:', sectionsError);
    }

    console.log('getNewsById - 新闻段落数据:', sectionsData);

    // 组合数据
    const sections: NewsSection[] = (sectionsData || []).map(section => ({
      subtitle: section.subtitle,
      image: section.image,
      content: section.content
    }));

    const result = {
      id: newsData.id,
      title: newsData.title,
      date: newsData.date,
      excerpt: newsData.excerpt,
      image: newsData.image,
      category: newsData.category,
      author: newsData.author,
      featured: newsData.featured,
      views: newsData.views,
      sections
    };

    console.log('getNewsById - 完整结果:', result);
    console.log('getNewsById - 段落数量:', sections.length);

    return result;
  } catch (error) {
    console.error('Exception fetching news by id:', error);
    return null;
  }
}

/**
 * 按分类获取新闻
 */
export async function getNewsByCategory(category: string): Promise<NewsItem[]> {
  try {
    console.log('getNewsByCategory - 查询分类:', category);

    const { data, error } = await supabase
      .from('news_item')
      .select('*')
      .eq('category', category)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching news by category:', error);
      return [];
    }

    console.log('getNewsByCategory - 原始数据:', data);

    const result = (data || []).map(item => ({
      id: item.id,
      title: item.title,
      date: item.date,
      excerpt: item.excerpt,
      image: item.image,
      category: item.category,
      author: item.author,
      featured: item.featured,
      views: item.views
    }));

    console.log('getNewsByCategory - 转换后结果:', result);
    console.log('getNewsByCategory - 总数:', result.length);

    return result;
  } catch (error) {
    console.error('Exception fetching news by category:', error);
    return [];
  }
}

/**
 * 增加新闻浏览量
 */
export async function incrementNewsViews(id: number): Promise<void> {
  try {
    console.log('incrementNewsViews - 新闻ID:', id);

    // 先获取当前浏览量
    const { data, error: fetchError } = await supabase
      .from('news_item')
      .select('views')
      .eq('id', id)
      .single();

    if (fetchError || !data) {
      console.error('Error fetching current views:', fetchError);
      return;
    }

    console.log('incrementNewsViews - 当前浏览量:', data.views);

    // 更新浏览量
    const newViews = (data.views || 0) + 1;
    const { error: updateError } = await supabase
      .from('news_item')
      .update({ views: newViews })
      .eq('id', id);

    if (updateError) {
      console.error('Error updating views:', updateError);
    } else {
      console.log('incrementNewsViews - 更新后浏览量:', newViews);
    }
  } catch (error) {
    console.error('Exception incrementing views:', error);
  }
}
