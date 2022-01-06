import React, { useRef, useState, useContext, useEffect } from "react";
import styles from "./movies.module.css";
import { AuthContext } from "../context/AuthContext.jsx";

const Movies = ({ key, title, poster, year, onVideoClick }) => {
  const [check, setCheck] = useState(false);

  const movieRef = useRef();

  const { selectedVideoTitle, removeVideo } = useContext(AuthContext);

  useEffect(() => {
    console.log(selectedVideoTitle);
  }, [selectedVideoTitle]);

  const onClick = (e) => {
    onVideoClick(title, year);

    // console.log(selectedVideoTitle);

    setCheck(true);

    for (let key in selectedVideoTitle) {
      if (selectedVideoTitle[key] === title) {
        removeVideo({ videoTitle: title });
        setCheck(false);
      } else {
        console.log("체크");
      }
    }
  };

  return (
    <div>
      <li
        className={`${styles.movieContainer} ${
          check ? styles.selectedVideo : null
        }`}
        onClick={onClick}
        data-id={key}
      >
        <img className={styles.moviePoster} src={poster} alt="movie poster" />
        <h4 ref={movieRef} className={styles.movieTitle}>
          {title}
        </h4>
      </li>
    </div>
  );
};

export default Movies;
