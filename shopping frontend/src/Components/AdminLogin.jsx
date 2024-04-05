/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";
import "../Style/adminlogin.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const AdminLogin = () => {
  let [uname, setUname] = useState("");
  let [password, setPassword] = useState("");
  let [admin, setAdmin] = useState("");

  let navigation = useNavigate();

  useEffect(() =>{
  axios.get("http://localhost:4080/AdminSignUp")
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
      alert("login success!")
      navigation("/AdminHomePage");
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
          <label htmlFor=""> Username: {" "}
            <input  placeholder="Enter the email" type="text" value={uname} onChange={(e) => {setUname(e.target.value);}}/>
          </label>
          <br/> <br/>
          <label htmlFor="" > Password :{" "}
            <input  placeholder="Enter the password" type="password" value={password} onChange={(e) => {setPassword(e.target.value);}}/>
          </label>
          <br/><br/>
          <button onClick={login}>Login</button>
          <p className="new"> Are you new to this page ? <Link to ="/AdminSignUp">SignUp Now</Link></p>
        </form>
      </div>
    </div>
  );
};
export default AdminLogin;

// let login={uname, password };
// let adminLogin = (e)=>{ 
//   e.preventDefault();
//     fetch("http://localhost:4080/AdminSignUp", {
//       Method : "GET",
//       headers : {
//         "Content-Type" : "application/json"},
//           body: JSON.stringify(login)
//     })
//     .then((res)=>{
//       alert("Admin logged in successfully");
//     })
//     .catch((err)=>{
//       alert("Admin failed to login")
//     })
//   }

