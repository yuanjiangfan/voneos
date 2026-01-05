import React from 'react';
import { motion } from 'motion/react';

// Imports - Asset names are based on file listing. 
// Using relative paths to ../assets/品牌初心页/
import bannerImg from '../assets/品牌初心页/banner.png';

// Culture Cards
import culture01 from '../assets/品牌初心页/01.png';
import culture02 from '../assets/品牌初心页/02展开.png';
import culture03 from '../assets/品牌初心页/03.png';

// Factory
import factoryImg from '../assets/品牌初心页/厂房.png';
import badge1 from '../assets/品牌初心页/矢量智能对象.png';
import badge2 from '../assets/品牌初心页/矢量智能对象 拷贝 2.png';
import badge3 from '../assets/品牌初心页/矢量智能对象 拷贝 4.png';
import horizontalDashedLine from '../assets/横虚线.png';

// Certs - 使用证书子目录中的图片
import cert1 from '../assets/品牌初心页/证书/证书 1.png';
import cert2 from '../assets/品牌初心页/证书/证书 2.png';
import cert3 from '../assets/品牌初心页/证书/证书 3.png';
import cert4 from '../assets/品牌初心页/证书/证书 4.png';
import cert5 from '../assets/品牌初心页/证书/证书 5.png';

// Moments (Sample selection)
import moment1 from '../assets/品牌初心页/图层 15.png';
import moment2 from '../assets/品牌初心页/图层 16.png';
import moment3 from '../assets/品牌初心页/图层 17.png';
import moment4 from '../assets/品牌初心页/图层 18.png';
import moment5 from '../assets/品牌初心页/图层 19.png';
import moment6 from '../assets/品牌初心页/图层 20.png';
import superSymbol from '../assets/品牌初心页/超级符号.png';
import petGroupImage from '../assets/品牌初心页/宠物群像.png';

export function BrandPage() {
    const certs = [cert1, cert2, cert3, cert4, cert5]; // 5 张证书图片
    const [activeCertIndex, setActiveCertIndex] = React.useState(2);
    const [autoPlayKey, setAutoPlayKey] = React.useState(0);

    const resetAutoPlay = () => {
        setAutoPlayKey(prev => prev + 1);
    };

    const handlePrev = () => {
        setActiveCertIndex((prev: number) => (prev - 1 + certs.length) % certs.length);
        resetAutoPlay();
    };

    const handleNext = React.useCallback(() => {
        setActiveCertIndex((prev: number) => (prev + 1) % certs.length);
    }, [certs.length]);

    const handleNextWithReset = () => {
        handleNext();
        resetAutoPlay();
    };

    // Auto-play with reset capability
    React.useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 3000);
        return () => clearInterval(timer);
    }, [handleNext, autoPlayKey]);

    const getSlideStyles = (index: number) => {
        const diff = (index - activeCertIndex + certs.length) % certs.length;
        // diff 0: Center (中间图片 415x610)
        // diff 1: Right
        // diff 2: Far Right
        // diff 3: Far Left
        // diff 4: Left

        if (diff === 0) { // Center - 415x610
            return { zIndex: 30, transform: 'translateX(0)', opacity: 1, width: '415px', height: '610px' };
        } else if (diff === 1) { // Right
            return { zIndex: 20, transform: 'translateX(380px)', opacity: 1, width: '240px', height: '330px' };
        } else if (diff === 4) { // Left
            return { zIndex: 20, transform: 'translateX(-380px)', opacity: 1, width: '240px', height: '330px' };
        } else if (diff === 2) { // Far Right
            return { zIndex: 10, transform: 'translateX(650px)', opacity: 1, width: '240px', height: '330px' };
        } else { // Far Left (diff 3)
            return { zIndex: 10, transform: 'translateX(-650px)', opacity: 1, width: '240px', height: '330px' };
        }
    };

    return (
        <div className="bg-white w-full">
            {/* 1. Hero Banner */}
            <section className="w-full relative">
                <img src={bannerImg} alt="Brand Essence" className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-black/10" /> {/* Subtle overlay if needed */}
            </section>

            {/* 2. Brand Culture */}
            <section className="py-24 bg-[#FFFBF5]">
                <div className="w-full mx-auto" style={{ maxWidth: '1700px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h3 className="text-[#8B7355] font-bold text-title-primary">品牌文化</h3>
                        <h4 className="text-[#8B7355] font-medium tracking-wide uppercase text-title-secondary">BRAND CULTURE</h4>
                    </motion.div>

                    <div className="flex justify-center gap-2 overflow-x-auto pb-4">
                        {/* Card 1: Vision - 443x633 strict (Inline Style) */}
                        <motion.div
                            style={{ width: '443px', minWidth: '443px', height: '633px' }}
                            className="relative group overflow-hidden flex-none"
                        >
                            <img src={culture03} alt="Vision" className="w-full h-full object-cover" />
                            {/* Optional Overlay Text based on design */}
                            <div className="absolute top-4 left-4 md:top-6 md:left-6">
                                <h5 className="text-white text-3xl font-bold tracking-widest drop-shadow-md">愿景</h5>
                            </div>
                        </motion.div>

                        {/* Card 2: Mission - 788x633 strict (Inline Style) */}
                        <motion.div
                            style={{ width: '788px', minWidth: '788px', height: '633px' }}
                            className="relative group overflow-hidden flex-none"
                        >
                            <img src={culture02} alt="Mission" className="w-full h-full object-cover" />
                            <div className="absolute top-4 left-4 md:top-6 md:left-6">
                                <h5 className="text-white text-3xl font-bold tracking-widest drop-shadow-md">使命</h5>
                            </div>
                        </motion.div>

                        {/* Card 3: Values - 443x633 strict (Inline Style) */}
                        <motion.div
                            style={{ width: '443px', minWidth: '443px', height: '633px' }}
                            className="relative group overflow-hidden flex-none"
                        >
                            <img src={culture01} alt="Values" className="w-full h-full object-cover" />
                            <div className="absolute top-4 left-4 md:top-6 md:left-6">
                                <h5 className="text-white text-3xl font-bold tracking-widest drop-shadow-md">价值观</h5>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. Super Factory */}
            <section className="py-24 bg-white">
                <div className="w-full mx-auto" style={{ maxWidth: '1700px' }}>
                    {/* Dashed Separator Line */}
                    <img src={horizontalDashedLine} alt="divider" className="w-full mb-12 opacity-60" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h3 className="text-[#8B7355] font-bold text-title-primary">瑞诺氏超级工厂</h3>
                        <h4 className="text-[#8B7355] font-medium tracking-wide uppercase text-title-secondary">VONEOS SUPER FACTORY</h4>
                    </motion.div>

                    <div className="w-full mb-12 rounded-2xl overflow-hidden shadow-2xl">
                        <img src={factoryImg} alt="Factory" className="w-full h-auto object-cover" />
                    </div>

                    <div className="mb-16">
                        <h4 className="text-3xl font-bold text-[#8B7355] mb-4">以科研之心，定义宠物营养新标准</h4>
                        <p className="text-[#8B7355]/80 text-lg leading-relaxed mb-8">
                            从科研到生产，从承诺到陪伴，背后是高标准、硬科技与强研发的坚实支撑。瑞诺氏超级工厂，让爱宠的每一份营养都值得信赖。
                        </p>
                        {/* Dashed Separator - Consistent Style */}
                        <img src={horizontalDashedLine} alt="divider" className="w-full opacity-60" />
                    </div>

                    <div className="space-y-12">
                        {/* Feature 1 */}
                        <div className="flex flex-col md:flex-row items-center gap-12 pb-12">
                            <div className="shrink-0">
                                <img src={badge1} alt="甄护之心" className="w-40 h-40 object-contain drop-shadow-md" />
                            </div>
                            {/* Vertical Dashed Line */}
                            <div className="shrink-0" style={{ width: '4px', height: '160px', borderLeft: '3px dashed rgba(146, 100, 31, 0.4)' }}></div>

                            <div className="flex-1 flex flex-col justify-between" style={{ height: '160px' }}>
                                <h5 className="text-[#8B7355] font-bold leading-tight" style={{ fontSize: '50px' }}>高于国际标准，31项宠物专利</h5>
                                <p className="text-[#8B7355]/80 text-lg leading-relaxed text-justify">
                                    工厂占地面积超20000平米，总建筑面积超8000余平米，公司通过国家质量监督检验检疫部门审核认证，拥有出口宠物食品的生产加工存放资质。同时通过了食品安全管理体系ISO22000的认证和英国零售商协会食品安全BRC认证及国际食品安全IFS认证，拥有31项宠物食品国家专利。
                                </p>
                            </div>
                        </div>
                        <img src={horizontalDashedLine} alt="divider" className="w-full opacity-60 my-8" />

                        {/* Feature 2 */}
                        <div className="flex flex-col md:flex-row items-center gap-12 pb-12 pt-12" style={{ paddingTop: '48px' }}>
                            <div className="shrink-0">
                                <img src={badge2} alt="匠造之心" className="w-40 h-40 object-contain drop-shadow-md" />
                            </div>
                            {/* Vertical Dashed Line */}
                            <div className="shrink-0" style={{ width: '4px', height: '160px', borderLeft: '3px dashed rgba(146, 100, 31, 0.4)' }}></div>

                            <div className="flex-1 flex flex-col justify-between" style={{ height: '160px' }}>
                                <h5 className="text-[#8B7355] font-bold leading-tight" style={{ fontSize: '50px' }}>瑞士尖端技术，药品级严标准</h5>
                                <p className="text-[#8B7355]/80 text-lg leading-relaxed text-justify">
                                    工厂拥有先进的生产和检测设备，全套引进瑞士布勒集团的产品和生产制造技术，设备达到国际先进水平。并按药品GMP标准配备了膨化粮、烘焙粮、冻干、罐头多条产线。
                                </p>
                            </div>
                        </div>
                        <img src={horizontalDashedLine} alt="divider" className="w-full opacity-60 my-8" />

                        {/* Feature 3 */}
                        <div className="flex flex-col md:flex-row items-center gap-12" style={{ paddingTop: '48px' }}>
                            <div className="shrink-0">
                                <img src={badge3} alt="创新之心" className="w-40 h-40 object-contain drop-shadow-md" />
                            </div>
                            {/* Vertical Dashed Line */}
                            <div className="shrink-0" style={{ width: '4px', height: '160px', borderLeft: '3px dashed rgba(146, 100, 31, 0.4)' }}></div>

                            <div className="flex-1 flex flex-col justify-between" style={{ height: '160px' }}>
                                <h5 className="text-[#8B7355] font-bold leading-tight" style={{ fontSize: '50px' }}>高校研发引擎，领先科研技术</h5>
                                <p className="text-[#8B7355]/80 text-lg leading-relaxed text-justify">
                                    工厂与江南大学生物工程学院、食品工程学院、浙江工业大学苏州工艺美术学院建立了长期的战略合作关系，将最新科研技术成果产业化，技术领先，工艺成熟。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Certificates */}
            <section style={{ paddingTop: '0', paddingBottom: '20px' }} className="bg-white relative">
                <div className="w-full mx-auto mb-8" style={{ maxWidth: '1700px' }}>
                    {/* Dashed Separator Line - Top */}
                    <img src={horizontalDashedLine} alt="divider" className="w-full opacity-60" />
                </div>

                {/* Carousel */}
                <div className="w-full mx-auto relative flex justify-center items-center" style={{ maxWidth: '1700px', height: '650px' }}>

                    {/* Arrow Left Container */}
                    <div className="absolute left-0 top-0 bottom-0 z-40 flex items-center" style={{ padding: '5px' }}>
                        <button
                            onClick={handlePrev}
                            className="nav-arrow-btn flex items-center justify-center cursor-pointer text-[#C5A47E] rounded"
                            style={{ height: '50px', padding: '0 10px' }}
                        >
                            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    </div>

                    {/* Arrow Right Container */}
                    <div className="absolute right-0 top-0 bottom-0 z-40 flex items-center" style={{ padding: '5px' }}>
                        <button
                            onClick={handleNextWithReset}
                            className="nav-arrow-btn flex items-center justify-center cursor-pointer text-[#C5A47E] rounded"
                            style={{ height: '50px', padding: '0 10px' }}
                        >
                            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    <div className="relative w-full h-full flex justify-center items-center">
                        {certs.map((cert, index) => {
                            const styles = getSlideStyles(index);
                            return (
                                <div
                                    key={index}
                                    className="absolute transition-all duration-500 ease-in-out bg-white p-3 shadow-lg rounded-sm"
                                    style={{
                                        zIndex: styles.zIndex,
                                        transform: styles.transform,
                                        opacity: styles.opacity,
                                        width: styles.width,
                                        height: styles.height,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        border: '1px solid #e5e5e5'
                                    }}
                                >
                                    <img src={cert} className="w-full h-full object-contain" alt="Certificate" />
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Caption */}
                <div className="text-center text-[#C5A47E] font-bold tracking-wider" style={{ fontSize: '35px', marginTop: '40px' }}>
                    英国零售商协会全球消费品标准认证(BRC)
                </div>
            </section>

            {/* 5. Pet Moments */}
            <section className="py-24 bg-white relative">
                <div className="w-full mx-auto mb-16" style={{ maxWidth: '1700px' }}>
                    {/* Dashed Separator Line */}
                    {/* Dashed Separator Line - Force Style */}
                    <img src={horizontalDashedLine} alt="divider" className="w-full mb-12 opacity-60" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-[#8B7355] font-bold text-title-primary">爱宠时刻</h3>
                        <h4 className="text-[#8B7355] font-medium tracking-wide uppercase text-title-secondary">PET MOMENTS</h4>
                    </motion.div>
                </div>

                <div className="w-full mx-auto relative" style={{ maxWidth: '1700px' }}>
                    <img src={petGroupImage} alt="爱宠时刻" className="w-full h-auto rounded-lg" />
                </div>
            </section>

            {/* Visual footer curve from design */}
            <div className="w-full h-32 bg-gradient-to-b from-white to-[#DDC58C]" />
        </div>
    );
}
