import React from 'react';
import styles from '../styles/StrategyTable.module.scss';

const StrategyTable = () => {
  return (
    <div className={styles.outer}>
      <div className={styles.left}>
        <div className={styles.leftItem}>추진 방향</div>
        <div className={styles.leftItem}>전략</div>
        <div className={styles.leftItem}>전략 과제</div>
        <div className={styles.leftItem}>추진 기반 체계</div>
      </div>
      <div className={styles.right}>
        <div className={styles.top}>
          <div className={styles.first}>
            <div className={styles.one}>ESG를 통한 성장 기반 강화</div>
            <div className={styles.two}>
              모두가 행복하고 건강한 근무환경 조성
            </div>
            <div className={styles.three}>
              <ul className={styles.list}>
                <li>안전보건경영 시스템 고도화</li>
                <li>건강, 행복 증진 프로그램 활성화</li>
                <li>윤리/준법경영 체계 고도화</li>
                <li>윤리경영 확산 및 내재화</li>
              </ul>
            </div>
          </div>
          <div className={styles.second}>
            <div className={styles.midBlock}>
              <h2>
                HAPPY & HEALTHY <br />
                COMPANY
              </h2>
              <p>
                SPC 그룹은 이해관계자 모두의 <br />
                행복과 건강을 추구하는 기업이 된다.
              </p>
            </div>
          </div>
          <div className={styles.third}>
            <div className={styles.one}>ESG를 통한 제품 경쟁력 강화</div>
            <div className={styles.two}>모두가 행복하고 건강한 제품 확대</div>
            <div className={styles.three}>
              <ul className={styles.list}>
                <li>환경을 고려한 제춤 개발 확대</li>
                <li>지역 농가 및 소상공인 제품 개발</li>
                <li>건강과 맛을 고려한 제품 개발</li>
                <li>ESG 제품 개발을 위한 R&D 강화</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          Strengthen & Expand the ESG Management System
        </div>
      </div>
    </div>
  );
};

export default StrategyTable;
