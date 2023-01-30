import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DonarLoginSignup.css";
import { toast } from "react-toastify";
import axios from "axios";

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
  // ~~~~~~~~Signup Creds
  const [full_name, setFull_name] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  // ~~~~~~~~Login Creds
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
  const HandleDSignup = async (e) => {
    if (pass !== cpass) {
      toast.error("Passwords don't match.");
      return;
    }
    e.preventDefault();
    let dataObj = {
      name: full_name,
      phoneNo: phone_number,
      email: email,
      address: address,
      city: city,
      role: "don",
      password: pass,
    };
    console.log(dataObj);
    let ress = await axios
      .post(
        "http://localhost:5001/api/auth/createuser",
        dataObj,

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
      toast.success("Signup Successful");
      navigate("/donarhome");
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
          <form className="voldetails" onSubmit={HandleDSignup}>
            <div className="user-details">
              <div className="details1">
                <div className="input-box">
                  <span className="details">Full Name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter full name"
                    required
                    onChange={(e) => setFull_name(e.target.value)}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Phone Number</span>
                  <input
                    type="text"
                    name="phoneNo"
                    placeholder="Enter mobile number"
                    pattern="[0-9]{10}"
                    required
                    onChange={(e) => setPhone_number(e.target.value)}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Email </span>
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter your email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Adderss </span>
                  <input
                    type="text"
                    name="address"
                    placeholder="Enter your address"
                    required
                    onChange={(e) => setAddress(e.target.value)}
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
                    required
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>

                <div className="input-box">
                  <span className="details">Password</span>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    required
                    onChange={(e) => setPass(e.target.value)}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Confirm Password</span>
                  <input
                    type="password"
                    name="confrim password"
                    placeholder="Confirm your password"
                    required
                    onChange={(e) => setCpass(e.target.value)}
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
