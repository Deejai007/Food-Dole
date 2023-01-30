import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import "./VolunteerLoginSingup.css";
import { toast } from "react-toastify";

import axios from "axios";
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
  // Signup Creds
  const [org_name, setOrg_name] = useState("");
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  // Login Creds
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
      // console.log(res);
      localStorage.setItem("token", res.authtoken);

      navigate("/volunteerhome");
    } else toast.error("Error");
  };
  const HandleVSignup = async (e) => {
    e.preventDefault();
    if (pass !== cpass) {
      toast.error("Passwords don't match!");
      return;
    }
    let obj = {
      organisationName: org_name,
      name: name,
      email: email,
      address: address,
      city: city,
      phoneNo: phone_number,
      role: "Vol",
      password: pass,
    };
    // console.log(obj);
    let ress = await axios
      .post(
        "http://localhost:5001/api/auth/createuser",
        obj,

        {
          headers: { authtoken: localStorage.token },
        }
      )
      .catch((err) => {
        console.log(err);
        const errMsg = err.response.data.error;
        // setLoader(false);
        toast.error(`${errMsg}`);
      });
    if (ress) {
      // console.log(ress.data.authtoken);
      localStorage.setItem("token", ress.data.authtoken);
      navigate("/volunteerhome");
    }
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
                  <span className="details">Your Name </span>
                  <input
                    type="text"
                    name="volunteerName"
                    placeholder="Enter your name"
                    required
                    onChange={(e) => {
                      setName(e.target.value);
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
                <div className="input-box">
                  <span className="details">Adderss </span>
                  <input
                    type="text"
                    name="address"
                    placeholder="Enter your address"
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="details2">
                <div className="input-box">
                  <span className="details">City</span>
                  <input
                    type="text"
                    name="city"
                    placeholder="Enter your city"
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                </div>
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
            <div className="TandC tacbox">
              <input id="checkbox" required type="checkbox" />
              <label htmlFor="checkbox">
                I agree to the terms and conditions as set out by the user
                agreement.
              </label>
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
                    // console.log(creds);
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
                    // console.log(creds);
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
