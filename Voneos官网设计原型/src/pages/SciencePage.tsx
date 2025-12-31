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
import vectorObject from '../assets/科学营养/矢量智能对象.png';

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

// Icons
import iconHighEfficacy from '../assets/科学营养/2高功效.png';

// Bottom scene
import bottomScene from '../assets/科学营养/图.png';
import petsScene from '../assets/科学营养/图层 79.png';
import divider from '../assets/科学营养/竖虚线.png';

// New 5 Systems Icons
import materialIcon from '../assets/科学营养/新鲜材料.png';
import naturalIcon from '../assets/科学营养/天然安全.png';
import palatabilityIcon from '../assets/科学营养/高适口性.png';
import nutritionIcon from '../assets/科学营养/分阶精准营养.png';
import certificationIcon from '../assets/科学营养/科学检测认证.png';
import verticalLine from '../assets/科学营养/竖虚线.png';

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
            <div className="w-full" style={{ backgroundColor: '#f3e7cf', padding: '20px 0' }}>
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
            <div className="w-full" style={{ backgroundColor: '#f8f1df', padding: '0px 0' }}>
                <div className="w-full" style={{ maxWidth: '1700px', margin: '0 auto' }}>
                    <div style={{ width: '100%', height: '1px', borderTop: '2px dashed rgba(146, 100, 31, 0.4)' }}></div>
                </div>
            </div>

            {/* 3. Certification Standard */}
            <section className="py-24" style={{ background: 'linear-gradient(180deg, #f8f1df 0%, #ffffff 100%)' }}>
                <div className="w-full mx-auto" style={{ maxWidth: '1700px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h3 className="font-bold text-title-primary" style={{ color: 'rgb(142, 96, 21)' }}>瑞诺氏认证标准</h3>
                        <h4 className="font-medium tracking-wide uppercase text-title-secondary" style={{ color: 'rgb(142, 96, 21)' }}>VONEOS CERTIFIED STANDARD</h4>
                        <div className="flex items-center gap-4" style={{ marginTop: '55px' }}>
                            <img src={vectorObject} alt="icon" className="object-contain" style={{ width: '50px', height: '50px' }} />
                            <span style={{ color: 'rgb(142, 96, 21)', fontSize: '50px', lineHeight: '1', marginLeft: '30px' }}>瑞诺氏6A核心体系 好产品的科学答案</span>
                        </div>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px', marginBottom: '2rem' }}>
                        <img src={pet01} alt="Pet 1" className="w-full h-auto object-cover rounded-lg" />
                        {/* Image 2 with Overlay */}
                        <div className="relative w-full h-auto rounded-lg overflow-hidden group">
                            <img src={pet02} alt="Pet 2" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 flex justify-center items-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                                <img src={iconHighEfficacy} alt="High Efficacy" className="w-20 h-20 object-contain opacity-90" />
                            </div>
                        </div>
                        <img src={pet03} alt="Pet 3" className="w-full h-auto object-cover rounded-lg" />
                        <img src={pet04} alt="Pet 4" className="w-full h-auto object-cover rounded-lg" />
                        <img src={pet05} alt="Pet 5" className="w-full h-auto object-cover rounded-lg" />
                        <img src={pet06} alt="Pet 6" className="w-full h-auto object-cover rounded-lg" />
                    </div>

                    <p style={{ fontSize: '37px', color: 'rgb(142, 96, 21)', textAlign: 'right' }}>
                        ——这背后，是瑞诺氏始终如一的坚持
                    </p>
                </div>
            </section>

            {/* Divider */}
            <div className="w-full" style={{ backgroundColor: '#f8f1df', padding: '0px 0' }}>
                <div className="w-full" style={{ maxWidth: '1700px', margin: '0 auto' }}>
                    <div style={{ width: '100%', height: '1px', borderTop: '2px dashed rgba(146, 100, 31, 0.4)' }}></div>
                </div>
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
                        <h4 className="text-[#C5A47E] font-medium tracking-wide uppercase text-title-secondary">THE FIVE SYSTEMS OF </h4>
                        <h4 className="text-[#C5A47E] font-medium tracking-wide uppercase text-title-secondary">SCIENTIFIC HEALTH</h4>
                    </motion.div>

                    <div className="flex justify-between items-center w-full px-4">
                        {/* Item 1 */}
                        <div className="flex flex-col items-center flex-1">
                            <img src={materialIcon} alt="新鲜材料" className="w-[140px] h-[140px] object-contain mb-8" />
                            <h3 className="text-[#6D5030] mb-4" style={{ fontSize: '40px' }}>新鲜材料</h3>
                            <p className="text-[#555] leading-relaxed text-center" style={{ fontSize: '20px' }}>
                                精选源头鲜材<br />锁住原始营养
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="h-40 flex items-center">
                            <img src={verticalLine} alt="divider" className="h-full w-auto object-contain" />
                        </div>

                        {/* Item 2 */}
                        <div className="flex flex-col items-center flex-1">
                            <img src={naturalIcon} alt="天然安全" className="w-[140px] h-[140px] object-contain mb-8" />
                            <h3 className="text-[#6D5030] mb-4" style={{ fontSize: '40px' }}>天然安全</h3>
                            <p className="text-[#555] leading-relaxed text-center" style={{ fontSize: '20px' }}>
                                拒绝化学诱食剂<br />成分纯净天然
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="h-40 flex items-center">
                            <img src={verticalLine} alt="divider" className="h-full w-auto object-contain" />
                        </div>

                        {/* Item 3 */}
                        <div className="flex flex-col items-center flex-1">
                            <img src={palatabilityIcon} alt="高适口性" className="w-[140px] h-[140px] object-contain mb-8" />
                            <h3 className="text-[#6D5030] mb-4" style={{ fontSize: '40px' }}>高适口性</h3>
                            <p className="text-[#555] leading-relaxed text-center" style={{ fontSize: '20px' }}>
                                天然适口成分<br />悦享健康美味
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="h-40 flex items-center">
                            <img src={verticalLine} alt="divider" className="h-full w-auto object-contain" />
                        </div>

                        {/* Item 4 */}
                        <div className="flex flex-col items-center flex-1">
                            <img src={nutritionIcon} alt="分阶精准营养" className="w-[140px] h-[140px] object-contain mb-8" />
                            <h3 className="text-[#6D5030] mb-4" style={{ fontSize: '40px' }}>分阶精准营养</h3>
                            <p className="text-[#555] leading-relaxed text-center" style={{ fontSize: '20px' }}>
                                独家科学配比<br />分阶定制配方<br />精准滋养成长
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="h-40 flex items-center">
                            <img src={verticalLine} alt="divider" className="h-full w-auto object-contain" />
                        </div>

                        {/* Item 5 */}
                        <div className="flex flex-col items-center flex-1">
                            <img src={certificationIcon} alt="科学检测认证" className="w-[140px] h-[140px] object-contain mb-8" />
                            <h3 className="text-[#6D5030] mb-4" style={{ fontSize: '40px' }}>科学检测认证</h3>
                            <p className="text-[#555] leading-relaxed text-center" style={{ fontSize: '20px' }}>
                                严苛品控护航<br />权威检测鉴证<br />高于欧美标准
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="w-full" style={{ backgroundColor: '#f8f1df', padding: '0px 0' }}>
                <div className="w-full" style={{ maxWidth: '1700px', margin: '0 auto' }}>
                    <div style={{ width: '100%', height: '1px', borderTop: '2px dashed rgba(146, 100, 31, 0.4)' }}></div>
                </div>
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
