import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DonarLoginSignup.css";
import { toast } from "react-toastify";
const DonarLogin = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    document.getElementById("btn").click();
  }, 100);
  function Reg() {
    document.getElementById("registerform").style.display = "block";
    document.getElementById("loginform").style.display = "none";
    document.getElementById("btn").style.left = "0";
  }

  function Log() {
    document.getElementById("registerform").style.display = "none";
    document.getElementById("loginform").style.display = "block";
    document.getElementById("btn").style.left = "110px";
  }
  const [full_name, setfull_name] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [username, setUsername] = useState("");
  const [email, setemail] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setcpass] = useState("");
  const [creds, setCreds] = useState({ email: "", password: "" });
  const HandleDLogin = async (e) => {
    e.preventDefault();

    let response = await fetch("http://localhost:5001/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(creds),
    });
    let res = await response.json();
    if (res.success) {
      // console.log(res);
      localStorage.setItem("token", res.authtoken);
      // toast.success("Login Success!");
      navigate("/donarhome");
    } else {
      toast.error(res.error);
      // console.log(res);
    }
  };
  const HandleDSignup = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div>
      <Navbar />
      <div className="forms">
        <div className="button-box">
          <div id="btn"></div>

          <button
            type="button"
            name="button"
            className="toggle-btn"
            onClick={Reg}
          >
            Register
          </button>
          <button
            type="button"
            name="button"
            className="toggle-btn"
            onClick={Log}
          >
            Login
          </button>
        </div>
        <div id="registerform">
          <form className="voldetails" onSubmit={HandleDSignup}>
            <div className="user-details">
              <div className="details1">
                <div className="input-box">
                  <span className="details">Full Name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter full  name"
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Username </span>
                  <input
                    type="text"
                    name="username"
                    placeholder="Enter a username"
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Email </span>
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              <div className="details2">
                <div className="input-box">
                  <span className="details">Phone Number</span>
                  <input
                    type="text"
                    name="phoneNo"
                    placeholder="Enter your number"
                    pattern="[0-9]{10}"
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Password</span>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Confirm Password</span>
                  <input
                    type="password"
                    name="confrim password"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="button">
              <input type="submit" name="button" value="Register" />
            </div>
          </form>
        </div>

        <div id="loginform">
          <form className="voldetails2" onSubmit={HandleDLogin}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Id Card Number</span>
                <input
                  type="email"
                  name="email"
                  placeholder="emapmple@gmail.com"
                  onChange={(e) => {
                    setCreds({ ...creds, [e.target.name]: e.target.value });
                  }}
                />
              </div>
              <div className="input-box">
                <span className="details">Password </span>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your Password"
                  onChange={(e) => {
                    setCreds({ ...creds, [e.target.name]: e.target.value });
                  }}
                />
              </div>
            </div>

            <div className="button">
              <input
                type="submit"
                name="button"
                value="LogIn"
                style={{ paddingRight: "1rem", paddingLeft: "1rem" }}
              />
            </div>
            <div className="button">
              <input type="submit" name="button" value="Forgot Password?" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonarLogin;
