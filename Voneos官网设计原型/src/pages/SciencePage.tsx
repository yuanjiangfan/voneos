import React from 'react';
import { motion } from 'motion/react';

// Import assets
import banner from '../assets/科学营养/banner 拷贝.png';
import titleImg from '../assets/科学营养/科学营养标题.png';
import icon0 from '../assets/科学营养/0.png';
import icon6A from '../assets/科学营养/6A.png';
import icon99 from '../assets/科学营养/99.png';

// Laboratory
import labLogo from '../assets/科学营养/岳麓山.png';
import labBanner from '../assets/科学营养/瑞诺氏×岳麓山实验室.png';

// Pet images grid
import pet01 from '../assets/科学营养/图01.png';
import pet02 from '../assets/科学营养/图02.png';
import pet03 from '../assets/科学营养/图03.png';
import pet04 from '../assets/科学营养/图04.png';
import pet05 from '../assets/科学营养/图05.png';
import pet06 from '../assets/科学营养/图06.png';

// Five systems icons
import system001 from '../assets/科学营养/001.png';
import system002 from '../assets/科学营养/002.png';
import system003 from '../assets/科学营养/003.png';
import system004 from '../assets/科学营养/004.png';
import system005 from '../assets/科学营养/005.png';

// Testing icons
import test006 from '../assets/科学营养/006.png';
import test007 from '../assets/科学营养/007.png';
import test06 from '../assets/科学营养/06.png';
import test9 from '../assets/科学营养/9.png';
import test231 from '../assets/科学营养/231.png';
import test2066 from '../assets/科学营养/2066.png';

// Bottom scene
import bottomScene from '../assets/科学营养/图.png';
import petsScene from '../assets/科学营养/图层 79.png';
import divider from '../assets/科学营养/竖虚线.png';

export function SciencePage() {
    return (
        <div className="bg-white w-full">
            {/* 1. Hero Banner */}
            <section className="w-full relative">
                <img src={banner} alt="Science Nutrition Banner" className="w-full h-auto object-cover" />
                <div
                    className="absolute inset-0 px-4 md:px-20"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-end', // Force right alignment
                    }}
                >
                    {/* Title */}


                    {/* Text Content - replacing banner image */}
                    <div
                        style={{
                            width: '50%', // Occupy right half
                            textAlign: 'left',
                            paddingLeft: '0rem',
                            marginRight: '4rem' // Increased from 2rem to 4rem (~ +64px total shift)
                        }}
                    >
                        <h2
                            className="mb-6 tracking-wide drop-shadow-md"
                            style={{
                                fontSize: '4.5rem', // ~72px
                                lineHeight: '1.2',
                                fontWeight: 'normal', // Removed bold
                                color: '#ffffff'
                            }}
                        >
                            瑞诺氏×岳麓山实验室
                        </h2>
                        <p
                            className="font-light tracking-wider drop-shadow-sm"
                            style={{
                                fontSize: '1.8rem', // ~29px
                                opacity: 1, // Full opacity as requested (implied by "white")
                                color: '#ffffff'
                            }}
                        >
                            瑞诺氏与岳麓山实验室联合研发 "独家适口专利"
                        </p>
                    </div>

                </div>
            </section>

            {/* Statistics Section - New Area Below Banner */}
            <section className="w-full relative" style={{ backgroundColor: '#f3e7cf', height: '570px' }}>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '100%',
                        position: 'relative',
                        // Sit right at top
                    }}
                >

                    {/* Navigation Bar */}
                    <div
                        style={{
                            backgroundColor: '#D6BC8A', // Gold-ish
                            borderRadius: '10px', // Fully rounded corners
                            width: '1160px',
                            height: '80px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: '#956620', // Updated color
                            fontWeight: 'normal', // Removed bold
                            fontSize: '30px', // Increased size
                            marginBottom: '0',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                            letterSpacing: '0.05em',
                            position: 'relative',
                            top: '-24px'
                        }}
                    >
                        岳麓山实验室 &nbsp;|&nbsp; 瑞诺氏6A高标准 &nbsp;|&nbsp; 科学健康五大体系 &nbsp;|&nbsp; 爱宠科学测试
                    </div>

                    {/* Icons Row */}
                    <div
                        style={{
                            display: 'flex',
                            gap: '3rem', // Reduced gap slightly to accommodate larger icons
                            alignItems: 'center',
                            marginTop: '2rem' // Adjusted margin
                        }}
                    >
                        {/* Icon 0 */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img src={icon0} alt="0添加" style={{ width: '225px', height: '225px', objectFit: 'contain' }} />
                        </div>

                        {/* Divider */}
                        <div style={{ height: '260px' }}>
                            <img src={divider} alt="divider" style={{ width: '3px', height: '100%', objectFit: 'cover' }} />
                        </div>

                        {/* Icon 6A */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img src={icon6A} alt="6A高标准" style={{ width: '225px', height: '225px', objectFit: 'contain' }} />
                        </div>

                        {/* Divider */}
                        <div style={{ height: '260px' }}>
                            <img src={divider} alt="divider" style={{ width: '3px', height: '100%', objectFit: 'cover' }} />
                        </div>

                        {/* Icon 99 */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img src={icon99} alt="99%主动进食" style={{ width: '225px', height: '225px', objectFit: 'contain' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="w-full" style={{ backgroundColor: '#f4e7ce', padding: '0px 0' }}>
                <div className="w-full" style={{ maxWidth: '1700px', margin: '0 auto' }}>
                    <div style={{ width: '100%', height: '1px', borderTop: '2px dashed rgba(146, 100, 31, 0.4)' }}></div>
                </div>
            </div>

            {/* 2. Laboratory Partnership */}
            <section className="py-24" style={{ backgroundImage: 'linear-gradient(to bottom, #f7e7cd, #f7eedc)' }}>
                <div className="w-full mx-auto" style={{ maxWidth: '1700px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h3 className="font-bold text-title-primary" style={{ color: '#8e6015' }}>岳麓山实验室</h3>
                        <h4 className="font-medium tracking-wide uppercase text-title-secondary" style={{ color: '#8e6015' }}>YUELUHAN LABORATORY</h4>
                    </motion.div>

                    <div className="flex flex-col md:flex-row items-end gap-12 mb-12 px-20">
                        {/* Left Side: Logo */}
                        <div className="flex-shrink-0">
                            <img src={labLogo} alt="岳麓山实验室" className="h-auto object-contain" style={{ width: '400px', maxWidth: 'none' }} />
                        </div>

                        {/* Right Side: Content */}
                        <div className="flex-1 flex flex-col">
                            {/* Header Image */}
                            <div style={{ marginBottom: '70px' }}>
                                <img src={titleImg} alt="VONEOS x 岳麓山实验室" className="h-16 object-contain" />
                            </div>

                            {/* Text Paragraph 1 */}
                            <p className="text-[#5c4033] leading-relaxed text-justify" style={{ marginBottom: '60px', fontSize: '20px' }}>
                                麓山实验室是湖南省委、省政府对标国家实验室标准建设的省级重大战略科研平台，是湖南省打造“三高四新”美好蓝图的标志性工程。实验室聚焦动物、植物、微生物三大种业领域，系统开展基础性、前沿性和公益性研究。
                            </p>

                            {/* Stats Row */}
                            <div className="flex items-center justify-between" style={{ marginBottom: '60px' }}>
                                {/* Stat 1 */}
                                <div className="flex items-end gap-2">
                                    <img src={test9} alt="9位" className="h-12 object-contain" />
                                    <span className="text-[#5c4033]" style={{ fontSize: '30px', lineHeight: '1' }}>工程院院士</span>
                                </div>
                                {/* Stat 2 */}
                                <div className="flex items-end gap-2">
                                    <img src={test231} alt="231位" className="h-12 object-contain" />
                                    <span className="text-[#5c4033]" style={{ fontSize: '30px', lineHeight: '1' }}>PI 团队</span>
                                </div>
                                {/* Stat 3 */}
                                <div className="flex items-end gap-2">
                                    <img src={test2066} alt="2066位" className="h-12 object-contain" />
                                    <span className="text-[#5c4033]" style={{ fontSize: '30px', lineHeight: '1' }}>科研人员</span>
                                </div>
                            </div>

                            {/* Text Paragraph 2 */}
                            <p className="text-[#5c4033] leading-relaxed text-justify" style={{ marginBottom: '60px', fontSize: '20px' }}>
                                目前，实验室总建筑面积约 41.76 万平方米，已汇聚首批 231 个 PI 团队、2066 名科研人员，其中包括 9 位中国工程院院士领衔的高水平队伍。在今年全国两会期间，湖南代表团已正式建议推动岳麓山实验室纳入国家实验室体系，以强化其在全国种业战略中的核心作用。
                            </p>

                            {/* Footer Note */}
                            <p className="text-sm" style={{ color: '#666666' }}>
                                (注: 以上信息仅为岳麓山实验室介绍,瑞诺氏与岳麓山实验室中药材品种创制中心开展合作,共同推动科研成果转化与应用。)
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="w-full" style={{ maxWidth: '1700px', margin: '0 auto' }}>
                <div style={{ width: '100%', height: '1px', borderTop: '2px dashed rgba(146, 100, 31, 0.4)' }}></div>
            </div>

            {/* 3. Certification Standard */}
            <section className="py-24 bg-white">
                <div className="w-full mx-auto" style={{ maxWidth: '1700px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h3 className="text-[#8B7355] font-bold text-title-primary">瑞诺氏认证标准</h3>
                        <h4 className="text-[#C5A47E] font-medium tracking-wide uppercase text-title-secondary">VONEOS CERTIFIED STANDARD</h4>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                        <img src={pet01} alt="Pet 1" className="w-full h-auto object-cover rounded-lg" />
                        <img src={pet02} alt="Pet 2" className="w-full h-auto object-cover rounded-lg" />
                        <img src={pet03} alt="Pet 3" className="w-full h-auto object-cover rounded-lg" />
                        <img src={pet04} alt="Pet 4" className="w-full h-auto object-cover rounded-lg" />
                        <img src={pet05} alt="Pet 5" className="w-full h-auto object-cover rounded-lg" />
                        <img src={pet06} alt="Pet 6" className="w-full h-auto object-cover rounded-lg" />
                    </div>

                    <p className="text-center text-[#8B7355]/80 text-lg">
                        瑞诺氏拥有自己的认证标准，确保每一款产品都符合严格的质量要求
                    </p>
                </div>
            </section>

            {/* Divider */}
            <div className="w-full" style={{ maxWidth: '1700px', margin: '0 auto' }}>
                <div style={{ width: '100%', height: '1px', borderTop: '2px dashed rgba(146, 100, 31, 0.4)' }}></div>
            </div>

            {/* 4. Five Systems */}
            <section className="py-24 bg-[#FFFBF5]">
                <div className="w-full mx-auto" style={{ maxWidth: '1700px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h3 className="text-[#8B7355] font-bold text-title-primary">科学健康五大体系</h3>
                        <h4 className="text-[#C5A47E] font-medium tracking-wide uppercase text-title-secondary">THE FIVE SYSTEMS OF SCIENTIFIC HEALTH</h4>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-12 md:gap-16">
                        <div className="flex flex-col items-center">
                            <img src={system001} alt="System 1" className="w-24 h-24 md:w-32 md:h-32 object-contain mb-4" />
                            <p className="text-[#8B7355] font-medium text-center">营养均衡</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={system002} alt="System 2" className="w-24 h-24 md:w-32 md:h-32 object-contain mb-4" />
                            <p className="text-[#8B7355] font-medium text-center">高适口性</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={system003} alt="System 3" className="w-24 h-24 md:w-32 md:h-32 object-contain mb-4" />
                            <p className="text-[#8B7355] font-medium text-center">高吸收率</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={system004} alt="System 4" className="w-24 h-24 md:w-32 md:h-32 object-contain mb-4" />
                            <p className="text-[#8B7355] font-medium text-center">消化健康</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={system005} alt="System 5" className="w-24 h-24 md:w-32 md:h-32 object-contain mb-4" />
                            <p className="text-[#8B7355] font-medium text-center">科学配比</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="w-full" style={{ maxWidth: '1700px', margin: '0 auto' }}>
                <div style={{ width: '100%', height: '1px', borderTop: '2px dashed rgba(146, 100, 31, 0.4)' }}></div>
            </div>

            {/* 5. Scientific Testing */}
            <section className="py-24 bg-white">
                <div className="w-full mx-auto" style={{ maxWidth: '1700px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h3 className="text-[#8B7355] font-bold text-title-primary">宠物科学检测</h3>
                        <h4 className="text-[#C5A47E] font-medium tracking-wide uppercase text-title-secondary">PET'S SCIENTIFIC TESTING</h4>
                    </motion.div>

                    <div className="mb-12">
                        <img src={petsScene} alt="Pets" className="w-full h-auto object-contain" />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        <div className="flex flex-col items-center">
                            <img src={test006} alt="Test 1" className="w-20 h-20 object-contain mb-2" />
                            <p className="text-[#8B7355] text-sm text-center">微生物检测</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={test007} alt="Test 2" className="w-20 h-20 object-contain mb-2" />
                            <p className="text-[#8B7355] text-sm text-center">营养成分检测</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={test06} alt="Test 3" className="w-20 h-20 object-contain mb-2" />
                            <p className="text-[#8B7355] text-sm text-center">重金属检测</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={test9} alt="Test 4" className="w-20 h-20 object-contain mb-2" />
                            <p className="text-[#8B7355] text-sm text-center">农药残留检测</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={test231} alt="Test 5" className="w-20 h-20 object-contain mb-2" />
                            <p className="text-[#8B7355] text-sm text-center">真菌毒素检测</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={test2066} alt="Test 6" className="w-20 h-20 object-contain mb-2" />
                            <p className="text-[#8B7355] text-sm text-center">全面品质检测</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Bottom Scene */}
            <section className="w-full relative">
                <img src={bottomScene} alt="温馨场景" className="w-full h-auto object-cover" />
            </section>

            {/* Visual footer curve */}
            <div className="w-full h-32 bg-gradient-to-b from-white to-[#DDC58C]" />
        </div>
    );
}
