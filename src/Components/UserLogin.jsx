/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Style/adminlogin.css";
import axios from "axios";
const UserLogin = () => {
  let [uname, setUname] = useState("");
  let [password, setPassword] = useState("");
  let [admin, setAdmin] = useState("[]");
  let navigation = useNavigate();
  useEffect(() =>{
  axios.get("http://localhost:1000/UserSignUp")
   .then((res)=>{
        setAdmin(res.data)
      })
   .catch((err)=>{
        console.log(err)
      })
    }, [])
  function login(e) {
  e.preventDefault();
  let a=false;
  admin.map((x) => {
    if(uname ===x.email && password===x.password){
      alert("Login success! ")
      navigation("/UserHomePage")
       a=true;
    }
  })
  if(a===false){
    alert("Invalid username or password")
  }
}
  return (
    <div className="AdminPage">
      <div className="login">
        <form action="">
          <label htmlFor=""> Username:{" "}
            <input placeholder="Enter the username" type="text"
              value={uname} onChange={(e) => { setUname(e.target.value); }}/>
          </label><br/><br/>
          <label htmlFor=""> Password:{" "}
            <input placeholder="Enter the password" type="password" value={password} onChange={(e) => {setPassword(e.target.value); }}/>
          </label> <br/><br/>
          <button onClick={login}>Login</button>
          <p className="new"> Are you new to this page ?<Link to="/UserSignUp">SignUp Now</Link></p>
        </form>
      </div>
    </div>
  );
};
export default UserLogin;