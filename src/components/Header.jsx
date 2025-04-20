import React, { useState, useEffect } from 'react';
import styles from '../styles/Header.module.scss';
import { Link } from 'react-router-dom';
import HeaderList from './HeaderList';
import LanguageSelector from './LanguageSelector';
import logo from '../assets/images/SPC_logo_core_alt_color-removebg-preview.png';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isHoverMenu, setIsHoverMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleMouseOn = (flag) => {
    setIsHoverMenu(flag);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to='/' className={styles.logo}>
          <img src={logo} alt='SPC 로고' />
        </Link>
        {windowWidth > 1024 ? (
          <nav className={styles.nav}>
            <ul
              className={styles.right}
              onMouseEnter={() => handleMouseOn(true)}
            >
              <li>
                <Link to='/about' className={styles.lii}>
                  ABOUT SPC
                </Link>
              </li>
              <li>
                <Link to='/' className={styles.lii}>
                  HISTORY
                </Link>
              </li>
              <li>
                <Link to='/' className={styles.lii}>
                  BRAND
                </Link>
              </li>
              <li>
                <Link to='/' className={styles.lii}>
                  SPC NOW
                </Link>
              </li>
              <li>
                {/* /esg -> /esg/management로 수정함  */}
                <Link to='/esg/management' className={styles.lii}>
                  ESG
                </Link>
              </li>
              <li>
                <Link to='/support' className={styles.lii}>
                  SUPPORT
                </Link>
              </li>
            </ul>

            <ul className={styles.left}>
              <li>
                <button
                  className={styles.career}
                  onClick={() =>
                    window.open(
                      'https://spc.recruiter.co.kr/career/home',
                      '_blank',
                      'noopener,noreferrer',
                    )
                  }
                >
                  CAREERS
                </button>
              </li>
              <li>
                <LanguageSelector />
              </li>
            </ul>
          </nav>
        ) : (
          <MobileMenu />
        )}

        {isHoverMenu && (
          <HeaderList onMouse={handleMouseOn} visible={isHoverMenu} />
        )}
      </div>
    </header>
  );
};

export default Header;
