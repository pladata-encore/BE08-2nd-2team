import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/Footer.module.scss';
import logo from '../assets/images/SPC_logo_core_alt_color-removebg-preview.png';

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [ulPosition, setUlPosition] = useState({ top: 0, left: 0 });
  const btnRef = useRef(null);

  useEffect(() => {
    if (isOpen && btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      setUlPosition({
        top: rect.top + window.scrollY - 120, // 버튼 위에 띄우기 (조절 가능)
        left: rect.left + window.scrollX,
      });
    }
  }, [isOpen]);

  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <div>
          <div>
            <img src={logo} alt='SPC 로고' className={styles.logo} />
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className={styles.tags}>
            서울시 서초구 양재동 남부순환로 2620 (양재동 11-149)
          </div>
          <ul className={styles.links}>
            <li className={styles.linksList}>
              <a
                href='https://www.spc.co.kr/privacy/privacy-policy'
                target='_blank'
              >
                개인정보 처리방침&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
              </a>
            </li>
            <li className={styles.linksList}>
              <a
                href='https://www.spc.co.kr/privacy/privacy-email'
                target='_blank'
              >
                &nbsp;&nbsp;&nbsp;&nbsp;이메일수집 거부&nbsp;&nbsp;&nbsp;&nbsp;|
              </a>
            </li>
            <li className={styles.linksList}>
              <a
                href='https://happy.spc.co.kr/index_src/regist/regist01.jsp'
                target='_blank'
              >
                &nbsp;&nbsp;&nbsp;&nbsp;거래희망사전등록&nbsp;&nbsp;&nbsp;|
              </a>
            </li>
          </ul>
          <ul className={styles.links}>
            <li className={styles.linksList}>
              <a
                href='https://www.spc.co.kr/privacy/privacy-video-1945'
                target='_blank'
              >
                고정형 영상정보처리기기 운영관리 방침&nbsp;&nbsp;&nbsp;&nbsp;|
              </a>
            </li>
            <li className={styles.linksList}>
              <a href='https://www.spc.co.kr/notice' target='_blank'>
                &nbsp;&nbsp;&nbsp;&nbsp;공지사항
              </a>
            </li>
          </ul>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <div className={styles.familySite}>
            {isOpen && (
              <ul
                className={styles.familyList}
                style={{
                  top: `${ulPosition.top - 10}px`,
                  left: `${ulPosition.left}px`,
                }}
              >
                <li>
                  <a href='https://www.paris.co.kr/' target='_blank'>
                    파리바게뜨
                  </a>
                </li>
                <li>
                  <a href='https://www.baskinrobbins.co.kr/' target='_blank'>
                    배스킨라빈스
                  </a>
                </li>
                <li>
                  <a href='https://www.dunkindonuts.co.kr/' target='_blank'>
                    던킨
                  </a>
                </li>
                <li>
                  <a href='https://spcsamlip.co.kr/' target='_blank'>
                    SPC삼립
                  </a>
                </li>
                <li>
                  <a href='http://www.pariscroissant.co.kr/' target='_blank'>
                    파리크라상
                  </a>
                </li>
                <li>
                  <a href='http://spcpassion5.com/' target='_blank'>
                    패션5
                  </a>
                </li>
                <li>
                  <a href='http://www.shakeshack.kr/' target='_blank'>
                    쉐이크쉑
                  </a>
                </li>
                <li>
                  <a href='http://www.caffe-pascucci.co.kr/' target='_blank'>
                    파스쿠찌
                  </a>
                </li>
                <li>
                  <a href='https://www.coffeeatworks.kr/' target='_blank'>
                    커피앳웍스
                  </a>
                </li>
                <li>
                  <a href='https://linaskorea.com/' target='_blank'>
                    리나스
                  </a>
                </li>
                <li>
                  <a href='http://www.jambajuice.co.kr/' target='_blank'>
                    잠바주스
                  </a>
                </li>
                <li>
                  <a href='http://www.bizeun.co.kr/' target='_blank'>
                    빚은
                  </a>
                </li>
                <li>
                  <a href='http://dining.spc.co.kr/' target='_blank'>
                    SPC외식브랜드
                  </a>
                </li>
                <li>
                  <a href='http://www.happypointcard.com/' target='_blank'>
                    해피포인트
                  </a>
                </li>
                <li>
                  <a href='http://www.happyconstore.com/' target='_blank'>
                    해피콘
                  </a>
                </li>
                <li>
                  <a href='https://www.spcculinary.co.kr/' target='_blank'>
                    SPC컬리너리아카데미
                  </a>
                </li>
                <li>
                  <a href='http://www.dqueenscatering.com/' target='_blank'>
                    디퀸즈
                  </a>
                </li>
                <li>
                  <a href='http://www.secta9ine.co.kr/' target='_blank'>
                    섹타나인
                  </a>
                </li>
                <li>
                  <a href='https://www.spcgfs.co.kr/' target='_blank'>
                    SPC GFS
                  </a>
                </li>
                <li>
                  <a href='http://spcpack.co.kr/' target='_blank'>
                    SPC PACK
                  </a>
                </li>
                <li>
                  <a
                    href='http://www.spctigerinternational.co.kr/'
                    target='_blank'
                  >
                    타이거인터내셔널
                  </a>
                </li>
                <li>
                  <a href='https://www.oniljang.com/' target='_blank'>
                    온일장
                  </a>
                </li>
                <li>
                  <a href='https://www.krumb.co.kr/' target='_blank'>
                    KRUMB
                  </a>
                </li>
              </ul>
            )}
            FAMILY SITE&nbsp;&nbsp;
            <button
              className={styles.plusBtn}
              id='plusBtn'
              ref={btnRef}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? '-' : '+'}
            </button>
            <br />
            <br />
            <br />
            <div className={styles.copy}>
              Copyright SPC All rights reserved.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <ul className={styles.titles}>
          <li>
            ABOUT SPC
            <ul className={styles.innerItem}>
              <li>
                <a href='/about'>SPC WAY</a>
              </li>
              <li>R&D</li>
              <li>관계사</li>
              <li>글로벌</li>
              <li>CI소개</li>
            </ul>
          </li>
          <li>
            HISTORY
            <ul className={styles.innerItem}>
              <li>헤리티지</li>
              <li>연혁</li>
            </ul>
          </li>
          <li>
            BRAND
            <ul className={styles.innerItem}>
              <li>베이커리</li>
              <li>디저트</li>
              <li>외식/다이닝</li>
              <li>커피/음료</li>
              <li>유통/서비스</li>
            </ul>
          </li>
          <li>
            SPC NOW
            <ul className={styles.innerItem}>
              <li>뉴스</li>
              <li>매거진</li>
              <li>SNS</li>
            </ul>
          </li>
          <li>
            ESG
            <ul className={styles.innerItem}>
              <li>
                <a href='/esg/management'>ESG경영</a>
              </li>
              <li>정도경영</li>
              <li>안전경영</li>
              <li>행복한 재단</li>
              <li>사회공헌</li>
            </ul>
          </li>
          <li>
            SUPPORT
            <ul className={styles.innerItem}>
              <li>
                <a href='/Support'>가맹문의</a>
              </li>
              <li>위치안내</li>
              <li>문의하기</li>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
