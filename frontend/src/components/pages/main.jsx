import React, { useEffect } from "react";
import styles from "./main.module.css";
import Nav from "../nav/nav.jsx";
import Guide from "../guide/guide.jsx";
import Line from "../charts/lineChart.jsx";

const Main = () => {
  return (
    <>
      <Nav></Nav>
      <Guide></Guide>
      <div className={styles.graph}>
        <h3 className={styles.mainGraphTitle}>코로나 전후 OTT 사용량 변화</h3>
        <Line></Line>
      </div>
    </>
  );
};

export default Main;
