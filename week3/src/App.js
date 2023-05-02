import Main from "./pages/Main";
import Login from "./pages/login";
import {UserInfo} from "./pages/UserInfo";
import "./pages/Login.css";
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
