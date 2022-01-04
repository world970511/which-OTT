import React from "react";
import { AuthContext } from "../context/AuthContext";
import { Route, Routes, useNavigate } from "react-router-dom";

const AuthRoute = ({ component: Component, ...rest }) => {
  const { user, loading } = React.useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <Routes>
      <Route
        {...rest}
        render={(props) =>
          !user && !loading ? navigate("/login") : <Component {...props} />
        }
      />
    </Routes>
  );
};

export default AuthRoute;
