import React, { useContext, useEffect, useState } from "react";
import Nav from "../nav/nav.jsx";
import Movie from "../movie/movies.jsx";
import Loading from "../loading/loading.jsx";
import styles from "./recommend.module.css";
import { AuthContext } from "../context/AuthContext.jsx";

const Recommend = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState([]);

  // const [selectedVideoTitle, setSelectedVideoTitle] = useState([]);
  // const [selectedVideoYear, setSelectedVideoYear] = useState([]);

  const { checkedVideo, selectedVideoTitle, selectedVideoYear } =
    useContext(AuthContext);

  const handleSelectedVideo = (title, year) => {
    checkedVideo({
      videoTitle: title,
      videoYear: year,
    });
  };

  // useEffect(() => {
  //   console.log(selectedVideoTitle, selectedVideoYear);
  // }, [selectedVideoTitle]);

  useEffect(() => {
    var myHeaders = new Headers();

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://yts.mx/api/v2/list_movies.json", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setMovies(result.data.movies);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Nav></Nav>
      <div className={styles.headerContainer}>
        <h1 className={styles.headerText}>컨텐츠 선택</h1>
        <div>
          <div className={styles.selectOption}>
            <div className={styles.selectedContents}>
              {selectedVideoTitle.length}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.viewContainer}>
        {loading ? (
          <Loading />
        ) : (
          movies.map((movie) => (
            <Movie
              key={movie.id}
              title={movie.title}
              year={movie.year}
              poster={movie.medium_cover_image}
              onVideoClick={handleSelectedVideo}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Recommend;
