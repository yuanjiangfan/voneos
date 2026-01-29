import React from 'react';
import { useLoading } from './LoadingContext';

export const PageLoader: React.FC = () => {
    const { isLoading } = useLoading();

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#FFF8F0] transition-opacity duration-500">
            <div className="flex flex-col items-center">
                {/* Loading Spinner */}
                <div className="relative w-20 h-20">
                    <div className="absolute inset-0 border-4 border-[#C8A97E]/20 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-[#C8A97E] border-t-transparent rounded-full animate-spin"></div>
                </div>

                {/* Loading Text */}
                <div className="mt-8 flex flex-col items-center">
                    <span className="text-[#C8A97E] text-xs tracking-[0.3em] font-light animate-pulse">
                        VONEOS
                    </span>
                    <span className="mt-2 text-[#8C7B65] text-[10px] tracking-widest uppercase opacity-60">
                        加载中...
                    </span>
                </div>
            </div>
        </div>
    );
};
