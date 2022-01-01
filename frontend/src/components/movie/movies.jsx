import React, { useRef } from "react";
import styles from "./movies.module.css";

const Movies = ({ title, poster }) => {
  const movieRef = useRef();
  const handleSelectMovie = (e) => {
    console.log(movieRef.current);
  };
  return (
    <li className={styles.movieContainer} onClick={handleSelectMovie}>
      <img className={styles.moviePoster} src={poster} alt="movie poster" />
      <h4 ref={movieRef} className={styles.movieTitle}>
        {title}
      </h4>
    </li>
  );
};

export default Movies;
