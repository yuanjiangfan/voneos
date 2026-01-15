import { supabase } from '../lib/supabase';
import { debugLog } from '../lib/debug';

// 数据库表类型定义 (匹配API文档)
export interface CertificateDB {
    id: number;
    name: string;                   // 证书标题
    image_url: string;               // 证书图片URL
    sort_order: number;
    is_active: boolean;
}

// 前端使用的类型
export interface Certificate {
    id: number;
    title: string;
    imageUrl: string;
    sortOrder: number;
}

/**
 * 获取所有证书
 */
export async function getAllCertificates(): Promise<Certificate[]> {
    try {
        const { data, error } = await supabase
            .from('certificates')
            .select('*')
            .eq('is_active', true)
            .order('sort_order', { ascending: true });

        if (error) {
            console.error('Error fetching certificates:', error);
            return [];
        }

        debugLog('getAllCertificates - 原始数据:', data);

        // 转换数据库格式到前端格式
        const result = (data || []).map(item => ({
            id: item.id,
            title: item.name,
            imageUrl: item.image_url,
            sortOrder: item.sort_order
        }));

        debugLog('getAllCertificates - 转换后结果:', result);
        debugLog('getAllCertificates - 总数:', result.length);

        return result;
    } catch (error) {
        console.error('Exception fetching certificates:', error);
        return [];
    }
}
