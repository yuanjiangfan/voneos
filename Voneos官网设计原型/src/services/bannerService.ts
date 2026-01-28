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
            return getFallbackBanners();
        }

        console.log('getHomeBanners - 原始数据:', data);

        const result = (data || []).map(mapBannerData);

        console.log('getHomeBanners - 转换后结果:', result);

        if (result.length === 0) {
            return getFallbackBanners();
        }

        return result;
    } catch (error) {
        console.error('Exception fetching banners:', error);
        return getFallbackBanners();
    }
}

/**
 * 降级数据：当后端无数据或出错时使用，确保开发演示正常
 */
function getFallbackBanners(): Banner[] {
    // 这里的图片路径需要注意，原来的 Hero.tsx 是 import 导入的
    // 在 service 中无法使用 import 图片，这里只能返回空或者特定的 URL
    // 但为了让 Hero 组件能工作，我们可以约定如果 service 返回空，Hero 组件使用默认图片
    // 或者在这里返回一些占位图。如果是本地开发，Vite 会处理 public 目录下的图片。
    // 由于我们想要让组件层处理 import 的本地图片（为了 hash），
    // 这里的 fallback 最好只返回结构，或者让组件自己处理数据为空的情况。

    // 策略：Service 尽量返回真实数据。如果失败返回空数组。
    // 组件层检测到空数组时，使用默认的 import 图片。
    return [];
}
