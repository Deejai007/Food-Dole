import { React, useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./FoodList.css";
import axios from "axios";
import FoodCard from "../../components/FoodCard/FoodCard";
const FoodList = () => {
  const [foodList, setFoodList] = useState("");
  const [isLoading, setisLoading] = useState(true);
  // const displayItems = foodlist.map((data) => {
  //   return <FoodCard />;
  // });
  const getFood = async () => {
    const res = await axios
      .get("http://localhost:5001/api/food/fetchallfood", {
        headers: {
          authtoken: localStorage.token,
          "Content-Type": "application/json",
        },
      })
      .catch((err) => console.log(err));
    if (res) {
      console.log(res.data);
      setFoodList(res.data);
      console.log(foodList);
      // foodlist.reverse();
      // console.log(listt);

      setisLoading(false);
    }
  };
  useEffect(() => {
    getFood();
  }, []);
  return (
    <div>
      <Navbar />
      <h1 className="headlist">All foods List</h1>
      <div className="full-list">
        {isLoading && (
          <div
            className="spin spin__ms"
            style={{ margin: "auto", width: "fit-content" }}
          >
            <span className="spinner-border"></span>
            {/* <mat-spinner diameter="50"></mat-spinner> */}
          </div>
        )}
        {!isLoading && (
          <div className="mainlist">
            {foodList.map((data, i) => {
              return <FoodCard item={data} key={i} />;
            })}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default FoodList;
