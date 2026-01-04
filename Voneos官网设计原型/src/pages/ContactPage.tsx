import React from 'react';
import banner from '../assets/联系我们页/联系我们.png';
import xiaohongshu from '../assets/联系我们页/小红书.png';
import douyin from '../assets/联系我们页/抖音.png';
import videoChannel from '../assets/联系我们页/视频号.png';
import wechat from '../assets/联系我们页/微信公众号.png';
import tmall from '../assets/联系我们页/天猫商城.png';
import jd from '../assets/联系我们页/京东商城.png';
import pinduoduo from '../assets/联系我们页/拼多多商城.png';

export function ContactPage() {
    const officialAccounts = [
        { name: '小红书', icon: xiaohongshu, label: '小红书' },
        { name: '抖音', icon: douyin, label: '抖音' },
        { name: '视频号', icon: videoChannel, label: '视频号' },
        { name: '微信公众号', icon: wechat, label: '微信公众号' },
    ];

    const flagshipStores = [
        { name: '天猫商城', icon: tmall, label: '天猫商城' },
        { name: '京东商城', icon: jd, label: '京东商城' },
        { name: '拼多多商城', icon: pinduoduo, label: '拼多多商城' },
    ];

    return (
        <div className="bg-[#FFF8F0] w-full" >
            {/* Hero Banner */}
            <div className="w-full relative">
                <img src={banner} alt="Contact Us Banner" className="w-full h-auto object-cover" />
            </div>

            {/* Brand Official Accounts */}
            <section className="w-full max-w-[1400px] mx-auto pb-16" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
                <h2 className="text-center font-bold mb-12" style={{ fontSize: '65px', color: '#8e5f17' }}>品牌官号</h2>
                <div className="flex justify-center flex-wrap" style={{ gap: '30px' }}>
                    {officialAccounts.map((item, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-sm w-[280px] h-[180px] flex flex-col items-center justify-center gap-4 hover:shadow-md transition-shadow">
                            {item.icon ? (
                                <img src={item.icon} alt={item.name} className="h-12 w-auto object-contain" />
                            ) : (
                                <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center text-xs text-gray-500">Logo</div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Brand Flagship Stores */}
            <div className="w-full bg-white">
                <section className="w-full max-w-[1400px] mx-auto pb-20" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
                    <h2 className="text-center font-bold mb-12" style={{ fontSize: '65px', color: '#8e5f17' }}>品牌旗舰店</h2>
                    <div className="flex justify-center flex-wrap" style={{ gap: '30px' }}>
                        {flagshipStores.map((item, index) => (
                            <div key={index} className="bg-[#F9F7F2] rounded-xl w-[280px] h-[180px] flex flex-col items-center justify-center gap-4 hover:shadow-md transition-shadow">
                                {item.icon ? (
                                    <img src={item.icon} alt={item.name} className="h-12 w-auto object-contain" />
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
