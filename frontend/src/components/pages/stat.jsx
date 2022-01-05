import React, { useEffect, useState } from "react";
import ActivePie from "../charts/ActivePieChart.jsx";
import Diamond from "../charts/DiamondChart.jsx";
import MixBar from "../charts/MixBarChart.jsx";
import DoubleBar from "../charts/DoubleBarChart.jsx";
import CustomPie from "../charts/CustomPieChart.jsx";

import Bar from "../charts/barChart";
import Nav from "../nav/nav.jsx";
import Box from "../box/box.jsx";
import styles from "./stat.module.css";

import platform from "../../PlatformStat/js_origin.json";

const Stat = () => {
  const [platformObj, setPlatformObj] = useState([]);

  useEffect(() => {
    setPlatformObj(platform);
  });

  useEffect(() => {
    for (let key in platform) {
      console.log(key);
      console.log(platform[key]);
    }
  }, [platformObj]);

  return (
    <>
      <Nav></Nav>
      <h1 className={styles.statTitle}>OTT 통계</h1>
      <div className={styles.genderContainer}>
        <div className={styles.genderStat}>
          <div className={styles.pieChart}>
            <p className={styles.pieTitle}>OTT 독점/오리지널 컨텐츠</p>
            <div className={styles.line}></div>
            <DoubleBar></DoubleBar>
          </div>
        </div>
      </div>
      <div className={styles.ageStat}>
        <p className={styles.pieTitle}>2008년 이전 컨텐츠</p>
        <div className={styles.line}></div>
        {/* <Diamond></Diamond> */}
        {/* <ActivePie></ActivePie> */}
        <CustomPie></CustomPie>
      </div>
      <div className={styles.ageStat}>
        <p className={styles.pieTitle}>TV 프로그램 종류</p>
        <div className={styles.line}></div>
        <MixBar></MixBar>
      </div>
      <div className={styles.totalContainer}>
        <Box
          width={250}
          height={250}
          title={"티빙"}
          backgroundColor={`#ffab91`}
        ></Box>
        <Box
          width={250}
          height={250}
          title={"티빙"}
          backgroundColor={`#ffab91`}
        ></Box>
        <Box
          width={250}
          height={250}
          title={"웨이브"}
          backgroundColor={`#c5e1a5`}
        ></Box>
        <Box
          width={250}
          height={250}
          title={"웨이브"}
          backgroundColor={`#c5e1a5`}
        ></Box>
      </div>
    </>
  );
};

export default Stat;
