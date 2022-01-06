import React, { useCallback, useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const [userClass, setUserClass] = useState({});
  const [userAge, setUserAge] = useState("");
  const [userName, setUserName] = useState("");
  const [userGender, setUserGender] = useState("");

  const navigate = useNavigate();

  const [selectedVideoTitle, setSelectedVideoTitle] = useState([]);
  const [selectedVideoYear, setSelectedVideoYear] = useState([]);

  const logout = useCallback(() => {
    localStorage.removeItem("token");
    setUser(null);
    setLoading(false);
    navigate("/");
  }, []);

  const loadUser = () => {
    // const url = "";
    // var config = {
    //   method: "get",
    //   url: "/loadUser",
    //   headers: {
    //     "Content-Type": "application/json"
    //     // `Authorization`: `Bearer ${token}`,
    //   }
    // };
    // axios(config)
    //   .then((res) => {
    //     // 토큰 저장
    //     if (res.status === 200) {
    //       const user = res.data.user;
    //       setUser(user);
    //       setLoading(false);
    //       navigate("/");
    //     }
    //   })
    //   .catch((err) => {
    //     setLoading(false);
    //   });
    // navigate("/");

    setUser("eliceda");
    setLoading(false);
    navigate("/");
  };

  const handleLogin = ({ newToken }) => {
    newToken && console.log("newToken");
    // console.log("newToken : ", newToken);
    if (!newToken) {
      console.error("no new token");
    }
    localStorage.setItem("token", newToken);
    loadUser();
  };

  const handleUserClass = ({ classTest, userAge, userName, userGender }) => {
    console.log("classTest :", classTest);
    if (!classTest) {
      console.log("new classTest");
    }
    setUserClass(classTest);
    setUserAge(userAge);
    setUserName(userName);
    setUserGender(userGender);
    userClass && navigate("/result");
  };

  useEffect(() => {
    // token이 localstorage 에 있다면 loadUser 호출
    if (localStorage.getItem("token")) loadUser();
    else {
      logout();
    }
  }, []);

  const checkedVideo = ({ videoTitle, videoYear }) => {
    const setTitle = selectedVideoTitle.concat(videoTitle);
    setSelectedVideoTitle(setTitle);
    const setYear = selectedVideoYear.concat(videoYear);
    setSelectedVideoYear(setYear);
  };

  const removeVideo = ({ videoTitle }) => {
    let index = selectedVideoTitle.indexOf(videoTitle);
    const setTitle = selectedVideoTitle;
    if (index > -1) {
      setTitle.splice(index, 1);
    }
    setSelectedVideoTitle(setTitle);
  };

  const store = {
    user,
    loading,
    userClass,
    userAge,
    userName,
    userGender,
    selectedVideoTitle,
    selectedVideoYear,
    handleLogin,
    logout,
    setUser,
    handleUserClass,
    checkedVideo,
    removeVideo,
  };

  return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };
