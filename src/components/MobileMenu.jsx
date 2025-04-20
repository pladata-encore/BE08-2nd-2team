import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/MobileMenu.module.scss';

function MobileMenu() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <nav className={styles.gnbMobile}>
      <FontAwesomeIcon icon={faBars} onClick={() => setIsClicked(!isClicked)} />
      {isClicked && (
        <div className={styles.container}>
          <ul className={styles.linkList}>
            <li>
              <a href='/about' className={styles.link}>
                SPC WAY
              </a>
            </li>
            <li>
              <a href='/esg/management' className={styles.link}>
                ESG 경영
              </a>
            </li>
            <li>
              <a href='/support' className={styles.link}>
                가맹문의
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default MobileMenu;
