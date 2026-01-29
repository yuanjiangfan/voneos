import React, { useEffect } from 'react';
import { useLoading } from '../components/common/LoadingContext';
import { Hero } from '../components/home/Hero';
import { BrandStory } from '../components/home/BrandStory';
import { ProductShowcase } from '../components/home/ProductShowcase';
import { Features } from '../components/home/Features';
import { Community } from '../components/home/Community';

export function Home() {
    const { setIsLoading } = useLoading();

    useEffect(() => {
        // 首页挂载时开启全局加载，直到内部业务组件通知完成（或根据需要在此控制）
        setIsLoading(true);
    }, [setIsLoading]);

    return (
        <main style={{
            zoom: 0.75
        } as React.CSSProperties}>
            <Hero />
            <BrandStory />
            <ProductShowcase />
            <Features />
            <Community />
        </main>
    );
}
