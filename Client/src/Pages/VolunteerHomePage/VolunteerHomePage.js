import React from "react";
import Addfood from "../../components/Addfood";
import { useContext, useEffect, useState } from "react";
import foods from "../../components/foods";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";
import { toast } from "react-toastify";
import "./VolunteerHomePage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FoodCard from "../../components/FoodCard/FoodCard";
const VolunteerHomePage = () => {
  const [foodList, setfoodList] = useState("");
  const navigate = useNavigate();
  const [userProfile, setuserProfile] = useState();
  const getUser = async () => {
    const response = await fetch(`http://localhost:5001/api/auth/getuser`, {
      method: "POST",

      headers: {
        authtoken: localStorage.token,
        "Content-Type": "application/json",
      },
    });
    const jsn = await response.json();
    console.log(jsn);
    localStorage.setItem("volunteerName", jsn.name);
    toast.success(`Welcome, ${jsn.name}!`);
    setuserProfile(jsn);
  };
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
      let listt = res.data;

      listt.reverse();
      setfoodList(listt);
    }
  };
  useEffect(() => {
    if (!localStorage.volunteerName) getUser();
    getFood();
    getUser();
  }, []);

  if (foodList)
    return (
      <>
        <Navbar />
        <section className="vlmain">
          <h1>Available Food</h1>
          {
            <div className="cards-container">
              <FoodCard item={foodList[0]} />
              <FoodCard item={foodList[1]} />
              <FoodCard item={foodList[2]} fade={true} />
            </div>
          }
          <button
            className="viewall"
            onClick={() => {
              navigate("/foodlist");
            }}
          >
            View All &rarr;
          </button>
        </section>
        <section className="ftco-section">
          <div className="container">
            <div className="row">
              <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                <div className="media block-6 d-flex services p-3 py-4 d-block">
                  <span>
                    <img
                      src="../..../../images/3.icon.jpg"
                      style={{ width: "90px", height: "70px" }}
                    />
                  </span>
                  <div className="icon d-flex mb-3">
                    <span className="flaticon-charity"></span>
                  </div>
                  <div className="media-body pl-4">
                    <h3 className="heading">Who Are Our Donors?</h3>
                    <p>
                      Anyone who wants to feed an empty stomach by donating the
                      leftover food, who has good quality of surplus food and
                      who has kind heart.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                <div className="media block-6 d-flex services p-3 py-4 d-block">
                  <span>
                    <img
                      src="../..../../images/2.icon.jpg"
                      style={{ width: "120px", height: "80px" }}
                    />
                  </span>
                  <div className="icon d-flex mb-3">
                    <span className="flaticon-charity"></span>
                  </div>
                  <div className="media-body pl-4">
                    <h3 className="heading">Who Are Volunteers?</h3>
                    <p>
                      Trusted organisations having good team building, good
                      management schemes and loving heart to serve the hungry.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                <div className="media block-6 d-flex services p-3 py-4 d-block">
                  <span>
                    <img
                      src="../../images/1.icon.jpg"
                      style={{ width: "70px", height: "80px" }}
                    />
                  </span>
                  <div className="icon d-flex mb-3">
                    <span className="flaticon-donation"></span>
                  </div>
                  <div className="media-body pl-4">
                    <h3 className="heading">Sponsorship</h3>
                    <p>
                      Kind support by businesses that seeks to establish a
                      deeper bond between our donors and volunteers, to reach
                      out donors and volunteers as much as possible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div
              className="carousel-item active"
              data-bs-interval="2000"
              style={{ textAlign: "center" }}
            >
              <img
                src="../../images/pic1.jpeg"
                style={{ width: "55%", height: "30vw" }}
              />
            </div>
            <div
              className="carousel-item"
              data-bs-interval="2000"
              style={{ textAlign: "center" }}
            >
              <img
                src="../../images/pic 2.jpeg"
                style={{ width: "55%", height: "30vw" }}
              />
            </div>
            <div
              className="carousel-item"
              data-bs-interval="2000"
              style={{ textAlign: "center" }}
            >
              <img
                src="../../images/pic 3.jpeg"
                style={{ width: "55%", height: "30vw" }}
              />

              <div className="carousel-caption d-none d-md-block"></div>
            </div>
          </div>
        </div>
        {/* Steps~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
        <div className="mid ">
          <h1>STEPS</h1>
          <div className="steps-section">
            <div className="steps">
              <ul>
                <li className="icons" id="one">
                  <img src="../../images/step 1(2).jpg" />
                  <br />
                  <i>1</i>
                  <p>
                    Click on Donor button or volunteer button as per your choice
                  </p>
                </li>
                <li className="icons" id="two">
                  <img src="../../images/step 1(1).jpg" />
                  <br />
                  <i>2</i>
                  <p>Register if you are a new user otherwise Login</p>
                </li>
                <li className="icons" id="three">
                  <img src="../../images/step 2.jpg" />
                  <br />
                  <i>3</i>
                  <p>
                    Click on Donate Now button if you are a Donor.
                    <br />
                    If you are a volunteer then a page of all donations will be
                    diaplayed on the screen.
                  </p>
                </li>
                <li className="icons" id="four">
                  <img src="/images/step3.jpg" />
                  <br />
                  <i>4</i>
                  <p>Fill Food details if you are donor</p>
                </li>
                <li className="icons" id="five">
                  <img src="images/stepsicons/step 4.jpg" />
                  <br />
                  <i>5</i>
                  <p>Congratulation!! your filled item is saved. </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
};

export default VolunteerHomePage;
