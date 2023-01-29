import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import "./VolunteerLoginSingup.css";
import { toast } from "react-toastify";
const VolunteerLogin = () => {
  let navigate = useNavigate();

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
  const [org_name, setOrg_name] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [id_no, setId_no] = useState("");
  const [email, setemail] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  const [creds, setCreds] = useState({ email: "", password: "" });
  const HandleVLogin = async (e) => {
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
      console.log(res);
      localStorage.setItem("token", res.authtoken);
      navigate("/home");
    } else toast.error("Error");
  };
  const HandleVSignup = (e) => {
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
          <form className="voldetails" onSubmit={HandleVSignup}>
            <div className="user-details">
              <div className="details1">
                <div className="input-box">
                  <span className="details">Organisation Name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Organisation name"
                    required
                    onChange={(e) => {
                      setOrg_name(e.target.value);
                    }}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Id Card Number </span>
                  <input
                    type="text"
                    name="idNumber"
                    placeholder="xxxx xxxx xxxx xxxx"
                    required
                    pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}"
                    onChange={(e) => {
                      setId_no(e.target.value);
                    }}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Email </span>
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter your email"
                    required
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
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
                    onChange={(e) => {
                      setPhone_number(e.target.value);
                    }}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Password</span>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    required
                    onChange={(e) => {
                      setPass(e.target.value);
                    }}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Confirm Password</span>
                  <input
                    type="password"
                    name="confrim password"
                    placeholder="Confirm your password"
                    required
                    onChange={(e) => {
                      setCpass(e.target.value);
                    }}
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
          <form className="voldetails2" onSubmit={HandleVLogin}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  onChange={(e) => {
                    setCreds({ ...creds, [e.target.name]: e.target.value });
                    console.log(creds);
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
                    console.log(creds);
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

  // </div>;
};

export default VolunteerLogin;
