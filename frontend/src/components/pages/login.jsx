import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";
import Nav from "../nav/nav.jsx";
import { AuthContext } from "../context/AuthContext.jsx";

const Login = () => {
  const navigate = useNavigate();

  const { handleLogin } = useContext(AuthContext);

  const [form, setForm] = useState({
    userId: "",
    userPw: "",
  });

  const onSubmit = () => {
    var axios = require("axios");
    var data = JSON.stringify({
      user_id: `${form.userId}`,
      password: `${form.userPw}`,
    });

    const url = `${"https://cors-anywhere.herokuapp.com/http://elice-kdt-3rd-team-14.koreacentral.cloudapp.azure.com:5000/login"}`;

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
        handleLogin({
          newToken: JSON.stringify(response.data.access_token),
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onClick = () => {
    navigate("/signup");
  };

  const login_ok = () => {
    var axios = require("axios");
    var data = JSON.stringify({
      user_id: `${form.userId}`,
      password: `${form.userPw}`,
    });

    const url = `${"https://cors-anywhere.herokuapp.com/http://elice-kdt-3rd-team-14.koreacentral.cloudapp.azure.com:5000/login"}`;

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
        localStorage.setItem(
          "token",
          JSON.stringify(response.data.access_token)
        );
        localStorage.setItem(
          "nickname",
          JSON.stringify(response.data.nickname)
        );
      })
      .then((res) => {
        // 페이지 이동
        navigate("/");
      })
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
            value={form.userId}
            name="userId"
            onChange={handleInput}
            placeholder=" ID를 입력해주세요"
          />
          <p>비밀번호</p>
          <input
            type="text"
            value={form.userPw}
            name="userPw"
            onChange={handleInput}
            placeholder=" 비밀번호를 입력해주세요."
          />
        </div>
        <div className={styles.btnContainer}>
          <button onClick={onSubmit}>로그인</button>
          <button onClick={onClick}>회원가입</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
