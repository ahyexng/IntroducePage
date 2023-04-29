import React, { useState } from "react";
import "./Login.css";
import {UserInfo} from "./UserInfo";

const Login = () => {
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