import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./signUp.module.css";
import Nav from "../nav/nav.jsx";
import axios from "axios";

const SignUp = () => {
  const [toast, setToast] = useState(false);

  const [toss, setToss] = useState(false);

  const navigate = useNavigate();
  // const history = useHistory();

  const [checkedId, setCheckedId] = useState("");
  const [checkedPW, setCheckedPW] = useState("");
  const [checkedDoublePW, setDoublePW] = useState("");
  const [checkedNick, setCheckedNick] = useState("");
  const [checkedEmail, setCheckedEmail] = useState("");

  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [checkPw, setCheckPw] = useState("");
  const [userNick, setUserNick] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const idRef = useRef();
  const pwRef = useRef();
  const checkRef = useRef();
  const nickRef = useRef();
  const emailRef = useRef();

  const handleInput = () => {
    let idValue;
    let pwValue;
    let checkValue;
    let nickValue;
    let emailValue;

    idValue = idRef.current.value;
    pwValue = pwRef.current.value;
    checkValue = checkRef.current.value;
    nickValue = nickRef.current.value;
    emailValue = emailRef.current.value;

    setUserId(idValue);
    setUserPw(pwValue);
    setCheckPw(checkValue);
    setUserNick(nickValue);
    setUserEmail(emailValue);
  };

  const toastShow = () => {
    if (toast) return;
    console.log("show");
    setToast(true);
    setToss(true);
    setTimeout(() => {
      setToss(false);
      setToast(false);
    }, 2000);
  };

  useEffect(() => {
    if (!strCheck(userPw, "id")) {
      setCheckedId("영문으로 입력해주세요");
      toastShow();
    } else {
      setCheckedId(null);
    }
  }, [userId]);

  useEffect(() => {
    if (!strCheck(userPw, "pwd")) {
      setCheckedPW("영문/숫자/특수문자(!@#$%^&*)를 포함하여 8~16자로 입력");
      toastShow();
    } else {
      setCheckedPW(null);
    }
    if (userPw !== checkPw) {
      setDoublePW("동일한 비밀번호를 입력해주세요");
      toastShow();
    } else {
      setDoublePW(null);
    }
  }, [userPw, checkPw]);

  useEffect(() => {
    if (!strCheck(userNick, "nickname")) {
      setCheckedNick("영문으로 입력해주세요");
      toastShow();
    } else {
      setCheckedNick(null);
    }
  }, [userNick]);

  useEffect(() => {
    if (!strCheck(userEmail, "email")) {
      setCheckedEmail("이메일 형식을 지켜주세요");
      toastShow();
    } else {
      setCheckedEmail(null);
    }
  }, [userEmail]);

  const strCheck = (str, type) => {
    var REGEX = {
      ID: /^[A-za-z]/g,
      EMAIL: /\S+@\S+\.\S+/,
      PWD_RULE: /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,16}$/,
      NAME_RULE: /^[가-힣a-zA-Z]+$/,
    };

    if (type === "id") {
      return REGEX.ID.test(str);
    } else if (type === "email") {
      return REGEX.EMAIL.test(str);
    } else if (type === "pwd") {
      return REGEX.PWD_RULE.test(str);
    } else if (type === "nickname") {
      return REGEX.ID.test(str);
    } else {
      return false;
    }
  };

  const register_ok = () => {
    var axios = require("axios");
    var data = JSON.stringify({
      user_id: `${userId}`,
      password: `${userPw}`,
      nickname: `${userNick}`,
      email: `${userEmail}`,
    });

    const url = `${"https://cors-anywhere.herokuapp.com/http://elice-kdt-3rd-team-14.koreacentral.cloudapp.azure.com:5000/register"}`;

    var config = {
      method: "post",
      url: url,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      // .then((result) => {
      //   result.status === 200 ? alert("회원가입 성공") : alert("회원가입 실패");
      // })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className={styles.basicContainer}>
      <Nav></Nav>
      <div className={styles.signbackdrop}>
        <h1 className={styles.loginTitle}>Sign Up</h1>
        <div className={styles.inputContainer}>
          <p className={styles.inputBox}>아이디</p>
          <input
            type="text"
            value={userId}
            ref={idRef}
            onChange={handleInput}
            placeholder="ID를 입력해주세요"
          />
          <p className={styles.inputBox}>비밀번호</p>
          <input
            type="text"
            value={userPw}
            ref={pwRef}
            onChange={handleInput}
            placeholder="비밀번호를 입력해주세요."
          />
          <p className={styles.inputBox}>비밀번호 확인</p>
          <input
            type="text"
            value={checkPw}
            ref={checkRef}
            onChange={handleInput}
            placeholder="비밀번호 재확인"
          />
          <p className={styles.inputBox}>닉네임</p>
          <input
            type="text"
            value={userNick}
            ref={nickRef}
            onChange={handleInput}
            placeholder="닉네임을 입력해주세요."
          />
          <p className={styles.inputBox}>이메일</p>
          <input
            type="text"
            value={userEmail}
            ref={emailRef}
            onChange={handleInput}
            placeholder="이메일을 입력해주세요."
          />
          <div>
            {/* <div className={`${styles.toast} ${toss && styles.show}`}>
              {userId !== "" ? checkedId : null}
            </div>
            <div className={`${styles.toast1} ${toss && styles.show1}`}>
              {userPw !== "" ? checkedPW : null}
            </div>
            <div className={`${styles.toast2} ${toss && styles.show2}`}>
              {checkPw !== "" ? checkedDoublePW : null}
            </div>
            <div className={`${styles.toast3} ${toss && styles.show3}`}>
              {userNick !== "" ? checkedNick : null}
            </div>
            <div className={`${styles.toast4} ${toss && styles.show4}`}>
              {userEmail !== "" ? checkedEmail : null}
            </div> */}
          </div>
        </div>
        <div className={styles.btnContainer}>
          <button className={styles.signupBtn} onClick={register_ok}>
            가입하기
          </button>
        </div>
      </div>
      <div className={`${styles.sticker} ${toss && styles.moving}`}>
        <p>{userId !== "" ? checkedId : null}</p>
        <p>{userPw !== "" ? checkedPW : null}</p>
        <p>{checkPw !== "" ? checkedDoublePW : null}</p>
        <p>{userNick !== "" ? checkedNick : null}</p>
        <p>{userEmail !== "" ? checkedEmail : null}</p>
      </div>
    </div>
  );
};

export default SignUp;
