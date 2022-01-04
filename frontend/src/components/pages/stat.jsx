import React from "react";
import Pie from "../charts/pieChart";
import Bar from "../charts/barChart";
import Nav from "../nav/nav.jsx";
import Box from "../box/box.jsx";
import styles from "./stat.module.css";

const Stat = () => {
  return (
    <>
      <Nav></Nav>
      <h1 className={styles.statTitle}>OTT 서비스 이용 시간</h1>
      <div className={styles.genderContainer}>
        <div className={styles.genderStat}>
          <div className={styles.pieChart}>
            <p className={styles.pieTitle}>남성</p>
            <div className={styles.line}></div>
            <Pie></Pie>
          </div>
          <div className={styles.pieChart}>
            <p className={styles.pieTitle}>여성</p>
            <div className={styles.line}></div>
            <Pie></Pie>
          </div>
        </div>
      </div>
      <div className={styles.ageStat}>
        <p className={styles.pieTitle}>연령별</p>
        <div className={styles.line}></div>
        <Bar></Bar>
      </div>
      <div className={styles.totalContainer}>
        <Box
          width={350}
          height={150}
          title={"남성"}
          most={"10분 이상 ~ 30분 미만"}
          backgroundColor={`#80deea`}
        ></Box>
        <Box
          width={350}
          height={150}
          title={"여성"}
          most={"10분 이상 ~ 30분 미만"}
          backgroundColor={`#ffab91`}
        ></Box>
        <Box
          width={350}
          height={150}
          title={"연령별"}
          most={"10분 이상 ~ 30분 미만"}
          backgroundColor={`#c5e1a5`}
        ></Box>
      </div>
    </>
  );
};

export default Stat;
