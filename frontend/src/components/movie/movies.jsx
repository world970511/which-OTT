import React, { useRef } from "react";
import styles from "./movies.module.css";

const Movies = ({ title, poster, year, onVideoClick }) => {
  const movieRef = useRef();
  return (
    <li
      className={styles.movieContainer}
      onClick={() => onVideoClick(title, year)}
    >
      <img className={styles.moviePoster} src={poster} alt="movie poster" />
      <h4 ref={movieRef} className={styles.movieTitle}>
        {title}
      </h4>
    </li>
  );
};

export default Movies;
