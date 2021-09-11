import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import ContactsIcon from "@material-ui/icons/Contacts";
import EmailIcon from "@material-ui/icons/Email";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import LockIcon from "@material-ui/icons/Lock";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
//import {ContactsIcon, EmailIcon, AccountCircleIcon,LockOpenIcon,LockIcon,BusinessCenterIcon} from '@material-ui/icons'

export default function SignUp() {
  const history = useHistory();
  const [User, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    confirm: "",
  });
  let name, value;
  const handleInput = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...User, [name]: value });
  };
  const postData = async (event) => {
    event.preventDefault();
    const { name, email, phone, work, password, confirm } = User;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        work: work,
        password: password,
        confirm: confirm,
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid registration");
    } else {
      window.alert("Registration Successful");
      history.push("/login");
    }
  };
  return (
    <>
      <div className="main-div ">
        <div className="centre-div shadow-lg p-3 mb-5 bg-body rounded">
          <header className="title">
            <h2>Sign-Up</h2>
          </header>
          <div className="detail">
            <form method="POST" className="name">
              <AccountCircleIcon />
              <input
                className="details"
                type="text"
                placeholder="Enter your name"
                name="name"
                id=""
                value={User.name}
                onChange={handleInput}
              />
            </form>
            <form method="POST" className="email">
              <EmailIcon />
              <input
                className="details"
                placeholder="Enter Your email"
                type="email"
                name="email"
                id=""
                value={User.email}
                onChange={handleInput}
              />
            </form>
            <form method="POST" className="phn-no">
              {/* <i class="zmdi zmdi-account-box-phone"></i> */}
              <ContactsIcon />
              <input
                className="details"
                placeholder="Enter Your Phone Number"
                autoComplete="off"
                type="number"
                name="phone"
                id=""
                value={User.phone}
                onChange={handleInput}
              />
            </form>
            <form method="pOST" className="profession">
              <BusinessCenterIcon />
              <input
                className="details"
                placeholder="Enter your profession"
                type="text"
                name="work"
                id=""
                value={User.work}
                onChange={handleInput}
              />
            </form>
            <form method="POST" className="password">
              <LockOpenIcon />
              <input
                className="details"
                placeholder="Enter your password"
                type="password"
                name="password"
                id=""
                value={User.password}
                onChange={handleInput}
              />
            </form>
            <form method="POST" className="cpassword">
              <LockIcon />
              <input
                className="details"
                placeholder="Confirm Your password"
                type="password"
                name="confirm"
                id=""
                value={User.confirm}
                onChange={handleInput}
              />
            </form>
          </div>
          <div className="reg">
            <input
              type="submit"
              className="regis"
              name="signin"
              value="Register"
              onClick={postData}
            />
          </div>
          <p className="already">
            Already Registered <NavLink to="./Login">Login Here</NavLink>{" "}
          </p>
        </div>
      </div>
    </>
  );
}
