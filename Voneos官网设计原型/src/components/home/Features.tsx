import React from 'react';
import { motion } from 'motion/react';
import accuracyBadge from '../../assets/546ee9abed8018e5eb9a517c284a1d21034a08d6.png';
import darkHeartIcon from '../../assets/a67f782c8eb15f304b30c791f802f0e455953716.png';
import catImg from '../../assets/index/猫.png';
import horizontalDashedLine from '../../assets/横虚线.png';

import './features.css';

export function Features() {
  return (
    <section id="features" className="pt-24 pb-24 bg-white relative overflow-hidden">

      <div className="science-container">

        {/* Top Divider */}
        <img src={horizontalDashedLine} alt="divider" className="w-full mb-8" />

        {/* Title Section - RESTORED with Class for Z-Index logic */}
        <motion.div
          className="science-title-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="science-main-title text-title-primary">科学营养 · 健康相伴</h3>
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
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="science-feature-row">
              <div>
                <h5 className="science-title-text">APPETITE</h5>
                <p className="science-sub-text">高适口</p>
              </div>
              <div>
                <h5 className="science-title-text">AMPLIFICATION</h5>
                <p className="science-sub-text">高功效</p>
              </div>
            </motion.div>

            <img src={horizontalDashedLine} alt="divider" className="w-full my-8 opacity-100" style={{ opacity: 1, border: 'none' }} />

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="science-feature-row">
              <div className="science-hl-wrapper">
                <h5 className="science-title-text">ACCURACY</h5>
                <div className="science-hl-tip-container">
                  <img src={darkHeartIcon} alt="Heart" className="science-heart-icon" />
                  <span className="science-hl-tip-text">用心之选</span>
                  <img src={darkHeartIcon} alt="Heart" className="science-heart-icon" />
                </div>
                <p className="science-accuracy-desc">分阶精准营养，科学配比，专宠专用</p>
                <img src={accuracyBadge} alt="Curve" className="science-hl-badge" />
              </div>
              <div>
                <h5 className="science-title-text">ACME</h5>
                <p className="science-sub-text">高品质</p>
              </div>
            </motion.div>

            <img src={horizontalDashedLine} alt="divider" className="w-full my-8 opacity-100" style={{ opacity: 1, border: 'none' }} />

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="science-feature-row">
              <div>
                <h5 className="science-title-text">ASSURANCE</h5>
                <p className="science-sub-text">高安全</p>
              </div>
              <div>
                <h5 className="science-title-text">ABSORPTION</h5>
                <p className="science-sub-text">高吸收</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
