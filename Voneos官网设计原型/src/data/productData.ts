// 临时保留旧的导出供产品页面使用
// 这些数据将在未来从Supabase获取

// 产品类别数据
export const categories = [
    { id: 'dog', name: '犬用产品', path: '/products/dog' },
    { id: 'cat', name: '猫用产品', path: '/products/cat' }
];

// 产品接口(兼容旧代码)
export interface Product {
    id: string;
    title: string;
    titleEn?: string;
    subtitle: string;
    category: 'dog' | 'cat';
    subCategory?: string;
    image: string;
    link: string;
    showInSeriesPage?: boolean;
    description?: string;
    specifications?: string;
    ingredients?: string;
    images?: string[];
    purchaseLinks?: {
        tmall?: string;
        jd?: string;
    };
}

// 临时产品数据(将从Supabase替换)
export const products: Product[] = [];

// 注意: 此文件保留是为了兼容性,实际应使用 src/services/productService.ts
