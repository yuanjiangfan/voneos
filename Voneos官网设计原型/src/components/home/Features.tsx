import React from 'react';
import { motion } from 'motion/react';
import accuracyBadge from '../../assets/首页/心标.png';
import darkHeartIcon from '../../assets/首页/a67f782c8eb15f304b30c791f802f0e455953716.png';
import catImg from '../../assets/首页/猫.png';
import horizontalDashedLine from '../../assets/虚线/横虚线.png';

import './home.css';

// 6个特性的完整数据
const featuresData = [
  {
    id: 'appetite',
    title: 'APPETITE',
    subtitle: '高适口',
    tagline: '欢心之选',
    description: '天然适口成分,挑食宠物更偏爱',
  },
  {
    id: 'amplification',
    title: 'AMPLIFICATION',
    subtitle: '高功效',
    tagline: '省心之选',
    description: '实验室精准研发营养,数百万爱宠功效实证\n有效呵护爱宠健康',
  },
  {
    id: 'accuracy',
    title: 'ACCURACY',
    subtitle: '高精准',
    tagline: '用心之选',
    description: '分阶精准营养,科学配比,专宠专用',
  },
  {
    id: 'acme',
    title: 'ACME',
    subtitle: '高品质',
    tagline: '臻心之选',
    description: '臻选全球新鲜原料,散发食材天然本味',
  },
  {
    id: 'assurance',
    title: 'ASSURANCE',
    subtitle: '高安全',
    tagline: '安心之选',
    description: '成分可溯源,多项科学检测,高于欧美标准',
  },
  {
    id: 'absorption',
    title: 'ABSORPTION',
    subtitle: '高吸收',
    tagline: '舒心之选',
    description: '优质蛋白基底,多层包裹靶向输送,营养高效吸收',
  },
];

export function Features() {
  return (
    <section id="features" className="pt-24 pb-24 bg-white relative overflow-hidden">

      <div className="science-container">

        {/* Top Divider */}
        <img src={horizontalDashedLine} alt="divider" className="w-full mb-8" />

        {/* Title Section */}
        <motion.div
          className="science-title-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="science-main-title text-title-primary" >科学营养 · 健康相伴</h3>
          <h4 className="science-sub-title text-title-secondary">SCIENTIFIC NUTRITION<br />CONSTANT NOURISHMENT</h4>
        </motion.div>

        {/* Layout */}
        <div className="science-main-wrapper">

          {/* Cat Image as Background Layer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="science-img-col"
          >
            <img src={catImg} alt="Ragdoll Cat" className="science-cat-img" />
          </motion.div>

          {/* Feature list as Foreground Layer */}
          <div className="science-list-col">
            {/* First Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="science-feature-row"
            >
              <div className="science-feature-card">
                <h5 className="science-title-text">{featuresData[0].title}</h5>
                <p className="science-sub-text">{featuresData[0].subtitle}</p>

                {/* Hover Content */}
                <div className="science-hover-content">
                  <div className="science-hl-tip-container">
                    <img src={darkHeartIcon} alt="Heart" className="science-heart-icon" />
                    <span className="science-hl-tip-text">{featuresData[0].tagline}</span>
                    <img src={darkHeartIcon} alt="Heart" className="science-heart-icon" />
                  </div>
                  <p className="science-accuracy-desc">{featuresData[0].description}</p>
                  <img src={accuracyBadge} alt="Badge" className="science-hl-badge" />
                </div>
              </div>

              <div className="science-feature-card">
                <h5 className="science-title-text">{featuresData[1].title}</h5>
                <p className="science-sub-text">{featuresData[1].subtitle}</p>

                {/* Hover Content */}
                <div className="science-hover-content">
                  <div className="science-hl-tip-container">
                    <img src={darkHeartIcon} alt="Heart" className="science-heart-icon" />
                    <span className="science-hl-tip-text">{featuresData[1].tagline}</span>
                    <img src={darkHeartIcon} alt="Heart" className="science-heart-icon" />
                  </div>
                  <p className="science-accuracy-desc">{featuresData[1].description}</p>
                  <img src={accuracyBadge} alt="Badge" className="science-hl-badge" />
                </div>
              </div>
            </motion.div>

            <img src={horizontalDashedLine} alt="divider" className="w-full my-8 opacity-100 features-divider" />

            {/* Second Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="science-feature-row"
            >
              <div className="science-feature-card">
                <h5 className="science-title-text">{featuresData[2].title}</h5>
                <p className="science-sub-text">{featuresData[2].subtitle}</p>

                {/* Hover Content */}
                <div className="science-hover-content">
                  <div className="science-hl-tip-container">
                    <img src={darkHeartIcon} alt="Heart" className="science-heart-icon" />
                    <span className="science-hl-tip-text">{featuresData[2].tagline}</span>
                    <img src={darkHeartIcon} alt="Heart" className="science-heart-icon" />
                  </div>
                  <p className="science-accuracy-desc">{featuresData[2].description}</p>
                  <img src={accuracyBadge} alt="Badge" className="science-hl-badge" />
                </div>
              </div>

              <div className="science-feature-card">
                <h5 className="science-title-text">{featuresData[3].title}</h5>
                <p className="science-sub-text">{featuresData[3].subtitle}</p>

                {/* Hover Content */}
                <div className="science-hover-content">
                  <div className="science-hl-tip-container">
                    <img src={darkHeartIcon} alt="Heart" className="science-heart-icon" />
                    <span className="science-hl-tip-text">{featuresData[3].tagline}</span>
                    <img src={darkHeartIcon} alt="Heart" className="science-heart-icon" />
                  </div>
                  <p className="science-accuracy-desc">{featuresData[3].description}</p>
                  <img src={accuracyBadge} alt="Badge" className="science-hl-badge" />
                </div>
              </div>
            </motion.div>

            <img src={horizontalDashedLine} alt="divider" className="w-full my-8 opacity-100 features-divider" />

            {/* Third Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="science-feature-row"
            >
              <div className="science-feature-card">
                <h5 className="science-title-text">{featuresData[4].title}</h5>
                <p className="science-sub-text">{featuresData[4].subtitle}</p>

                {/* Hover Content */}
                <div className="science-hover-content">
                  <div className="science-hl-tip-container">
                    <img src={darkHeartIcon} alt="Heart" className="science-heart-icon" />
                    <span className="science-hl-tip-text">{featuresData[4].tagline}</span>
                    <img src={darkHeartIcon} alt="Heart" className="science-heart-icon" />
                  </div>
                  <p className="science-accuracy-desc">{featuresData[4].description}</p>
                  <img src={accuracyBadge} alt="Badge" className="science-hl-badge" />
                </div>
              </div>

              <div className="science-feature-card">
                <h5 className="science-title-text">{featuresData[5].title}</h5>
                <p className="science-sub-text">{featuresData[5].subtitle}</p>

                {/* Hover Content */}
                <div className="science-hover-content">
                  <div className="science-hl-tip-container">
                    <img src={darkHeartIcon} alt="Heart" className="science-heart-icon" />
                    <span className="science-hl-tip-text">{featuresData[5].tagline}</span>
                    <img src={darkHeartIcon} alt="Heart" className="science-heart-icon" />
                  </div>
                  <p className="science-accuracy-desc">{featuresData[5].description}</p>
                  <img src={accuracyBadge} alt="Badge" className="science-hl-badge" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
