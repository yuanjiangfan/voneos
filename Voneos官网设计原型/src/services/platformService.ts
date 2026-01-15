import { supabase } from '../lib/supabase';
import { debugLog } from '../lib/debug';

// 数据库表类型定义 (匹配API文档)
export interface PlatformDB {
    id: number;
    platform_name: string;                    // 平台名称
    type: "qr" | 'link';    // 类型: 电商 | 社交
    link: string;                     // 平台链接
    icon_url: string | null;         // 图标URL
    sort_order: number;
    qrcode_url: string | null;        //二维码url
    is_active: boolean;
}

// 前端使用的类型
export interface Platform {
    id: number;
    name: string;
    type: 'social' | 'ecommerce';  // 映射后的类型：social(社交媒体) | ecommerce(电商平台)
    url: string;              // 电商:商品链接 | 社交:二维码URL
    qrcodeUrl?: string;       // 社交媒体二维码图片URL(独立字段)
    iconUrl?: string;         // 平台图标URL
    sortOrder: number;
}

/**
 * 数据映射辅助函数：将数据库格式转换为前端格式
 */
function mapPlatformData(item: PlatformDB): Platform {
    // 类型映射：qr -> social, link -> ecommerce
    const mappedType = item.type === 'qr' ? 'social' : 'ecommerce';

    return {
        id: item.id,
        name: item.platform_name,
        type: mappedType,
        url: mappedType === 'ecommerce' ? item.link : (item.qrcode_url || ''),
        qrcodeUrl: item.qrcode_url || undefined,
        iconUrl: item.icon_url,
        sortOrder: item.sort_order
    };
}

/**
 * 获取所有平台
 */
export async function getAllPlatforms(): Promise<Platform[]> {
    try {
        const { data, error } = await supabase
            .from('platforms')
            .select('*')
            .eq('is_active', true)
            .order('sort_order', { ascending: true });

        if (error) {
            console.error('Error fetching platforms:', error);
            return [];
        }

        debugLog('getAllPlatforms - 原始数据:', data);

        const result = (data || []).map(mapPlatformData);

        debugLog('getAllPlatforms - 转换后结果:', result);
        debugLog('getAllPlatforms - 总数:', result.length);

        return result;
    } catch (error) {
        console.error('Exception fetching platforms:', error);
        return [];
    }
}

/**
 * 按类型获取平台
 */
export async function getPlatformsByType(type: 'qr' | 'link'): Promise<Platform[]> {
    try {
        debugLog('getPlatformsByType - 查询类型:', type);

        const { data, error } = await supabase
            .from('platforms')
            .select('*')
            .eq('type', type)
            .eq('is_active', true)
            .order('sort_order', { ascending: true });

        if (error) {
            console.error('Error fetching platforms by type:', error);
            return [];
        }

        debugLog('getPlatformsByType - 原始数据:', data);

        const result = (data || []).map(mapPlatformData);

        debugLog('getPlatformsByType - 转换后结果:', result);
        debugLog('getPlatformsByType - 总数:', result.length);

        return result;
    } catch (error) {
        console.error('Exception fetching platforms by type:', error);
        return [];
    }
}
