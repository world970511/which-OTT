import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./nav.module.css";
import { AuthContext } from "../context/AuthContext.jsx";

const Nav = () => {
  const [userNickname, setUserNickname] = useState(null);
  const { logout } = useContext(AuthContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    localStorage.getItem("nickname") &&
      setUserNickname(localStorage.getItem("nickname"));
  }, []);

  // const getToken = localStorage.getItem("token");

  // const JWT_TOKEN = JSON.parse(atob(getToken.split(".")[1]));

  // console.log(JWT_TOKEN.exp);

  const onClick = (e) => {
    logout();
    // if (localStorage.getItem("token")) {
    //   localStorage.removeItem("token");
    //   localStorage.removeItem("nickname");
    //   window.location.replace("/main");
    // }
  };
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbar__logo}>
          <Link to="/main">
            <img className={styles.logo_img} src="/img/logo.png" alt="" />
            Which OTT
          </Link>
        </div>
        <ul className={styles.navbar__menu}>
          <li
            className={`${styles.navbar__menu__item} ${
              user !== null ? styles.logIn : styles.logOut
            }`}
          >
            <Link className={styles.navbarBtn} to="/login">
              로그인
            </Link>
          </li>
          <li
            className={`${styles.navbar__menu__item} ${
              user ? styles.logIn : styles.logOut
            }`}
          >
            <Link className={styles.navbarBtn} to="/signUp">
              회원가입
            </Link>
          </li>
          <li className={`${user !== null ? styles.nickName : styles.logIn}`}>
            {user !== null ? user.replace(/['"]+/g, "") : null}
          </li>
          <li
            className={`${user ? styles.navbar__menu__item : styles.logIn}`}
            onClick={onClick}
          >
            {user !== null ? "로그아웃" : null}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
