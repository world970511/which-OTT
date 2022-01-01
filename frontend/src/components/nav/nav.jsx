import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./nav.module.css";

const Nav = () => {
  const navigate = useNavigate();

  const onClick = (event) => {
    if (event.target.dataset.id === "1") {
      navigate("/login");
    } else {
      navigate("/signup");
    }
  };
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbar__logo}>
          <i class="far fa-play-circle"></i>
          <a href="/main">Which OTT</a>
        </div>
        <ul className={styles.navbar__menu}>
          <li
            className={styles.navbar__menu__item}
            onClick={onClick}
            data-id="1"
          >
            로그인
          </li>
          <li
            className={styles.navbar__menu__item}
            onClick={onClick}
            data-id="2"
          >
            회원가입
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
