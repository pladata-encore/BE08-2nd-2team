import React from 'react';
import styles from '../styles/LanguageSelector.module.scss';
import image from '../assets/img/icon_global.svg';
import i18n from '../lang/i18n';

const LanguageSelector = ({}) => {
  const handleSelect = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className={styles.languageSelector}>
      <span className={styles.icon}>
        <img src={image} alt='global_icon' />
      </span>
      <div className={styles.options}>
        <div onClick={() => handleSelect('ko')}>KO</div>
        <div onClick={() => handleSelect('en')}>EN</div>
        <div onClick={() => handleSelect('cn')}>CN</div>
      </div>
    </div>
  );
};

export default LanguageSelector;
