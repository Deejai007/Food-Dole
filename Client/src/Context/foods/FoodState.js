import React from "react";
import { useState } from "react";
import FoodContext from "./FoodContext";
const foodState = (props) => {
  const host = "http://localhost:5001";

  const [foods, setfoods] = useState([]);

  // Get all foods
  const getfoods = async () => {
    // API call

    const response = await fetch(`${host}/api/foods/fetchallfoods`, {
      method: "GET",

      headers: {
        "auth-token": `${localStorage.token}`,
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setfoods(json);
    // console.log(json);
  };
  // Add a food
  const addfood = async (title, description, tag) => {
    // API call

    await fetch(`${host}/api/foods/addfood`, {
      method: "POST",

      headers: {
        "auth-token": `${localStorage.token}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ title, description, tag }),
    });
    // const json = response.json();
    console.log("Adding a new food");
  };
  // Delete a food
  const deletefood = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/foods/deletefood/${id}`, {
      method: "DELETE",

      headers: {
        "auth-token": `${localStorage.token}`,
        "Content-Type": "application/json",
      },
    });
    console.log("Deleting the food");

    let newfoods = foods.filter((food) => {
      return food._id !== id;
    });
    setfoods(newfoods);
  };

  // Edit a food
  const editfood = async (id, title, description, tag) => {
    // API call

    const response = await fetch(`${host}/api/foods/updatefood/${id}`, {
      method: "PUT",

      headers: {
        "auth-token": `${localStorage.token}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

    for (let index = 0; index < foods.length; index++) {
      const element = foods[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };
  return (
    <FoodContext.Provider
      value={{ foods, setfoods, addfood, deletefood, editfood, getfoods }}
    >
      {props.children}
    </FoodContext.Provider>
  );
};
export default foodState;
