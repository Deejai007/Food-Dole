const express = require("express");
const fetchuser = require("../middleware/fetchUser");
const Food = require("../models/Food");
const { body, validationResult } = require("express-validator");
const { createIndexes } = require("../models/Food");
const router = express.Router();

// ROUTE 1:Get all the foods of the user GET "/api/foods/fetchallfoods"-login required

router.get("/fetchallfood", fetchuser, async (req, res) => {
  try {
    const foods = await Food.find();

    res.json(foods);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some Error occured in create food");
  }
});

// ROUTE 2:Add a new  food of the user POST "/api/foods/addfood"-login required
router.post("/addfood", fetchuser, async (req, res) => {
  const {
    name,
    description,
    type,
    address,
    city,
    phone,
    quantity,
    quantityUnit,
    useBefore,
  } = req.body;
  // Check if food is valid and return bad request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    // Creating a new food object
    const food = new Food({
      name,
      description,
      type,
      address,
      city,
      phone,
      quantity,
      quantityUnit,
      useBefore,
      user: req.user.id,
    });
    // save that object in DB
    const savedFood = await food.save();

    res.json(savedFood);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some Error occured in create food");
  }
});

// ROUTE 3:Update an existing  food of the user PUT "/api/foods/updatefood"-login required

router.put(
  "/updatefood/:id",
  fetchuser,

  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      // Create new food object
      const newfood = {};
      // update the provided details
      if (title) {
        newfood.title = title;
      }
      if (description) {
        newfood.description = description;
      }
      if (tag) {
        newfood.tag = tag;
      }
      // Find the food from DB
      let food = await Food.findById(req.params.id);
      if (!food) {
        return res.status(404).send("Not found");
      }
      if (food.user.toString() !== req.user.id) {
        return res.status(401).send("Nice try Dumbo");
      }
      // Update the food
      food = await Food.findByIdAndUpdate(
        req.params.id,
        { $set: newfood },
        { new: true }
      );

      res.json(food);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some Error occured in create food");
    }
  }
);
// ROUTE 4:Delete an existing  food of the user DELETE "/api/foods/deletefood"-login required

router.delete(
  "/deletefood/:id",
  fetchuser,

  async (req, res) => {
    try {
      const { title, description, tag } = req.body;

      // Find the food from DB
      let food = await Food.findById(req.params.id);
      if (!food) {
        return res.status(404).send("Not found");
      }
      if (food.user.toString() !== req.user.id) {
        return res.status(401).send("Nice try Dumbo");
      }
      // Delete the food
      food = await Food.findByIdAndDelete(req.params.id);
      res.json({ Success: "Food has been deleted" });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some Error occured in create food");
    }
  }
);
module.exports = router;
