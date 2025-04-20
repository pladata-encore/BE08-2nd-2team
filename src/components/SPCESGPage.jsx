import React from 'react';

import styles from '../styles/SPCESGPage.module.scss';
import imageEsg_2 from '../assets/images/esg02.webp';
import StrategyTable from './StrategyTable';
import CategoryNav from './CategoryNav';
import building from '../assets/images/esg.webp';

const SPCESGPage = () => {
  return (
    <div className={styles.whole}>
      <p className={styles.topTitle}>ESG 경영</p>
      <CategoryNav />
      <div className={styles.container}>
        {/* ESG 경영체계 섹션 (좌우 배치) */}

        <div className={styles.sectionContentFull}>
          <div className={styles.imageContainerFull}>
            <img
              src={imageEsg_2}
              alt='SPC ESG 경영체계 도표'
              style={styles.image1}
              className={styles.hoverImage}
            />
          </div>
          <div className={styles.textContainerFull}>
            <p className={styles.sectionDescriptionFull}>
              SPC그룹은 최고의 품질과 창의적인 도전으로 이해관계자 모두의 행복과
              건강을 추구할 수 있도록 ESG 측면에서의 성장 기반과 제품 경쟁력
              강화를 고려하여 ESG 전략을 수립하였습니다.
              <br />
              <br />
            </p>
          </div>
        </div>

        {/* 지속가능경영보고서 섹션 (하단 중앙 배치) */}
        <section className={styles.sustainabilityReportBottom}>
          <div className={styles['background-wrap-bottom']}>
            <div className={styles.imgBox}>
              <img src={building} alt='빌딩' className={styles.building} />
            </div>
            <div className={styles.contentBottom}>
              최고의 품질과 창의적 도전으로
              <br />
              행복한 세상을 만들어 나갑니다.
            </div>
          </div>
        </section>

        {/* HAPPY & HEALTHY COMPANY 섹션 (기존 유지) */}
        <section className={styles.happyHealthySection}>
          <StrategyTable />
        </section>
      </div>
    </div>
  );
};

export default SPCESGPage;
