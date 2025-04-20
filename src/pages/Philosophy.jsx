import React from 'react';
import styles from '../styles/Philosophy.module.scss';
import img1 from '../assets/images/philo01.webp';
import img2 from '../assets/images/philo02.webp';
import img3 from '../assets/images/philo03.webp';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../components/LanguageSelector';
import { Trans } from 'react-i18next';

const Philosophy = () => {
  const { t } = useTranslation();

  console.log(t('p').length);

  return (
    <section className={styles.philosophy}>
      <div style={{ position: 'absolute', top: 20, right: 20 }}>
        <LanguageSelector />
      </div>
      <div className={styles.philosophyList}>
        <div className={styles.item}>
          <img src={img1} alt='11' className={styles.top} />
          <br />
          <br />
          <ab>{t('philosophy')}</ab>
          <h4>
            <Trans i18nKey='h4' />
          </h4>
          <p className={t('p').length > 150 ? styles.innerEnP : styles.innerP}>
            <Trans i18nKey='p' />
          </p>
        </div>

        <div className={styles.item}>
          <img src={img2} alt='22' className={styles.top} />

          <br />
          <br />
          <ab>{t('vision')}</ab>
          <h4>GREAT FOOD COMPANY</h4>
          <p className={t('p2').length > 20 ? styles.innerEnP : styles.innerP}>
            <Trans i18nKey='p2' />
          </p>
        </div>

        <div className={styles.item}>
          <img src={img3} alt='33' className={styles.bot} />
          <br />
          <ab>{t('core')}</ab>
          <h4>
            <Trans i18nKey='1' />
          </h4>
          <p>
            <Trans i18nKey='2' />
          </p>
          <ul className={styles.innerTag}>
            <li className={styles.innerBox}>
              <div className={styles.innerText}>
                <h4>{t('integrity')}</h4>
                <p>
                  <Trans i18nKey='3' />
                </p>
              </div>
            </li>
            <li className={styles.innerBox}>
              <div className={styles.innerText}>
                <h4>{t('innovation')}</h4>
                <p>
                  <Trans i18nKey='4' />
                </p>
              </div>
            </li>
            <li className={styles.innerBox}>
              <div className={styles.innerText}>
                <h4>{t('integration')}</h4>
                <p>
                  <Trans i18nKey='5' />
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
