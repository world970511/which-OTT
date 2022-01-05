import React, { useRef, useState, useContext } from "react";
import styles from "./movies.module.css";
import { AuthContext } from "../context/AuthContext.jsx";

const Movies = ({ key, title, poster, year, onVideoClick }) => {
  const [check, setCheck] = useState(false);
  const movieRef = useRef();

  const { selectedVideoTitle, removeVideo } = useContext(AuthContext);

  const onClick = (e) => {
    onVideoClick(title, year);

    for (let key in selectedVideoTitle) {
      if (selectedVideoTitle[key] === title) {
        removeVideo({ videoTitle: title });
        setCheck(false);
      } else {
        setCheck(true);
      }
    }
    // selected();
  };

  console.log(selectedVideoTitle);

  const selected = () => {
    for (let key in selectedVideoTitle) {
      if (selectedVideoTitle[key] === title) {
        setCheck(false);
      } else {
        setCheck(true);
      }
    }
  };

  return (
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
  );
};

export default Movies;
