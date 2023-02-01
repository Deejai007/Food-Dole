import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  let navigate = useNavigate();
  return (
    <div className="dj-heroo">
      <Navbar />
      <section className="s-landing">
        <div className="lhs">
          <h1>
            Cutting food waste is a delicious way of saving money, helping to
            feed the world and protect the planet.
          </h1>
        </div>
        <div className="rhs">
          <img
            src="https://cdn.dribbble.com/users/270001/screenshots/17195574/media/1155fa8518ce00af5f4a0e48c7cf48b0.png?compress=1&resize=1000x750&vertical=top"
            alt=""
          />
        </div>
      </section>
      <hr className="divide-landing" />
      <section
        className="action-section ftco-counter ftco-intro"
        id="section-counter"
      >
        <div className="container">
          <div className="row no-gutters">
            <div className=" be-a-col be-vol col-md d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18 color-3 align-items-stretch">
                <div className="text">
                  <h3 className="mb-4 my-2 blurredbackground" align="center">
                    Be a Donor
                  </h3>
                  <p>
                    “The measure of life is not its duration but its donation.”
                    -Peter Marshall Become a hero for someone by donating
                    surplus food to them. Would you like to give food?
                  </p>
                  <button
                    type="button"
                    className="btn btn-action nav-btn-1"
                    onClick={() => {
                      navigate("/donarlogin");
                    }}
                  >
                    Be a Donor
                  </button>
                </div>
              </div>
            </div>

            <div className=" be-a-col be-vol col-md d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18 color-3 align-items-stretch">
                <div className="text">
                  <h3 className="mb-4 my-2" align="center">
                    Be a Volunteer
                  </h3>
                  <p>
                    "Alone we can do so little, together we can do so much.” –
                    Helen Keller Become a by claiming the food. We will like you
                    to volunteer with us, provide us your information below.
                  </p>
                  <button
                    type="button"
                    className="btn btn-action nav-btn-2"
                    onClick={() => {
                      navigate("/volunteerlogin");
                    }}
                  >
                    Be a Volunteer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                    leftover food, who has good quality of surplus food and who
                    has kind heart.
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
                    Kind support by businesses that seeks to establish a deeper
                    bond between our donors and volunteers, to reach out donors
                    and volunteers as much as possible.
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
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section ftco-animate text-center">
              <h1 className="mb-4">REVIEWS</h1>
              <p>
                Reviews shared by our users spare a couple of minutes to Help us
                by sharing your experience in the feedback.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 d-flex mb-sm-4 ftco-animate">
              <div className="staff">
                <div className="d-flex mb-4">
                  <div
                    className="img"
                    // style={{ backgroundImage: "url(images/person_1.jpg)" }}
                  ></div>
                  <div className="info ml-4">
                    <h3>Deepak</h3>
                    <span className="position">Lorem, ipsum.</span>
                    <div className="text">
                      <p>
                        Rating: <span>Lorem.</span>
                      </p>
                    </div>
                    <div className="text">
                      <p>
                        Experience: <span>Lorem ipsum dolor sit amet.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
