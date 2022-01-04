import React, { useState } from "react";
import Pie from "../charts/pieChart";
import Bar from "../charts/barChart";
import Box from "../box/box.jsx";
import Nav from "../nav/nav.jsx";
import styles from "./result.module.css";

const Result = () => {
  const [checkTest, setCheckTest] = useState(false);

  return (
    <>
      <Nav></Nav>
      <div className={styles.resultContainer}>
        <h1 className={styles.resultTitle}>OTT 사용 등급 결과</h1>
        <div className={styles.totalContainer}>
          <div>
            <h4 className={styles.intro}>
              당신의 OTT 사용 패턴은 평균치와 근접합니다.
            </h4>
            <h4 className={styles.detail}>
              당신의 OTT 사용 패턴은 평균치와 근접합니다.
            </h4>
            <div className={styles.line}></div>
          </div>
          <div className={styles.boxContainer}>
            <Box
              width={350}
              height={150}
              title={"이용시간"}
              most={"10분 이상 ~ 30분 미만"}
              backgroundColor={`#80deea`}
            ></Box>
            <Box
              width={350}
              height={150}
              title={"이용빈도"}
              most={"10분 이상 ~ 30분 미만"}
              backgroundColor={`#ffab91`}
            ></Box>
          </div>
        </div>

        <div className={styles.totalContainer}>
          <div>
            <h4 className={styles.detail}>
              당신의 정보와 비슷한 이용자의 평균 결과는 다음과 같습니다.
            </h4>
            <div className={styles.line}></div>
          </div>
          <div className={styles.boxContainer}>
            <div
              className={`${styles.genderContainer} ${
                checkTest ? styles.rightMove : styles.leftMove
              }`}
            >
              <h4 className={styles.statTitle}>OTT 서비스 이용 시간</h4>
              <div className={styles.genderStat}>
                <div className={styles.pieChart}>
                  <p className={styles.pieTitle}>남성</p>
                  <div className={styles.detailLine}></div>
                  <Pie w={350} h={350}></Pie>
                </div>
                <div className={styles.pieChart}>
                  <p className={styles.pieTitle}>여성</p>
                  <div className={styles.detailLine}></div>
                  <Pie w={350} h={350}></Pie>
                </div>
              </div>
            </div>
            <div
              className={`${styles.genderContainer} ${
                checkTest ? styles.rightMove : styles.leftMove
              }`}
            >
              <h4 className={styles.statTitle}>OTT 서비스 이용 빈도</h4>
              <div className={styles.genderStat}>
                <div className={styles.pieChart}>
                  <p className={styles.pieTitle}>남성</p>
                  <div className={styles.detailLine}></div>
                  <Pie w={350} h={350}></Pie>
                </div>
                <div className={styles.pieChart}>
                  <p className={styles.pieTitle}>여성</p>
                  <div className={styles.detailLine}></div>
                  <Pie w={350} h={350}></Pie>
                </div>
              </div>
            </div>
            <button
              className={styles.prevBtn}
              onClick={() => {
                setCheckTest(false);
              }}
            >
              <i
                className={`${`fas fa-chevron-left`} ${
                  checkTest ? null : styles.grayBtn
                }`}
              ></i>
            </button>
            <button
              className={styles.nextBtn}
              onClick={() => {
                setCheckTest(true);
              }}
            >
              <i
                className={`${`fas fa-chevron-right`} ${
                  checkTest ? styles.grayBtn : null
                }`}
              ></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
