import React from "react";
import styles from "./movies.module.css";

const Movies = ({ title, poster }) => {
  return (
    <div className={styles.movieContainer}>
      <img className={styles.moviePoster} src={poster} alt="movie poster" />
      <h4 className={styles.movieTitle}>{title}</h4>
    </div>
  );
};

export default Movies;
