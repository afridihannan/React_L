import axios from "axios";
import React,{useState} from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

export default function Signin2() {
  const history=useHistory();
  const [user, setuser] = useState({
      name:"",
      email:"",
      password:"",
      confirm:""
  });
  
  const HandleChange=(event)=>{
      console.log(user);
     const { name, value}=event.target;
     setuser({...user,[name]:value})
  };
  const signin=()=>{
    const { name, email, password, confirm}=user;
    if(name && email && password && password===confirm){
      axios.post('http://localhost:9000/register',user).then((res)=>{
        alert(res.data.message);
        history.push('/login2');
      })
      alert("correct credentials");
    }else{
      alert("Invalid")
    }
     
  }
  return (
    <>
      <Register>
        <h1>Register</h1>
        <Form type="text" placeholder="Enter your Name" name="name" value={user.name} onChange={HandleChange} id="" />
        <Form type="email" placeholder="Enter your Email" name="email" value={user.email} onChange={HandleChange} id="" />
        <Form type="password" placeholder="Enter Your Password" name="password" value={user.password} onChange={HandleChange} id="" />
        <Form
          type="password"
          placeholder="Re-enter Your Password"
          name="confirm" value={user.confirm} onChange={HandleChange}
          id=""
        />
        <Loginbutton onClick={signin}>Join Now</Loginbutton>
        <h4>or</h4>
        <Loginbutton onClick={()=>history.push("/login2")}>Log In</Loginbutton>
      </Register>
    </>
  );
}
const Register = styled.div`
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
const Form = styled.input`
  margin: 0.5 rem;
  border-radius: 8px;
  outline: none;
  color: #1d2129;
  width: 90%;
  font-size: 1rem;
  margin:5px;
`;
const Loginbutton = styled.button`
  color: black;
  font-size: 20px;
  font-weight: 600;
  height: 30px;
  width: 120px;
  background-color: blue;
`;
