import React, { useState, useEffect } from 'react';
import { getContactPlatformsByType, Platform } from '../services/platformService';
import banner from '../assets/联系我们页/联系我们.png';

export function ContactPage() {
    const [officialAccounts, setOfficialAccounts] = useState<Platform[]>([]);
    const [flagshipStores, setFlagshipStores] = useState<Platform[]>([]);

    useEffect(() => {
        const fetchPlatforms = async () => {
            const [accounts, stores] = await Promise.all([
                getContactPlatformsByType('official_account'),
                getContactPlatformsByType('flagship_store')
            ]);
            setOfficialAccounts(accounts);
            setFlagshipStores(stores);
        };
        fetchPlatforms();
    }, []);

    return (
        <div className="bg-[#FFF8F0] w-full" style={{ zoom: 0.75 } as React.CSSProperties}>
            {/* Hero Banner */}
            <div className="w-full relative">
                <img src={banner} alt="Contact Us Banner" className="w-full h-auto object-cover" />
            </div>

            {/* Brand Official Accounts */}
            <section className="w-full max-w-[1400px] mx-auto pb-16 contact-section">
                <h2 className="text-center font-bold mb-12 contact-section-title">品牌官号</h2>
                <div className="flex justify-center flex-wrap contact-card-grid gap-6">
                    {officialAccounts.map((item, index) => (
                        <div key={index}
                            onClick={() => item.link && window.open(item.link, '_blank')}
                            className={`bg-white rounded-xl shadow-sm w-[280px] h-[180px] flex flex-col items-center justify-center gap-4 transition-all duration-300 group ${item.link
                                ? 'cursor-pointer hover:shadow-lg hover:-translate-y-1 active:scale-95 hover:border-[#8E5E16]/30 border border-transparent'
                                : 'cursor-default hover:shadow-md'
                                }`}
                        >
                            {/* 悬停时的装饰性图标/文字提示，可选 */}
                            {item.iconUrl ? (
                                <img src={item.iconUrl} alt={item.name} className="h-12 w-auto object-contain" />
                            ) : (
                                <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center text-xs text-gray-500">Logo</div>
                            )}

                        </div>
                    ))}
                </div>
            </section>

            {/* Brand Flagship Stores */}
            <div className="w-full bg-white">
                <section className="w-full max-w-[1400px] mx-auto pb-20 contact-section">
                    <h2 className="text-center font-bold mb-12 contact-section-title">品牌旗舰店</h2>
                    <div className="flex justify-center flex-wrap contact-card-grid gap-6">
                        {flagshipStores.map((item, index) => (
                            <div
                                key={index}
                                className={`bg-[#F9F7F2] rounded-xl w-[280px] h-[180px] flex flex-col items-center justify-center gap-4 transition-all duration-300 group ${item.link
                                    ? 'cursor-pointer hover:shadow-lg hover:-translate-y-1 active:scale-95 hover:bg-[#F0EBE0] border border-transparent hover:border-[#8E5E16]/30'
                                    : 'cursor-default hover:shadow-md'
                                    }`}
                                onClick={() => item.link && window.open(item.link, '_blank')}
                            >
                                {item.iconUrl ? (
                                    <img src={item.iconUrl} alt={item.name} className="h-12 w-auto object-contain" />
                                ) : (
                                    <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center text-xs text-gray-500">Logo</div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
