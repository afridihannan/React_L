import React,{ useState } from "react";
import EmailIcon from "@material-ui/icons/Email";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { NavLink , useHistory } from "react-router-dom";

export default function Login() {
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const history=useHistory();
  const Loginuser=async(e)=>{
    e.preventDefault();
    const res=await fetch('/login',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email:Email,password:Password
      })
    });
    const data=res.json();
    if(data.status===401 || data.status===400 ||!data){
      alert("Invalid Credential")
    }else{
      alert("Login Successful");
      history.push('/')
    }
  }

  return (
    <>
      <div className="main-div">
        <div className="centre-div shadow-lg  bg-body rounded log ">
          <header className="title">
            <h2>Log-In</h2>
          </header>
          <div className="detail">
            <form className="email">
              <EmailIcon />
              <input
                className="details"
                type="email"
                name="email"
                value={Email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Enter Your email"
                id=""
              />
            </form>
            <form className="password">
              <LockOpenIcon />
              <input
                className="details"
                type="password"
                name="password"
                value={Password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Enter your password"
                id=""
              />
            </form>
            <form action="">
              <input type="submit" value="Login" onClick={Loginuser} className="regis"/>
            </form>
            <p className="already">Haven't registered yet <NavLink to="./signUp">Register here</NavLink> </p>
          </div>
        </div>
      </div>
    </>
  );
}
//"proxy":"http://localhost:4000",