import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from "react";

import Home from "./Pages/Home/Home";
import { About } from "./Pages/About/About";
import FoodState from "./Context/foods/FoodsState";

import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import LandingPage from "./Pages/LandingPage/LandingPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import ProtectedRoute from "./components/ProtectedRoute";

import VolunteerLoginSignup from "./Pages/VolunteerLoginSIgnup/VolunteerLoginSignup";
import DonarLoginSignup from "./Pages/DonarLoginSIgnup/DonarLoginSignup";
import DonarHome from "./Pages/DonarHome/DonarHome";
import DonarAddFood from "./Pages/DonarAddFood/DonarAddFood";
import VolunteerHomePage from "./Pages/VolunteerHomePage/VolunteerHomePage";
import FoodList from "./Pages/FoodList/FoodList";
import FoodInfo from "./Pages/FoodInfo/FoodInfo";
function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        // hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        // pauseOnFocusLoss
        // draggable
        // pauseOnHover={false}

        // theme="light"
      ></ToastContainer>
      <BrowserRouter>
        <foodState>
          <Routes>
            <Route path="" element={<LandingPage />} />
            <Route
              exact
              path="/home"
              element={
                // <ProtectedRoute>
                <Home />
                /* </ProtectedRoute> */
              }
            />
            <Route
              exact
              path="/about"
              element={
                // <ProtectedRoute>
                <About />
                /* </ProtectedRoute> */
              }
            />
            <Route exact path={"/login"} element={<Login />} />
            <Route exact path={"/signup"} element={<Signup />} />
            <Route exact path={"/donarlogin"} element={<DonarLoginSignup />} />
            <Route exact path={"/donaraddfood"} element={<DonarAddFood />} />
            <Route exact path={"/donarhome"} element={<DonarHome />} />
            <Route
              exact
              path={"/volunteerhome"}
              element={<VolunteerHomePage />}
            />
            <Route path="/foodlist" element={<FoodList />} />
            <Route path="/foodinfo" element={<FoodInfo />} />

            <Route
              exact
              path={"/volunteerlogin"}
              element={<VolunteerLoginSignup />}
            />
          </Routes>
          {/* </div> */}
        </foodState>
      </BrowserRouter>
    </>
  );
}

export default App;
