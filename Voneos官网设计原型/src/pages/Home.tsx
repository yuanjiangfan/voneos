import React from 'react';
import { Hero } from '../components/home/Hero';
import { BrandStory } from '../components/home/BrandStory';
import { ProductShowcase } from '../components/home/ProductShowcase';
import { Features } from '../components/home/Features';
import { Community } from '../components/home/Community';

export function Home() {
    return (
        <main>
            <Hero />
            <BrandStory />
            <ProductShowcase />
            <Features />
            <Community />
        </main>
    );
}
