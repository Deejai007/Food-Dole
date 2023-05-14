import React from "react";
import Addfood from "../../components/Addfood";
import { useContext, useEffect, useState } from "react";
import foods from "../../components/foods";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";
import { toast } from "react-toastify";
const Home = () => {
  // const foods = (props) => {
  const [userProfile, setuserProfile] = useState();
  const getUser = async () => {
    const response = await fetch(`http://localhost:5001/api/auth/getuser`, {
      method: "POST",

      headers: {
        "auth-token": `${localStorage.token}`,
        "Content-Type": "application/json",
      },
    });
    const jsn = await response.json();
    console.log(jsn);
    toast.success(`Welcome, ${jsn.name}!`);
    setuserProfile(jsn);
    // console.log(json);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Navbar />
      <foods />
      <Footer />
    </>
  );
};

export default Home;
