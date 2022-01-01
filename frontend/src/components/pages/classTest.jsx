import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../nav/nav.jsx";
import styles from "./classTest.module.css";

const ClassTest = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userGender, setUserGender] = useState("");
  const [userAge, setUserAge] = useState("");
  const [useTime, setUseTime] = useState("");
  const [useCycle, setUseCycle] = useState("");

  const [checkTest, setCheckTest] = useState(false);
  const [userCheck, setUserCheck] = useState(0);

  const nameRef = useRef();
  const genderRef = useRef();
  const ageRef = useRef();
  const useTimeRef = useRef();
  const useCycleRef = useRef();

  const checkOne = 1;
  const checkTwo = 2;

  const handleInput = () => {
    let nameValue;
    let genderValue;
    let ageValue;

    nameValue = nameRef.current.value;
    genderValue = genderRef.current.value;
    ageValue = ageRef.current.value;

    setUserName(nameValue);
    setUserGender(genderValue);
    setUserAge(ageValue);
  };

  const handleSelected = () => {
    let useTimes = useTimeRef.current.value;
    let useCycles = useCycleRef.current.value;

    setUseTime(useTimes);
    setUseCycle(useCycles);
  };

  useEffect(() => {
    if (userName !== "" && userGender !== "" && userAge !== "") {
      setUserCheck(checkOne);
    } else {
      let count = userCheck <= 0 ? userCheck - 1 : 0;
      setUserCheck(count);
    }
  }, [userName, userGender, userAge]);

  useEffect(() => {
    if (useTime === "none" || useCycle === "none") {
      let count = userCheck >= 1 ? 1 : 0;
      setUserCheck(count);
    } else if (useTime !== "" && useCycle !== "") {
      // const add = 2;
      setUserCheck(checkTwo);
    }
  }, [useTime, useCycle]);

  return (
    <>
      <Nav></Nav>
      <div className={styles.basicContainer}>
        <h1>등급검사</h1>
        <div className={styles.line}></div>
        <div className={styles.signalContainer}>
          <div
            className={`${styles.signal_Black} ${
              userCheck >= 1 ? styles.signal_Light : styles.signal_Black
            }`}
          ></div>
          <div
            className={`${styles.signal_Black} ${
              userCheck === 2 ? styles.signal_Light : styles.signal_Black
            }`}
          ></div>
        </div>
        <div className={styles.backdrop}>
          <div className={styles.testBox}>
            <div
              className={`${styles.moveText} ${
                checkTest ? styles.rightMove : styles.leftMove
              }`}
            >
              <p>이름</p>
              <input
                value={userName}
                ref={nameRef}
                onChange={handleInput}
                type="text"
              />
              <p>성별</p>
              <input
                value={userGender}
                ref={genderRef}
                onChange={handleInput}
                type="text"
              />
              <p>나이</p>
              <input
                value={userAge}
                ref={ageRef}
                onChange={handleInput}
                type="text"
              />
            </div>
            <div
              className={`${styles.moveText} ${
                checkTest ? styles.rightMove : styles.leftMove
              }`}
            >
              <p>이용시간</p>
              <select
                className={styles.playTime}
                onChange={handleSelected}
                ref={useTimeRef}
              >
                <option value="none">--- 선택 ---</option>
                <option value="5m">5분 미만</option>
                <option value="10m">5분 이상 10분 미만</option>
                <option value="30m">10분 이상 30분 미만</option>
                <option value="1h">30분 이상 1시간 미만</option>
                <option value="2h">1시간 이상 2시간 미만</option>
                <option value="over">2시간 이상</option>
              </select>
              <p>이용빈도</p>
              <select
                className={styles.playTime}
                onChange={handleSelected}
                ref={useCycleRef}
              >
                <option value="none">--- 선택 ---</option>
                <option value="many">하루에도 여러번</option>
                <option value="every">하루1번(매일)</option>
                <option value="week_six">1주일에 5~6회</option>
                <option value="week_four">1주일에 3~4회</option>
                <option value="week_two">1주일에 1~2회</option>
                <option value="month_three">월1~3회</option>
                <option value="month_one">월1회</option>
              </select>
            </div>
          </div>
          <div className={styles.btnContainer}>
            <button
              className={styles.backBtn}
              onClick={() => {
                setCheckTest(false);
              }}
            >
              이전
            </button>
            <button
              className={styles.nextBtn}
              onClick={() => {
                setCheckTest(true);
              }}
            >
              다음
            </button>
            <button
              onClick={() => {
                navigate("/result");
              }}
            >
              완료
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassTest;
