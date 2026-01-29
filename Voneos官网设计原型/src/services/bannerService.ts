import { supabase } from '../lib/supabase';

// 数据库表类型定义
export interface BannerDB {
    id: string;
    title: string;
    image_url: string;
    link_url: string | null;
    sort_order: number;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

// 前端使用的类型
export interface Banner {
    id: string;
    title: string;
    imageUrl: string;
    linkUrl?: string;
    sortOrder: number;
}

/**
 * 数据映射辅助函数：将数据库格式转换为前端格式
 */
function mapBannerData(item: BannerDB): Banner {
    return {
        id: item.id,
        title: item.title,
        imageUrl: item.image_url,
        linkUrl: item.link_url || undefined,
        sortOrder: item.sort_order
    };
}

/**
 * 获取首页轮播图
 */
export async function getHomeBanners(): Promise<Banner[]> {
    try {
        const { data, error } = await supabase
            .from('banners')
            .select('*')
            .eq('is_active', true)
            .order('sort_order', { ascending: true });

        if (error) {
            console.error('Error fetching banners:', error);
            // 如果出错（例如表不存在），返回默认静态数据作为降级处理，保证页面不崩
            return [];
        }


        const result = (data || []).map(mapBannerData);


        return result;
    } catch (error) {
        console.error('Exception fetching banners:', error);
        return [];
    }
}
