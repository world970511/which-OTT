import "./app.css";
import Main from "./components/pages/main.jsx";
import Login from "./components/pages/login.jsx";
import Register from "./components/pages/signUp.jsx";
import Stat from "./components/pages/stat.jsx";
import Test from "./components/pages/classTest.jsx";
import Recommend from "./components/pages/recommend.jsx";
import Result from "./components/pages/result.jsx";

import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/stat" element={<Stat />} />
        <Route path="/test" element={<Test />} />
        <Route path="/recommend" element={<Recommend />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
