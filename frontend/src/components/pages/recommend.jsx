import React from "react";
import Nav from "../nav/nav.jsx";
import styles from "./recommend.module.css";

const Recommend = () => {
  return (
    <div>
      <Nav></Nav>
      <div className={styles.headerContainer}>
        <h1>추천 플랫폼</h1>
        <div>
          <div className={styles.selectOption}>
            <select className={styles.playTime}>
              <option value="none">--- 장르 선택 ---</option>
              <option value="korean">TV 프로그램</option>
              <option value="english">영화</option>
            </select>
            <input type="text" placeholder="프로그램 타이틀 검색" />
            <input type="text" placeholder="배우 검색" />
          </div>
        </div>
      </div>
      <div className={styles.viewContainer}></div>
    </div>
  );
};

export default Recommend;
