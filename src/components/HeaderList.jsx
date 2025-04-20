import React, { useEffect, useState } from 'react';
import styles from '../styles/HeaderList.module.scss';
import { Link } from 'react-router-dom';

const menuItems = [
  {
    title: 'ABOUT SPC',
    items: [
      { label: 'SPC WAY', link: '/about' },
      { label: 'R&D' },
      { label: '관계사' },
      { label: '글로벌' },
      { label: 'CI소개' },
    ],
  },
  {
    title: 'HISTORY',
    items: [{ label: '헤리티지' }, { label: '연혁' }],
  },
  {
    title: 'BRAND',
    items: [
      { label: '베이커리' },
      { label: '디저트' },
      { label: '외식/다이닝' },
      { label: '커피/음료' },
      { label: '유통/서비스' },
    ],
  },
  {
    title: 'SPC NOW',
    items: [{ label: '뉴스' }, { label: '매거진' }, { label: 'SNS' }],
  },
  {
    title: 'ESG',
    items: [
      { label: 'ESG경영', link: '/esg/management' },
      { label: '정도경영' },
      { label: '안전경영' },
      { label: '행복한 재단' },
      { label: '사회공헌' },
    ],
  },
  {
    title: 'SUPPORT',
    items: [
      { label: '가맹문의', link: '/support' },
      { label: '위치 안내' },
      { label: '문의하기' },
    ],
  },
];

const HeaderList = ({ onMouse }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`${styles.dropdown} ${isVisible ? styles.visible : ''}`}
      onMouseLeave={() => onMouse(false)}
    >
      {menuItems.map((menu, index) => (
        <div key={index} className={styles.column}>
          <ul className={styles.items}>
            {menu.items.map((item, i) => (
              <li key={i} className={styles.item}>
                <Link to={item.link || '#'}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default HeaderList;
