import React, { useState } from "react";
import "./Login.css";
import {UserInfo} from "./UserInfo";

const Login = (props) => {
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
    if (UserInfo.id === id && UserInfo.password !== password) 
      alert("비밀번호가 틀렸습니다.");
    else if (UserInfo.id === id && UserInfo.password === password) {
        alert("id, password 일치, 로그인 성공!");
        props.setLogin(true);   
    } else  {
      alert("등록된 id가 없습니다.");
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