import { supabase } from '../lib/supabase';

// 数据库表类型定义
export interface PlatformDB {
    id: string;
    name: string;
    label: string;
    icon_url: string;
    qrcode_url: string | null;
    link: string | null;
    type: 'official_account' | 'flagship_store' | 'qr' | 'link';
    sort_order: number;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

// 前端使用的类型
export interface Platform {
    id: string;
    name: string;
    label: string;
    iconUrl: string;
    qrcodeUrl?: string;
    link?: string;
    type: 'official_account' | 'flagship_store';
    sortOrder: number;
}

/**
 * 数据映射辅助函数
 */
function mapPlatformData(item: PlatformDB): Platform {
    // 类型转换逻辑: 
    // 1. official_account/qr/social -> official_account
    // 2. flagship_store/link/ecommerce/flagship -> flagship_store
    let mappedType: 'official_account' | 'flagship_store' = 'official_account';

    if (item.type === 'official_account' || item.type === 'qr' || (item.type as any) === 'social') {
        mappedType = 'official_account';
    } else if (item.type === 'flagship_store' || item.type === 'link' || (item.type as any) === 'ecommerce' || (item.type as any) === 'flagship') {
        mappedType = 'flagship_store';
    }

    // 链接字段兼容: 优先使用 link, 如果没有则尝试使用 url (旧字段)
    // @ts-ignore: 访问可能存在的旧字段
    const finalLink = item.link || (item as any).url || undefined;

    return {
        id: item.id,
        name: item.name,
        label: item.label,
        iconUrl: item.icon_url,
        qrcodeUrl: item.qrcode_url || undefined,
        link: finalLink,
        type: mappedType,
        sortOrder: item.sort_order
    };
}

/**
 * 获取所有启用的平台信息 (通用平台，如页脚展示)
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

        return (data || []).map(mapPlatformData);
    } catch (error) {
        console.error('Exception fetching platforms:', error);
        return [];
    }
}

/**
 * 获取联系我们页面的平台信息 (从 contact_platforms 表)
 */
export async function getContactPlatformsByType(type: 'official_account' | 'flagship_store'): Promise<Platform[]> {
    try {
        const { data, error } = await supabase
            .from('contact_platforms')
            .select('*')
            .eq('is_active', true)
            .order('sort_order', { ascending: true });

        if (error) {
            console.error(`Error fetching contact_platforms:`, error);
            return [];
        }

        // 映射后按类型过滤
        return (data || [])
            .map(mapPlatformData)
            .filter(p => p.type === type);
    } catch (error) {
        console.error(`Exception fetching contact_platforms:`, error);
        return [];
    }
}

