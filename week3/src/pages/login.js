import React, { useState } from "react";
import "./Login.css";
import {UserInfo} from "./UserInfo";

const Login = ({isLogin, setLogin}) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  

  const loginChange = (e) => {
    console.log(e.target.value);
    setId(e.target.value);
  }

  const pwChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  }

  const getLogin = (e) => {
    e.preventDefault();
    console.log("ㅇㅇㅇ");
    localStorage.getItem(UserInfo.id);
    localStorage.getItem(UserInfo.password);
    if (UserInfo.id === id) {
      console.log("id 일치, password 불일치");
      if (UserInfo.password === password) {
        console.log("id, password 일치");
        isLogin = true;
      } 
    } else {
      console.log("id or password 불일치");
    }
  }

  return (
    <div className="wrapper_box">
      <h2>LOG IN</h2>
      <form className="login_form" onSubmit={getLogin}>
        <input type="text" className="login_input" placeholder="ID" onChange={loginChange}/>
        <input placeholder="Password" type="Password" className="login_input" onChange={pwChange}  />
        <button type="submit" className="login_btn" >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;