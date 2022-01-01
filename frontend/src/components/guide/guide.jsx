import React from "react";
import styles from "./guide.module.css";
import { useNavigate } from "react-router-dom";

const Guide = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.guideContainer}>
        <div className={styles.guides__left}>
          <h1>웹 서비스 가이드</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint enim
            ad saepe cupiditate, eligendi odit porro nam sunt culpa iure beatae
            vero numquam! Et quibusdam dolores aspernatur error harum asperiores
            dicta facilis perferendis delectus ipsa. Molestiae corrupti sed,
            delectus cum beatae quidem maxime dolor in error cupiditate
            voluptate eius atque? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Atque recusandae voluptas veniam delectus harum
            quas velit eius vero culpa sint, et aperiam, rem quibusdam qui.
            Beatae quia facilis veniam minus iusto, ipsa voluptatum laboriosam
            aut totam obcaecati tenetur enim blanditiis animi exercitationem
            tempore eaque deleniti ducimus rem dignissimos commodi libero.
          </p>
          <button
            className={styles.testBtn}
            onClick={() => {
              navigate("/test");
            }}
          >
            사용등급검사
          </button>
          <button
            className={styles.testBtn}
            onClick={() => {
              navigate("/recommend");
            }}
          >
            플랫폼추천
          </button>
          <button
            className={styles.statBtn}
            onClick={() => {
              navigate("/stat");
            }}
          >
            통계
          </button>
        </div>
        <div className={styles.guides__right}>
          <img src="/img/ott.png" alt="소개 이미지" className={styles.imgs} />
        </div>
      </div>
    </>
  );
};

export default Guide;
