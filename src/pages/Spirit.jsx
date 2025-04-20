import React from 'react';
import styles from '../styles/spirit.module.scss';
import spirit1 from '../assets/images/sangMiDang01.webp';
import spirit2 from '../assets/images/sangMiDang02.webp';
import spirit3 from '../assets/images/sangMiDang03.webp';
import mark from '../assets/images/sangMidangSpirit.webp';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../components/LanguageSelector';
import { Trans } from 'react-i18next';

const Spirit = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.spirit}>
      <div style={{ position: 'absolute', top: 20, right: 20 }}>
        <LanguageSelector />
      </div>
      <div className={styles.container}>
        <div className={styles.item}>
          <img src={spirit1} alt='11' />
          <div className={styles.topItem}>
            <img src={mark} className={styles.mark} />
            <div className={styles.topText}>
              <h3>{t('sangmidang')}</h3>
              <p>
                <Trans i18nKey='s1' />
              </p>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <img src={spirit2} alt='22' />
          <div className={styles.bottomText}>
            <h3>{t('customers')}</h3>
            <p>
              <Trans i18nKey='s2' />
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <img src={spirit3} alt='33' />
          <div className={styles.bottomText}>
            <h3>{t('sharing')}</h3>
            <p>
              <Trans i18nKey='s3' />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spirit;
