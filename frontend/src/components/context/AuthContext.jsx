import React, { useCallback, useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [userClass, setUserClass] = useState({});
  const [userAge, setUserAge] = useState("");
  const navigate = useNavigate();

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

  const handleUserClass = ({ classTest, userAge }) => {
    console.log("classTest :", classTest);
    if (!classTest) {
      console.log("new classTest");
    }
    setUserClass(classTest);
    setUserAge(userAge);
    userClass && navigate("/result");
  };

  console.log("user", user);

  useEffect(() => {
    // token이 localstorage 에 있다면 loadUser 호출
    if (localStorage.getItem("token")) loadUser();
    else {
      logout();
    }
  }, []);

  const store = {
    user,
    loading,
    userClass,
    userAge,
    handleLogin,
    logout,
    setUser,
    handleUserClass,
  };

  return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };
