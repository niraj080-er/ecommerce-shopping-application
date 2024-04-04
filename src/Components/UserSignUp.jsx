import { useState } from "react";
import "../Style/AdminSignUp.css";
import axios from 'axios';   
const UserSignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [profile, setProfile] = useState("");
    let user={name,email,phone,password,profile};
    let addUser=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:1000/UserSignUp', user)
        .then((res)=>{
         alert("User added successfully")
        })
        .catch((err)=>{
        alert("Invalid Data" )
        })
    }
    return (
        <div className="admin-signup-container">
            <h3>UserSignUp</h3>
            <form className="signup-form" onSubmit={addUser}>
                <label className="form-label">
                    Name  <input required className="input-field" type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter the Name" />
                    <br />
                </label>
                <label className="form-label">
                    Email  <input required className="input-field" type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter the Email" />
                    <br />
                </label>
                <label className="form-label">
                    Phone number  <input required className="input-field" type="tel" value={phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder="Enter the Phone Number" />
                    <br />
                </label>
                <label className="form-label">
                    Password  <input required className="input-field" type="password"  value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter the Password" />
                    <br />
                </label>
                <label className="form-label">
                    ProfileImgUr  <input required className="input-field" type="text" value={profile} onChange={(e)=>{setProfile(e.target.value)}} placeholder="Enter the Image Address" />
                    <br />
                </label>
                <button className="submit-btn">Register</button>
            </form>
        </div>
    );
}
 
export default UserSignUp;