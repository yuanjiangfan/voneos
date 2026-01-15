import { supabase } from '../lib/supabase';

// 数据库表类型定义
export interface ProductDB {
    id: string;
    title: string;
    title_en: string | null;
    subtitle: string;
    category: 'dog' | 'cat';
    sub_category: string | null;
    image_url: string;
    show_in_series_page: boolean;
    is_home: boolean;
    sort_order: number;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

export interface ProductDetailDB {
    product_id: string;
    description: string | null;
    specifications: string | null;
    ingredients: string | null;
    images: string[] | null;
    tmall_link: string | null;
    jd_link: string | null;
    created_at: string;
    updated_at: string;
}

// 前端使用的类型
export interface Product {
    id: string;
    title: string;
    titleEn?: string;
    subtitle: string;
    category: 'dog' | 'cat';
    subCategory?: string;
    imageUrl: string;
    showInSeriesPage: boolean;
    isHome: boolean;
    sortOrder: number;
}

export interface ProductDetail extends Product {
    description?: string;
    specifications?: string;
    ingredients?: string;
    images?: string[];
    tmallLink?: string;
    jdLink?: string;
}

/**
 * 数据映射辅助函数：将数据库格式转换为前端格式
 */
function mapProductData(item: ProductDB): Product {
    return {
        id: item.id,
        title: item.title,
        titleEn: item.title_en || undefined,
        subtitle: item.subtitle,
        category: item.category,
        subCategory: item.sub_category || undefined,
        imageUrl: item.image_url,
        showInSeriesPage: item.show_in_series_page,
        isHome: item.is_home,
        sortOrder: item.sort_order
    };
}

/**
 * 获取所有产品列表
 */
export async function getAllProducts(): Promise<Product[]> {
    try {
        const { data, error } = await supabase
            .from('products')
            .select('*')
            .eq('is_active', true)
            .order('sort_order', { ascending: true });

        if (error) {
            console.error('Error fetching products:', error);
            return [];
        }

        console.log('getAllProducts - 原始数据:', data);

        const result = (data || []).map(mapProductData);

        console.log('getAllProducts - 转换后结果:', result);
        console.log('getAllProducts - 总数:', result.length);

        return result;
    } catch (error) {
        console.error('Exception fetching products:', error);
        return [];
    }
}

/**
 * 按类别获取产品
 */
export async function getProductsByCategory(category: 'dog' | 'cat'): Promise<Product[]> {
    try {
        console.log('getProductsByCategory - 查询类别:', category);

        const { data, error } = await supabase
            .from('products')
            .select('*')
            .eq('category', category)
            .eq('is_active', true)
            .order('sort_order', { ascending: true });

        if (error) {
            console.error('Error fetching products by category:', error);
            return [];
        }

        console.log('getProductsByCategory - 原始数据:', data);

        const result = (data || []).map(mapProductData);

        console.log('getProductsByCategory - 转换后结果:', result);
        console.log('getProductsByCategory - 总数:', result.length);

        return result;
    } catch (error) {
        console.error('Exception fetching products by category:', error);
        return [];
    }
}

/**
 * 获取首页展示产品(is_home=true)
 */
export async function getHomeProducts(): Promise<Product[]> {
    try {
        const { data, error } = await supabase
            .from('products')
            .select('*')
            .eq('is_home', true)
            .eq('is_active', true)
            .order('sort_order', { ascending: true });

        if (error) {
            console.error('Error fetching home products:', error);
            return [];
        }

        console.log('getHomeProducts - 原始数据:', data);

        const result = (data || []).map(mapProductData);

        console.log('getHomeProducts - 转换后结果:', result);
        console.log('getHomeProducts - 总数:', result.length);

        return result;
    } catch (error) {
        console.error('Exception fetching home products:', error);
        return [];
    }
}

/**
 * 根据ID获取产品详情(包含详细信息)
 */
export async function getProductById(id: string): Promise<ProductDetail | null> {
    try {
        console.log('getProductById - 查询ID:', id);

        // 使用关联查询一次性获取产品基础信息和详情
        const { data, error } = await supabase
            .from('products')
            .select(`
                *,
                product_details (
                    description,
                    specifications,
                    ingredients,
                    images,
                    tmall_link,
                    jd_link
                )
            `)
            .eq('id', id)
            .single();

        if (error || !data) {
            console.error('Error fetching product by id:', error);
            return null;
        }

        console.log('getProductById - 关联查询结果:', data);

        // 提取product_details数据（Supabase返回的是数组，取第一个元素）
        const detailData = Array.isArray(data.product_details)
            ? data.product_details[0]
            : data.product_details;

        // 组合数据
        const result: ProductDetail = {
            ...mapProductData(data),
            description: detailData?.description || undefined,
            specifications: detailData?.specifications || undefined,
            ingredients: detailData?.ingredients || undefined,
            images: detailData?.images || undefined,
            tmallLink: detailData?.tmall_link || undefined,
            jdLink: detailData?.jd_link || undefined
        };

        console.log('getProductById - 完整结果:', result);

        return result;
    } catch (error) {
        console.error('Exception fetching product by id:', error);
        return null;
    }
}

/**
 * 获取系列页展示产品
 */
export async function getSeriesProducts(category?: 'dog' | 'cat'): Promise<Product[]> {
    try {
        let query = supabase
            .from('products')
            .select('*')
            .eq('show_in_series_page', true)
            .eq('is_active', true);

        if (category) {
            query = query.eq('category', category);
        }

        const { data, error } = await query.order('sort_order', { ascending: true });

        if (error) {
            console.error('Error fetching series products:', error);
            return [];
        }

        const result = (data || []).map(mapProductData);

        return result;
    } catch (error) {
        console.error('Exception fetching series products:', error);
        return [];
    }
}
