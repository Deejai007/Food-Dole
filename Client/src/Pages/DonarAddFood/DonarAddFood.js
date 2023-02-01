import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./DonarAddFood.css";
import axios from "axios";
import { toast } from "react-toastify";
const DonarAddFood = () => {
  // const [foodData, setfoodData] = useState({
  //   name: "",
  //   description: "",
  //   type: "",
  //   address: "",
  //   city: "",
  //   phone: 0,
  //   quantity: 0,
  //   quantityUnit: "",
  //   useBefore: "",
  // });
  const [name, setname] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [quantity, setQuantity] = useState("");
  const [quantityUnit, setQuantityUnit] = useState("");
  const [useBefore, setUseBefore] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("d");
    const { files } = document.querySelector('input[type="file"]');
    console.log(files[0]);
    // console.log("d");
    const obj = {
      name: name,
      description: description,
      type: type,
      address: address,
      city: city,
      phone: phone,
      quantity: quantity,
      quantityUnit: quantityUnit,
      useBefore: useBefore,
    };
    // console.log(obj);

    const res = await axios
      .post(
        "http://localhost:5001/api/food/addfood",
        obj,

        {
          headers: { authtoken: localStorage.token },
        }
      )
      .catch((err) => {
        console.log(err);
        const errMsg = err.errors;
        // setLoader(false);
        toast.error(`${errMsg}`);
      });
    if (res) {
      toast.success("Food uploaded Successfully!");
      setname("");
      setType("");
      setDescription("");
      setQuantity("");
      setQuantityUnit("");
      setAddress("");
      setPhone("");
      setCity("");
      setUseBefore("");
      // setLoader(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div id="fillupform">
        <form className="voldetails" onSubmit={handleSubmit}>
          <h1 centered className="formHead">
            {" "}
            Fill food details
          </h1>
          <div className="user-details">
            <div className="details1">
              <div className="input-box">
                <span className="details">Food Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Food name"
                  required
                  value={name}
                  // onChange={(e) => }
                  onChange={(e) => {
                    setname(e.target.value);
                    // console.log(name);
                  }}
                />
              </div>
              <div className="input-box">
                <span className="details">Food Type</span>
                <input
                  type="text"
                  name="type"
                  value={type}
                  placeholder="Enter Food Type"
                  required
                  onChange={(e) => {
                    setType(e.target.value);
                    // console.log(type);
                  }}
                />
              </div>
              <div className="input-box">
                <span className="details">Description</span>
                <input
                  type="text"
                  name="description"
                  value={description}
                  placeholder="Enter description"
                  required
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="input-box">
                <span className="details">Pickup Location</span>
                <input
                  type="text"
                  value={address}
                  name="address"
                  placeholder="Enter pickup location"
                  required
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
            <div className="details2">
              <div className="input-box">
                <span className="details">Phone</span>
                <input
                  type="number"
                  value={phone}
                  step={0}
                  name="phone"
                  placeholder="Enter phone"
                  required
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="input-box">
                <span className="details">City</span>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter city"
                  value={city}
                  required
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="input-box">
                <span className="details">Quantity</span>
                <div className="quantityIp">
                  <input
                    type="number"
                    value={quantity}
                    style={{
                      width: "10rem",
                    }}
                    name="quantity"
                    placeholder="Enter quantity"
                    required
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                  <select
                    id="inputCourse"
                    className="quantityselect"
                    name="quantityUnit"
                    value={quantityUnit}
                    onChange={(e) => {
                      setQuantityUnit(e.target.value);
                    }}
                    style={{
                      backgroundColor: "white",
                      borderRadius: "4px",
                      width: "5rem",
                      height: "2.07rem",
                    }}
                  >
                    <option value="">Unit</option>
                    <option value="KG">Kilogram</option>
                    <option value="Lit">Litres</option>
                    <option value="Items">Items</option>
                    <option value="Srevings">Srevings</option>
                  </select>
                </div>
              </div>
              <div className="input-box">
                <span className="details">Consume Before</span>

                <input
                  type="datetime-local"
                  style={{ width: "14.8rem" }}
                  id="dateee"
                  name="useBefore"
                  value={useBefore}
                  onChange={(e) => {
                    setUseBefore(e.target.value);
                    // console.log(useBefore);
                  }}
                ></input>
              </div>
            </div>
          </div>
          <div className="input-box">
            <span className="details">Consume Before</span>

            <input
              type="file"
              id="imageurl"
              name="imageurl"
              onChange={(e) => {
                // setUseBefore(e.target.value);
                // console.log(useBefore);
              }}
            ></input>
          </div>

          <div className="button">
            <input type="submit" name="button" value="Add Food" />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default DonarAddFood;
