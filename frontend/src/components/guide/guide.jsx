import React from "react";
import styles from "./guide.module.css";
import { useNavigate } from "react-router-dom";

const Guide = () => {
  const navigate = useNavigate();

  const handleSelectPage = (e) => {
    if (sessionStorage.getItem("token")) {
      switch (e.target.value) {
        case "1":
          navigate("/test");
          break;
        case "2":
          navigate("/recommend");
          break;
        default:
          navigate("/stat");
      }
    } else {
      alert("로그인 후 이용이 가능합니다^^.");
      navigate("/login");
    }
  };

  return (
    <>
      <div className={styles.guideContainer}>
        <div className={styles.guides__left}>
          <h1>웹 서비스 가이드</h1>
          <p className={styles.guide_word}>
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
            value={1}
            onClick={handleSelectPage}
          >
            사용등급검사
          </button>
          <button
            className={styles.testBtn}
            value={2}
            onClick={handleSelectPage}
          >
            플랫폼추천
          </button>
          {/* <button
            className={styles.statBtn}
            value={3}
            onClick={handleSelectPage}
          >
            통계
          </button> */}
        </div>
        <div className={styles.guides__right}>
          <img src="/img/ott.png" alt="소개 이미지" className={styles.imgs} />
        </div>
      </div>
    </>
  );
};

export default Guide;
