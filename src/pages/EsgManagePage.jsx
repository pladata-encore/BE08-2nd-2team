import React, { useState } from 'react';
import styles from '../styles/EsgManage.module.scss';
import CategoryNav from '../components/CategoryNav';

const EsgManage = () => {
  const [activeCategory, setActiveCategory] = useState('management');

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <h1 className={styles.esg}>ESG경영</h1>
        <CategoryNav
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </div>
    </div>
  );
};

export default EsgManage;
