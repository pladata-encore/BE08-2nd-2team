import React, { useState } from 'react';
import styles from '../styles/EsgReport.module.scss';
import CategoryNav from '../components/CategoryNav';
import image from '../assets/img/sec01_img1.webp';
import { useTranslation } from 'react-i18next';

const EsgReport = () => {
  const [activeCategory, setActiveCategory] = useState('report');

  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <h1 className={styles.esg}>{t('esgTitle')}</h1>
        <CategoryNav
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </div>

      <section className={styles.section}>
        <h2 className={styles.title}>{t('reportTitle')}</h2>
        <div className={styles.grid}>
          <div className={styles.img}>
            <img src={image} alt='보고서 이미지' />
          </div>

          <div className={styles.content}>
            <div className={styles.txt}>
              <h3 className={styles.body}>
                {t('reportDescription')
                  .split('\n')
                  .map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
              </h3>
              <div className={styles.btn}>
                <a
                  href='https://www.spc.co.kr/img/front/sub/esg/esg_management/report/2024%20SPC%EA%B7%B8%EB%A3%B9%20%EC%A7%80%EC%86%8D%EA%B0%80%EB%8A%A5%EA%B2%BD%EC%98%81%EB%B3%B4%EA%B3%A0%EC%84%9C.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {t('downloadReport')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EsgReport;
