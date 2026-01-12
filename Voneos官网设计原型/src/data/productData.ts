// 导入图片资源
import productImg1 from '../assets/产品页面/产品图.png'; // 用于产品列表展示
import productDetailImg from '../assets/产品页面/详情产品.png'; // 用于产品详情页多图



export interface Product {
    id: string;
    title: string;
    titleEn?: string; // 英文标题
    subtitle: string;
    category: 'dog' | 'cat';
    subCategory?: string; // e.g., '金牌系列', '化毛膏系列', '口腔护理专区'
    image: string;
    link: string;
    // 新增字段
    showInSeriesPage?: boolean; // 是否在一级产品页面显示
    description?: string; // 产品详细介绍
    specifications?: string; // 规格信息
    ingredients?: string; // 成分/组成信息
    images?: string[]; // 产品多图(用于详情页)
    purchaseLinks?: {
        tmall?: string;
        jd?: string;
    };
}

export const products: Product[] = [
    // ========== 狗狗产品 - 金罐系列 ==========
    {
        id: 'dog-1',
        title: '鲨鱼软骨素',
        titleEn: 'SHARK CHONDROITIN',
        subtitle: '宠物营养补充剂',
        category: 'dog',
        subCategory: '金罐系列',
        image: productImg1,
        link: '/products/dog/dog-1',
        showInSeriesPage: true,
        description: '创新三维软骨技术，科学益生元与鲨鱼软骨结合，实效"保护关节"+ 生物酶 + 三维协同作用，从内而外作用，滋养关节健康，守护爱犬活力。',
        specifications: '160粒 × 55g',
        ingredients: '鸡肉粉、国产牛肉粉、鲨鱼软骨粉、益生元、玉米淀粉、豆类蛋白纤维、木薯淀粉、甘油、山梨酸钾',
        images: [productDetailImg, productDetailImg, productDetailImg, productDetailImg],
        purchaseLinks: {
            tmall: '#',
            jd: '#'
        }
    },
    {
        id: 'dog-2',
        title: '深海鱼油',
        subtitle: '宠物营养补充剂',
        category: 'dog',
        subCategory: '金罐系列',
        image: productImg1,
        link: '/products/dog/dog-2',
        showInSeriesPage: true,
        description: '精选深海鱼油，富含Omega-3脂肪酸，有效促进毛发健康，增强免疫力，保护心脏健康，让爱犬拥有亮丽毛发和强健体魄。',
        specifications: '120粒 × 60g',
        ingredients: '深海鱼油、维生素E、卵磷脂、明胶、甘油、纯化水',
        images: [productImg1, productImg1, productImg1, productImg1],
        purchaseLinks: {
            tmall: '#',
            jd: '#'
        }
    },
    {
        id: 'dog-3',
        title: '益生菌片',
        subtitle: '宠物营养补充剂',
        category: 'dog',
        subCategory: '金罐系列',
        image: productImg1,
        link: '/products/dog/dog-3',
        showInSeriesPage: true,
        description: '多种益生菌复合配方，有效调节肠道菌群平衡，改善消化吸收，缓解腹泻便秘，增强肠道免疫力，守护爱犬肠道健康。',
        specifications: '180粒 × 50g',
        ingredients: '益生菌粉(嗜酸乳杆菌、双歧杆菌)、益生元、酵母粉、麦芽糊精、硬脂酸镁',
        images: [productImg1, productImg1, productImg1, productImg1],
        purchaseLinks: {
            tmall: '#',
            jd: '#'
        }
    },
    {
        id: 'dog-4',
        title: '钙片',
        subtitle: '宠物营养补充剂',
        category: 'dog',
        subCategory: '金罐系列',
        image: productImg1,
        link: '/products/dog/dog-4',
        showInSeriesPage: true,
        description: '科学钙磷比例配方，添加维生素D3促进钙吸收，强健骨骼，预防骨质疏松，适合成长期幼犬和老年犬补充钙质营养。',
        specifications: '200粒 × 65g',
        ingredients: '碳酸钙、磷酸氢钙、维生素D3、乳糖、硬脂酸镁、微晶纤维素',
        images: [productImg1, productImg1, productImg1, productImg1],
        purchaseLinks: {
            tmall: '#',
            jd: '#'
        }
    },
    {
        id: 'dog-5',
        title: '维生素片',
        subtitle: '宠物营养补充剂',
        category: 'dog',
        subCategory: '金罐系列',
        image: productImg1,
        link: '/products/dog/dog-5',
        description: '全面均衡的复合维生素配方，补充日常所需营养，增强体质，提升免疫力，让爱犬保持健康活力。',
        specifications: '150粒 × 55g',
        ingredients: '维生素A、维生素B族、维生素C、维生素E、叶酸、烟酸、泛酸钙',
        images: [productImg1, productImg1, productImg1, productImg1],
        purchaseLinks: {
            tmall: '#',
            jd: '#'
        }
    },
    // ========== 狗狗产品 - 化毛膏系列 ==========
    {
        id: 'dog-6',
        title: '化毛膏',
        subtitle: '宠物营养补充剂',
        category: 'dog',
        subCategory: '化毛膏系列',
        image: productImg1,
        link: '/products/dog/dog-6',
        description: '天然植物纤维配方，有效促进毛球排出，预防毛球症，保护消化道健康，适合长毛犬日常护理。',
        specifications: '120g × 1支',
        ingredients: '植物油、麦芽糊精、纤维素、卵磷脂、牛磺酸、维生素E',
        images: [productImg1, productImg1, productImg1, productImg1],
        purchaseLinks: {
            tmall: '#',
            jd: '#'
        }
    },
    {
        id: 'dog-7',
        title: '化毛营养膏',
        subtitle: '宠物营养补充剂',
        category: 'dog',
        subCategory: '化毛膏系列',
        image: productImg1,
        link: '/products/dog/dog-7',
        description: '化毛与营养双重功效，添加多种维生素和矿物质，在排出毛球的同时补充营养，全面呵护爱犬健康。',
        specifications: '150g × 1支',
        ingredients: '植物油、麦芽糊精、纤维素、复合维生素、矿物质、牛磺酸',
        images: [productImg1, productImg1, productImg1, productImg1],
        purchaseLinks: {
            tmall: '#',
            jd: '#'
        }
    },
    {
        id: 'dog-8',
        title: '化毛粉',
        subtitle: '宠物营养补充剂',
        category: 'dog',
        subCategory: '化毛膏系列',
        image: productImg1,
        link: '/products/dog/dog-8',
        description: '便捷粉末状设计，可混合食物喂食，天然纤维成分，温和促进毛球排出，日常养护更轻松。',
        specifications: '100g × 1罐',
        ingredients: '洋车前子壳粉、纤维素、益生元、酵母粉、木糖醇',
        images: [productImg1, productImg1, productImg1, productImg1],
        purchaseLinks: {
            tmall: '#',
            jd: '#'
        }
    },
    // ========== 狗狗产品 - 口腔护理专区 ==========
    {
        id: 'dog-9',
        title: '洁齿棒',
        subtitle: '宠物口腔护理',
        category: 'dog',
        subCategory: '口腔护理专区',
        image: productImg1,
        link: '/products/dog/dog-9',
        description: '特殊纹理设计，咀嚼时有效清洁牙齿，去除牙垢，清新口气，预防牙周疾病，让爱犬拥有健康牙齿。',
        specifications: '20支 × 80g',
        ingredients: '牛皮、鸡肉粉、淀粉、甘油、薄荷提取物、绿茶提取物',
        images: [productImg1, productImg1, productImg1, productImg1],
        purchaseLinks: {
            tmall: '#',
            jd: '#'
        }
    },
    {
        id: 'dog-10',
        title: '口腔清洁喷雾',
        subtitle: '宠物口腔护理',
        category: 'dog',
        subCategory: '口腔护理专区',
        image: productImg1,
        link: '/products/dog/dog-10',
        description: '温和配方，直接喷洒口腔，快速清新口气，抑制细菌滋生，日常护理简单方便，适合不配合刷牙的爱犬。',
        specifications: '100ml × 1瓶',
        ingredients: '纯化水、木糖醇、薄荷精油、茶树精油、柠檬酸',
        images: [productImg1, productImg1, productImg1, productImg1],
        purchaseLinks: {
            tmall: '#',
            jd: '#'
        }
    },
    {
        id: 'dog-11',
        title: '牙膏套装',
        subtitle: '宠物口腔护理',
        category: 'dog',
        subCategory: '口腔护理专区',
        image: productImg1,
        link: '/products/dog/dog-11',
        description: '专业宠物牙膏配套牙刷，温和清洁配方，有效去除牙垢，预防牙结石，保护牙龈健康，让爱犬牙齿洁白。',
        specifications: '牙膏100g + 牙刷2支',
        ingredients: '水、山梨醇、水合硅石、甘油、木糖醇、薄荷香精',
        images: [productImg1, productImg1, productImg1, productImg1],
        purchaseLinks: {
            tmall: '#',
            jd: '#'
        }
    },
    {
        id: 'dog-12',
        title: '漱口水',
        subtitle: '宠物口腔护理',
        category: 'dog',
        subCategory: '口腔护理专区',
        image: productImg1,
        link: '/products/dog/dog-12',
        description: '添加到饮用水中使用，持续清洁口腔，抑制牙菌斑形成，清新口气，日常护理更便捷。',
        specifications: '500ml × 1瓶',
        ingredients: '纯化水、木糖醇、氯己定、薄荷提取物、绿茶提取物',
        images: [productImg1, productImg1, productImg1, productImg1],
        purchaseLinks: {
            tmall: '#',
            jd: '#'
        }
    },
    {
        id: 'dog-13',
        title: '除口臭片',
        subtitle: '宠物口腔护理',
        category: 'dog',
        subCategory: '口腔护理专区',
        image: productImg1,
        link: '/products/dog/dog-13',
        description: '天然植物成分，从内部改善口臭问题，促进消化，调节肠胃，让爱犬口气清新自然。',
        specifications: '100片 × 50g',
        ingredients: '叶绿素、薄荷粉、香芹籽提取物、益生菌、酵母粉',
        images: [productImg1, productImg1, productImg1, productImg1],
        purchaseLinks: {
            tmall: '#',
            jd: '#'
        }
    },

    // ========== 猫猫产品 - 金罐系列 ==========
    {
        id: 'cat-1',
        title: '牛磺酸片',
        subtitle: '宠物营养补充剂',
        category: 'cat',
        subCategory: '金罐系列',
        image: productImg1,
        link: '/products/cat/cat-1',
        showInSeriesPage: true,
        description: '高纯度牛磺酸配方，保护视力健康，增强心脏功能，促进大脑发育，是猫咪必需的重要营养素。',
        specifications: '180粒 × 60g',
        ingredients: '牛磺酸、维生素B6、叶酸、硬脂酸镁、微晶纤维素',
        images: [productImg1, productImg1, productImg1, productImg1],
        purchaseLinks: {
            tmall: '#',
            jd: '#'
        }
    },
    {
        id: 'cat-2',
        title: '深海鱼油',
        subtitle: '宠物营养补充剂',
        category: 'cat',
        subCategory: '金罐系列',
        image: productImg1,
        link: '/products/cat/cat-2',
        showInSeriesPage: true,
        description: '精选深海鱼油，富含Omega-3脂肪酸，促进毛发光泽，保护心血管健康，增强免疫力，让爱猫更健康。',
        specifications: '120粒 × 55g',
        ingredients: '深海鱼油、维生素E、卵磷脂、明胶、甘油、纯化水',
        images: [productImg1, productImg1, productImg1, productImg1],
        purchaseLinks: {
            tmall: '#',
            jd: '#'
        }
    },
    {
        id: 'cat-3',
        title: '益生菌片',
        subtitle: '宠物营养补充剂',
        category: 'cat',
        subCategory: '金罐系列',
        image: productImg1,
        link: '/products/cat/cat-3',
        showInSeriesPage: true,
        description: '猫咪专用益生菌配方，调节肠道菌群，改善消化吸收，缓解软便腹泻，增强肠道免疫力。',
        specifications: '160粒 × 45g',
        ingredients: '益生菌粉(嗜酸乳杆菌、双歧杆菌)、益生元、酵母粉、麦芽糊精、硬脂酸镁',
        images: [productImg1, productImg1, productImg1, productImg1],
        purchaseLinks: {
            tmall: '#',
            jd: '#'
        }
    },
    {
        id: 'cat-4',
        title: '钙片',
        subtitle: '宠物营养补充剂',
        category: 'cat',
        subCategory: '金罐系列',
        image: productImg1,
        link: '/products/cat/cat-4',
        showInSeriesPage: true,
        description: '科学钙磷比例，添加维生素D3，强健骨骼，预防骨质疏松，适合幼猫和老年猫补钙。',
        specifications: '180粒 × 60g',
        ingredients: '碳酸钙、磷酸氢钙、维生素D3、乳糖、硬脂酸镁、微晶纤维素',
        images: [productImg1, productImg1, productImg1, productImg1],
        purchaseLinks: {
            tmall: '#',
            jd: '#'
        }
    },
    {
        id: 'cat-5',
        title: '维生素片',
        subtitle: '宠物营养补充剂',
        category: 'cat',
        subCategory: '金罐系列',
        image: productImg1,
        link: '/products/cat/cat-5',
        description: '猫咪专用复合维生素，全面补充营养，增强体质，提升免疫力，让爱猫健康活泼。',
        specifications: '140粒 × 50g',
        ingredients: '维生素A、维生素B族、维生素C、维生素E、牛磺酸、叶酸、烟酸',
        images: [productImg1, productImg1, productImg1, productImg1],
        purchaseLinks: {
            tmall: '#',
            jd: '#'
        }
    },
    // ========== 猫猫产品 - 化毛膏系列 ==========
    {
        id: 'cat-6',
        title: '猫草化毛片',
        subtitle: '宠物营养补充剂',
        category: 'cat',
        subCategory: '化毛膏系列',
        image: productImg1,
        link: '/products/cat/cat-6',
        description: '创新三维化毛技术，科学益生元与猫草结合，实效"保护肠道"+ 生物酶 + 三维协同作用，从内而外作用，滋养肠道健康，守护爱猫活力。',
        specifications: '160粒 × 55g',
        ingredients: '猫草粉、纤维素、益生元、植物油、卵磷脂、牛磺酸',
        images: [productImg1, productImg1, productImg1, productImg1],
        purchaseLinks: {
            tmall: '#',
            jd: '#'
        }
    },
    {
        id: 'cat-7',
        title: '化毛膏',
        subtitle: '宠物营养补充剂',
        category: 'cat',
        subCategory: '化毛膏系列',
        image: productImg1,
        link: '/products/cat/cat-7',
        description: '经典化毛膏配方，天然植物纤维，有效促进毛球排出，预防毛球症，保护消化道健康。',
        specifications: '120g × 1支',
        ingredients: '植物油、麦芽糊精、纤维素、卵磷脂、牛磺酸、维生素E',
        images: [productImg1, productImg1, productImg1, productImg1],
        purchaseLinks: {
            tmall: '#',
            jd: '#'
        }
    },
    {
        id: 'cat-8',
        title: '化毛营养膏',
        subtitle: '宠物营养补充剂',
        category: 'cat',
        subCategory: '化毛膏系列',
        image: productImg1,
        link: '/products/cat/cat-8',
        description: '化毛与营养双重功效，添加牛磺酸和多种维生素，在排出毛球的同时补充营养，全面呵护爱猫健康。',
        specifications: '150g × 1支',
        ingredients: '植物油、麦芽糊精、纤维素、牛磺酸、复合维生素、矿物质',
        images: [productImg1, productImg1, productImg1, productImg1],
        purchaseLinks: {
            tmall: '#',
            jd: '#'
        }
    },
    {
        id: 'cat-9',
        title: '化毛粉',
        subtitle: '宠物营养补充剂',
        category: 'cat',
        subCategory: '化毛膏系列',
        image: productImg1,
        link: '/products/cat/cat-9',
        description: '便捷粉末状设计，可混合食物喂食，天然纤维成分，温和促进毛球排出，日常养护更轻松。',
        specifications: '100g × 1罐',
        ingredients: '洋车前子壳粉、纤维素、益生元、酵母粉、木糖醇、牛磺酸',
        images: [productImg1, productImg1, productImg1, productImg1],
        purchaseLinks: {
            tmall: '#',
            jd: '#'
        }
    },
    {
        id: 'cat-10',
        title: '化毛零食',
        subtitle: '宠物营养补充剂',
        category: 'cat',
        subCategory: '化毛膏系列',
        image: productImg1,
        link: '/products/cat/cat-10',
        description: '美味零食形式，猫咪爱吃，添加化毛成分，边吃边化毛，让护理变成享受。',
        specifications: '150g × 1袋',
        ingredients: '鸡肉、纤维素、猫草粉、牛磺酸、维生素E、甘油',
        images: [productImg1, productImg1, productImg1, productImg1],
        purchaseLinks: {
            tmall: '#',
            jd: '#'
        }
    },
    // ========== 猫猫产品 - 口腔护理专区 ==========
    {
        id: 'cat-11',
        title: '洁齿零食',
        subtitle: '宠物口腔护理',
        category: 'cat',
        subCategory: '口腔护理专区',
        image: productImg1,
        link: '/products/cat/cat-11',
        description: '美味洁齿零食，特殊纹理设计，咀嚼时清洁牙齿，去除牙垢，清新口气，让爱猫牙齿健康。',
        specifications: '100g × 1袋',
        ingredients: '鸡肉、鱼肉、纤维素、薄荷提取物、绿茶提取物、牛磺酸',
        images: [productImg1, productImg1, productImg1, productImg1],
        purchaseLinks: {
            tmall: '#',
            jd: '#'
        }
    },
    {
        id: 'cat-12',
        title: '口腔清洁喷雾',
        subtitle: '宠物口腔护理',
        category: 'cat',
        subCategory: '口腔护理专区',
        image: productImg1,
        link: '/products/cat/cat-12',
        description: '猫咪专用口腔喷雾，温和配方，快速清新口气，抑制细菌，日常护理简单方便。',
        specifications: '80ml × 1瓶',
        ingredients: '纯化水、木糖醇、薄荷精油、茶树精油、柠檬酸',
        images: [productImg1, productImg1, productImg1, productImg1],
        purchaseLinks: {
            tmall: '#',
            jd: '#'
        }
    },
    {
        id: 'cat-13',
        title: '牙膏套装',
        subtitle: '宠物口腔护理',
        category: 'cat',
        subCategory: '口腔护理专区',
        image: productImg1,
        link: '/products/cat/cat-13',
        description: '猫咪专用牙膏配套指套牙刷，温和清洁配方，有效去除牙垢，保护牙龈健康。',
        specifications: '牙膏80g + 指套牙刷2个',
        ingredients: '水、山梨醇、水合硅石、甘油、木糖醇、鱼肉香精',
        images: [productImg1, productImg1, productImg1, productImg1],
        purchaseLinks: {
            tmall: '#',
            jd: '#'
        }
    },
    {
        id: 'cat-14',
        title: '漱口水',
        subtitle: '宠物口腔护理',
        category: 'cat',
        subCategory: '口腔护理专区',
        image: productImg1,
        link: '/products/cat/cat-14',
        description: '添加到饮用水中使用，持续清洁口腔，抑制牙菌斑，清新口气，日常护理更便捷。',
        specifications: '400ml × 1瓶',
        ingredients: '纯化水、木糖醇、氯己定、薄荷提取物、绿茶提取物',
        images: [productImg1, productImg1, productImg1, productImg1],
        purchaseLinks: {
            tmall: '#',
            jd: '#'
        }
    },
    {
        id: 'cat-15',
        title: '除口臭片',
        subtitle: '宠物口腔护理',
        category: 'cat',
        subCategory: '口腔护理专区',
        image: productImg1,
        link: '/products/cat/cat-15',
        description: '天然植物成分，从内部改善口臭问题，促进消化，调节肠胃，让爱猫口气清新自然。',
        specifications: '90片 × 45g',
        ingredients: '叶绿素、薄荷粉、香芹籽提取物、益生菌、酵母粉、牛磺酸',
        images: [productImg1, productImg1, productImg1, productImg1],
        purchaseLinks: {
            tmall: '#',
            jd: '#'
        }
    }
];

export const categories = [
    {
        id: 'dog',
        label: '犬用',
        enLabel: 'FOR DOGS',
        description: '科学营养，爱犬之选'
    },
    {
        id: 'cat',
        label: '猫用',
        enLabel: 'FOR CATS',
        description: '科学营养，爱猫之选'
    }
];
