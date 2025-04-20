import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/CategoryNav.module.scss';
import { useTranslation } from 'react-i18next';

const CategoryNav = () => {
  const { t } = useTranslation();

  const location = useLocation();

  const currentPath = location.pathname;

  return (
    <div className={styles.category}>
      <Link to='/esg/management'>
        <button
          className={`${styles.categoryBtn} ${currentPath === '/esg/management' ? styles.active : ''}`}
        >
          {t('esgManageBtn')}
        </button>
      </Link>

      <Link to='/esg/esgreport'>
        <button
          className={`${styles.categoryBtn} ${currentPath === '/esg/esgreport' ? styles.active : ''}`}
        >
          {t('esgReportBtn')}
        </button>
      </Link>
    </div>
  );
};

export default CategoryNav;
