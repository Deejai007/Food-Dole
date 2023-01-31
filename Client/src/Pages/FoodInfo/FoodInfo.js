import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import "./FoodInfo.css";
const FoodInfo = () => {
  const loc = useLocation();
  console.log(loc.state.item);
  return (
    <div>
      <Navbar />
      ksasjl
      <Footer />
    </div>
  );
};

export default FoodInfo;
