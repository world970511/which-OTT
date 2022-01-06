import React, { useState, useRef, useEffect, useContext } from "react";
import Nav from "../nav/nav.jsx";
import styles from "./classTest.module.css";
import { AuthContext } from "../context/AuthContext.jsx";
import Loading from "../loading/loading.jsx";

const ClassTest = () => {
  const [userName, setUserName] = useState("");
  const [userGender, setUserGender] = useState("");
  const [userAge, setUserAge] = useState("");
  const [useTime, setUseTime] = useState("");
  const [useCycle, setUseCycle] = useState("");

  const [checkTest, setCheckTest] = useState(false);
  const [oneCheck, setOneCheck] = useState(false);
  const [twoCheck, setTwoCheck] = useState(false);

  const [submit, setSubmit] = useState(true);

  const { handleUserClass } = useContext(AuthContext);

  const nameRef = useRef();
  const genderRef = useRef();
  const ageRef = useRef();
  const useTimeRef = useRef();
  const useCycleRef = useRef();

  const handleInput = () => {
    let nameValue;
    // let genderValue;

    nameValue = nameRef.current.value;
    // genderValue = genderRef.current.value;

    setUserName(nameValue);
    // setUserGender(genderValue);
  };

  const onChangeRadio = (e) => {
    const genderValue = e.target.value;
    setUserGender(genderValue);
  };

  const handleSelected = () => {
    let useTimes = useTimeRef.current.value;
    let useCycles = useCycleRef.current.value;
    let ageValue = ageRef.current.value;

    setUseTime(useTimes);
    setUseCycle(useCycles);
    setUserAge(ageValue);
  };

  useEffect(() => {
    console.log(userAge);
    if (userName !== "" && userGender !== "" && userAge !== "") {
      setOneCheck(true);
    } else if (userName === "" || userGender === "" || userAge === "none") {
      setOneCheck(false);
    }
  }, [userName, userGender, userAge]);

  useEffect(() => {
    if (useTime === "none" || useCycle === "none") {
      setTwoCheck(false);
    } else if (useTime !== "" && useCycle !== "") {
      setTwoCheck(true);
    }
  }, [useTime, useCycle]);

  const result_ok = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      age: parseInt(`${userAge}`),
      usage_time: `${useTime}`,
      frequency_of_use: `${useCycle}`,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const url = `${"https://cors-anywhere.herokuapp.com/http://elice-kdt-3rd-team-14.koreacentral.cloudapp.azure.com:5000/usage_survey"}`;

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) =>
        handleUserClass({
          classTest: result,
          userAge: parseInt(`${userAge}`),
          userName: userName,
          userGender: userGender,
        })
      )
      .then(() => {
        setSubmit(false);
      })
      .catch((error) => {
        console.log("error", error);
        setSubmit(false);
      });
  };

  return (
    <>
      <Nav></Nav>
      {submit ? (
        <div className={styles.basicContainer}>
          <h1>등급검사</h1>
          <div className={styles.line}></div>
          <div className={styles.signalContainer}>
            <div
              className={`${styles.signal_Black} ${
                oneCheck ? styles.signal_Light : styles.signal_Black
              }`}
            ></div>
            <div
              className={`${styles.signal_Black} ${
                twoCheck ? styles.signal_Light : styles.signal_Black
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
                <p className={styles.selectTitle}>이름</p>
                <input
                  value={userName}
                  ref={nameRef}
                  onChange={handleInput}
                  type="text"
                />
                <p className={styles.selectTitle}>성별</p>
                {/* <input
                  value={userGender}
                  ref={genderRef}
                  onChange={handleInput}
                  type="text"
                /> */}
                <div className={styles.radioBtn}>
                  <label>
                    <input
                      className={styles.radioInput}
                      type="radio"
                      name="gender"
                      value={"man"}
                      onChange={onChangeRadio}
                    />
                    남
                  </label>
                  <label>
                    <input
                      className={styles.radioInput}
                      type="radio"
                      name="gender"
                      value={"woman"}
                      onChange={onChangeRadio}
                    />
                    여
                  </label>
                </div>
                <p className={styles.selectTitle}>나이</p>
                <select
                  className={styles.playTime}
                  onChange={handleSelected}
                  ref={ageRef}
                >
                  <option value="none">--- 선택 ---</option>
                  <option value="9">만 10세 미만</option>
                  <option value="19">만 20세 미만</option>
                  <option value="29">만 30세 미만</option>
                  <option value="39">만 40세 미만</option>
                  <option value="49">만 50세 미만</option>
                  <option value="59">만 60세 미만</option>
                  <option value="69">만 70세 미만</option>
                  <option value="79">만 70세 이상</option>
                </select>
              </div>
              <div
                className={`${styles.moveText} ${
                  checkTest ? styles.rightMove : styles.leftMove
                }`}
              >
                <p className={styles.selectTitle}>이용시간</p>
                <select
                  className={styles.playTime}
                  onChange={handleSelected}
                  ref={useTimeRef}
                >
                  <option value="none">--- 선택 ---</option>
                  <option value="five_m">5분 미만</option>
                  <option value="ten_m">5분 이상 10분 미만</option>
                  <option value="thirty_m">10분 이상 30분 미만</option>
                  <option value="one_h">30분 이상 1시간 미만</option>
                  <option value="two_h">1시간 이상 2시간 미만</option>
                  <option value="over">2시간 이상</option>
                </select>
                <p className={styles.selectTitle}>이용빈도</p>
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
                className={styles.testBtn}
                onClick={() => {
                  setCheckTest(false);
                }}
              >
                이전
              </button>
              <button
                className={styles.testBtn}
                onClick={() => {
                  setCheckTest(true);
                }}
              >
                다음
              </button>
              <button className={styles.testBtn} onClick={result_ok}>
                완료
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default ClassTest;
