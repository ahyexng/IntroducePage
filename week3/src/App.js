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
  })
  return (
  <>
    {isLogin ? <Main/> : <Login/>}
    
  </>
  );
};

export default App;
