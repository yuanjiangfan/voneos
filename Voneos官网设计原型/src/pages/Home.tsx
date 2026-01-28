import React from 'react';
import { Hero } from '../components/home/Hero';
import { BrandStory } from '../components/home/BrandStory';
import { ProductShowcase } from '../components/home/ProductShowcase';
import { Features } from '../components/home/Features';
import { Community } from '../components/home/Community';

export function Home() {
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
