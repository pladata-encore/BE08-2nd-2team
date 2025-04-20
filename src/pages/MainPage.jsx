import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/MainPage.module.scss';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../components/LanguageSelector';

// 이미지 import (src/assets/images 기준)
import parisBaguette from '../assets/images/sangMiDang02.webp';
import baskinRobbins from '../assets/images/breads.webp';
import dunkin from '../assets/images/together.webp';

import m1 from '../assets/images/bread.webp';
import m2 from '../assets/images/coffee.webp';
import m3 from '../assets/images/foods.webp';
import m4 from '../assets/images/icecream.webp';

const mainImages = [m1, m2, m3, m4];

const MainPage = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const { t } = useTranslation();

  const brands = [
    {
      title: t('heritage'),
      image: parisBaguette,
    },
    {
      title: 'SPC WAY',
      image: baskinRobbins,
    },
    {
      title: 'ESG',
      image: dunkin,
    },
    // {
    //   title: '파스쿠찌',
    //   image: pascucci,
    // },
  ];
  const goPrev = () => {
    setIndex((prev) => (prev - 1 + mainImages.length) % mainImages.length);
    resetTimer();
  };

  const goNext = () => {
    setIndex((prev) => (prev + 1) % mainImages.length);
    resetTimer();
  };

  const resetTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % mainImages.length);
    }, 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(intervalRef.current); // 언마운트 시 제거
  }, []);

  return (
    <div className={styles.supportPage}>
      {/* 언어 선택 드롭다운 */}
      <div style={{ position: 'absolute', top: 20, right: 20 }}>
        <LanguageSelector />
      </div>
      {/* 상단 큰 슬라이드 블록 */}
      <div className={`${styles.heroBanner} ${styles.slideInUp}`}>
        {mainImages.map((img, i) => (
          <div
            key={i}
            className={`${styles.slideImage} ${i === index ? styles.active : ''}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        <button className={`${styles.arrow} ${styles.left}`} onClick={goPrev}>
          &lt;
        </button>
        <button className={`${styles.arrow} ${styles.right}`} onClick={goNext}>
          &gt;
        </button>

        <div className={styles.heroContent}>
          <h2 className={styles.fadeSlideUp}>{t('mainTitle')}</h2>
          <p className={styles.fadeSlideDown}>Happiness in every bite</p>
        </div>
      </div>

      <div className={`${styles.grid} ${styles.slideIn}`}>
        {brands.map((brand, index) => (
          <div className={styles.card} key={index}>
            <img src={brand.image} alt={brand.title} className={styles.image} />
            <div className={styles.cardText}>
              <h3>{brand.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
