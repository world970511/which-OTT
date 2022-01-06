import React, { useContext, useEffect, useRef, useState } from "react";
import Nav from "../nav/nav.jsx";
import Movie from "../movie/movies.jsx";
import Loading from "../loading/loading.jsx";
import SmallLoading from "../loading/smallLoading";
import styles from "./recommend.module.css";
import { AuthContext } from "../context/AuthContext.jsx";

const Recommend = () => {
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [lastIntersectionVideo, setLastIntersectionVideo] = useState(null);

  const [loading, setLoading] = useState(false);

  const { checkedVideo, selectedVideoTitle } = useContext(AuthContext);

  const handleSelectedVideo = (title, year) => {
    checkedVideo({
      videoTitle: title,
      videoYear: year,
    });
  };

  const getVideo = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      lastPageId: parseInt(`${pageNumber}`),
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const url = `${"https://cors-anywhere.herokuapp.com/http://elice-kdt-3rd-team-14.koreacentral.cloudapp.azure.com:5000/contents"}`;

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setMovies(movies.concat(result.ImageURL));
        setLoading(true);
      })
      .catch((error) => {
        console.log("error", error);
        setLoading(true);
      });
  };

  const pagePlus = () => {
    setPageNumber((pageNumber) => pageNumber + 1);
  };

  const pageEnd = useRef();
  let num = 1;

  useEffect(() => {
    if (loading) {
      const observer = new IntersectionObserver(
        (entries) => {
          console.log(entries);
          if (entries[0].isIntersecting) {
            num++;
            pagePlus();
            if (num > 84) {
              observer.unobserve(pageEnd.current);
            }
          }
        },
        { threshold: 1 }
      );
      observer.observe(pageEnd.current);
    }
  }, [loading, num]);

  useEffect(() => {
    getVideo();
  }, [pageNumber]);

  return (
    <div className={styles.viewContainer}>
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

      {/* <div className={styles.viewContainer}> */}
      {/* {loading ? (
          <Loading />
        ) : (
          movies.map((movie) => (
            <Movie
              key={movie.id}
              title={movie[0]}
              poster={movie[1]}
              onVideoClick={handleSelectedVideo}
            />
          ))
        )} */}

      {loading ? (
        movies?.map((movie, index) => {
          return (
            <Movie
              key={index}
              title={movie[0]}
              poster={movie[1]}
              onVideoClick={handleSelectedVideo}
            />
          );
        })
      ) : (
        <Loading />
      )}
      <div className={styles.nullBox}></div>
      {loading ? <SmallLoading /> : null}
      <div className={styles.scrollContainer}>
        <button className={styles.scrollBtn} ref={pageEnd} onClick={pagePlus}>
          <i className={"fas fa-chevron-down"}></i>
        </button>
      </div>
    </div>
  );
};

export default Recommend;
