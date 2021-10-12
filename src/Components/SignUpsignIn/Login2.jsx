import React,{useState} from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router";

export default function Login2({setLoginuser}) {
  const history=useHistory();
  const [user, setuser] = useState({
    email:"",
    password:""
  })
  const handlechange=(event)=>{
    const {name,value}=event.target;
    setuser({...user,[name]:value});
  }
  const login=()=>{
    const {email,password}=user;
    if(email && password){
      axios.post('http://localhost:9000/login',user).then((res)=>{
        alert(res.data.message);
        setLoginuser(res.data.user);
        console.log(user);
        history.push('/');
      });
    }
  }
  return (
    <>
      <Login>
        <h1>Login</h1>
        <Email type="email" placeholder="Enter Your Email"  name="email" value={user.email} onChange={handlechange} id="" />
        <Email
          type="password"
          placeholder="Enter Your password"
          name="password" value={user.password} onChange={handlechange}
          id=""
        />
        <Loginbutton onClick={login}>Login</Loginbutton>
        <h4>or</h4>
        <Loginbutton onClick={()=>history.push('/signin2')}>Join us</Loginbutton>
      </Login>
    </>
  );
}
const Login = styled.div`
  display:flex;
  flex-direction:column;
  width:400px;
  background:#fff;
  border:1px solid #dddfe2;
  border radius:8px;
  padding:1rem;
  align-items:center;
  text-align:center;
  height:400px;
  width:400px;
  margin:auto auto;
`;
const Email = styled.input`
  border-radius: 8px;
  outline:none;
  color:#1d2129;
  width:90%;
  font-size:1rem;
  height:30px;
  margin: 5px;
`;
const Loginbutton = styled.button`
  color: black;
  font-size: 20px;
  font-weight: 600;
  height: 30px;
  width: 120px;
  background-color: blue;
`;
