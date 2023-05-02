import Main from "./pages/Main/Main";
import Login from "./pages/Login/login";
import {UserInfo} from "./pages/Login/UserInfo";
import "./pages/Login/Login.css";
import "./pages/Main/Main.css"
import React, { useEffect, useState } from "react";

function App() {
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    localStorage.setItem('id',UserInfo.id);
    localStorage.setItem('password',UserInfo.password);
    console.log("useEffect실행");
  },[isLogin]);

  return (
  <>
    {isLogin ? <Main/> : <Login setLogin = {setLogin}/>}
  </>
  );
};

export default App;
