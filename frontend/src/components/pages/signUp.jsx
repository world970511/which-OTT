import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./signUp.module.css";
import Nav from "../nav/nav.jsx";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  // const history = useHistory();

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
      //   result.message === "SUCCESS"
      //     ? alert("회원가입 성공")
      //     : alert("회원가입 실패");
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
          <p>아이디</p>
          <input
            type="text"
            value={userId}
            ref={idRef}
            onChange={handleInput}
            placeholder="ID를 입력해주세요"
          />
          <p>비밀번호</p>
          <input
            type="text"
            value={userPw}
            ref={pwRef}
            onChange={handleInput}
            placeholder="비밀번호를 입력해주세요."
          />
          <p>비밀번호 확인</p>
          <input
            type="text"
            value={checkPw}
            ref={checkRef}
            onChange={handleInput}
            placeholder="비밀번호 재확인"
          />
          <p>닉네임</p>
          <input
            type="text"
            value={userNick}
            ref={nickRef}
            onChange={handleInput}
            placeholder="닉네임을 입력해주세요."
          />
          <p>이메일</p>
          <input
            type="text"
            value={userEmail}
            ref={emailRef}
            onChange={handleInput}
            placeholder="이메일을 입력해주세요."
          />
        </div>
        <div className={styles.btnContainer}>
          <button onClick={register_ok}>가입하기</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
