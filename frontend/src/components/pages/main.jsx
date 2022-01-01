import React from "react";
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
        <Line></Line>
      </div>
    </>
  );
};

export default Main;
