import React from "react";
import styles from "./box.module.css";

const Box = (props) => {
  let width = props.width;
  let height = props.height;
  let title = props.title;
  let most = props.most;
  // let color = props.color;
  let backgroundColor = props.backgroundColor;

  return (
    <>
      <div className={styles.box} style={{ width, height }}>
        <h4>{title}</h4>
        <div className={styles.line}></div>
        <div className={styles.resultContainer} style={{ backgroundColor }}>
          <p className={styles.boxResult}>{most}</p>
        </div>
      </div>
    </>
  );
};

export default Box;
