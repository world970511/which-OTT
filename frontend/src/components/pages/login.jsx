import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";
import Nav from "../nav/nav.jsx";

const Login = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const idRef = useRef();
  const pwRef = useRef();

  const handleInput = () => {
    let idValue;
    let pwValue;

    idValue = idRef.current.value;
    pwValue = pwRef.current.value;

    setUserId(idValue);
    setUserPw(pwValue);
  };

  const onClick = () => {
    navigate("/signup");
  };

  const login_ok = () => {
    let token = localStorage.getItem("token");
    var axios = require("axios");
    var data = JSON.stringify({
      user_id: `${userId}`,
      password: `${userPw}`,
    });

    const url = `${"https://cors-anywhere.herokuapp.com/http://elice-kdt-3rd-team-14.koreacentral.cloudapp.azure.com:5000/register"}`;

    var config = {
      method: "post",
      url: url,
      headers: {
        "Content-Type": "application/json",
        // `Authorization`: `Bearer ${token}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      // .then((res) => {
      //   // 토큰 저장
      //   if (res.status === 200) {
      //     let user = res.data.token;
      //     localStorage.setItem("token", user);

      //     // 페이지 이동
      //     navigate("/");
      //   }
      // })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className={styles.basicContainer}>
      <Nav></Nav>
      <div className={styles.backdrop}>
        <h1 className={styles.loginTitle}>Welcome!</h1>
        <div className={styles.inputContainer}>
          <p>아이디</p>
          <input
            type="text"
            value={userId}
            ref={idRef}
            onChange={handleInput}
            placeholder=" ID를 입력해주세요"
          />
          <p>비밀번호</p>
          <input
            type="text"
            value={userPw}
            ref={pwRef}
            onChange={handleInput}
            placeholder=" 비밀번호를 입력해주세요."
          />
        </div>
        <div className={styles.btnContainer}>
          <button onClick={login_ok}>로그인</button>
          <button onClick={onClick}>회원가입</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
