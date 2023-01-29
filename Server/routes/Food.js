const express = require("express");
const fetchuser = require("../middleware/fetchUser");
const Food = require("../models/Food");
const { body, validationResult } = require("express-validator");
const router = express.Router();

// ROUTE 1:Get all the notes of the user GET "/api/notes/fetchallnotes"-login required

router.get("/fetchallfood", fetchuser, async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some Error occured in create food");
  }
});
// ROUTE 2:Add a new  note of the user POST "/api/notes/addnote"-login required
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
  // Check if note is valid and return bad request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    // Creating a new note object
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
    res.status(500).send("Some Error occured in create note");
  }
});

// ROUTE 3:Update an existing  note of the user PUT "/api/notes/updatenote"-login required

router.put(
  "/updatenote/:id",
  fetchuser,

  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      // Create new note object
      const newnote = {};
      // update the provided details
      if (title) {
        newnote.title = title;
      }
      if (description) {
        newnote.description = description;
      }
      if (tag) {
        newnote.tag = tag;
      }
      // Find the note from DB
      let note = await Note.findById(req.params.id);
      if (!note) {
        return res.status(404).send("Not found");
      }
      if (note.user.toString() !== req.user.id) {
        return res.status(401).send("Nice try Dumbo");
      }
      // Update the note
      note = await Note.findByIdAndUpdate(
        req.params.id,
        { $set: newnote },
        { new: true }
      );

      res.json(note);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some Error occured in create note");
    }
  }
);
// ROUTE 4:Delete an existing  note of the user DELETE "/api/notes/deletenote"-login required

router.delete(
  "/deletenote/:id",
  fetchuser,

  async (req, res) => {
    try {
      const { title, description, tag } = req.body;

      // Find the note from DB
      let note = await Note.findById(req.params.id);
      if (!note) {
        return res.status(404).send("Not found");
      }
      if (note.user.toString() !== req.user.id) {
        return res.status(401).send("Nice try Dumbo");
      }
      // Delete the note
      note = await Note.findByIdAndDelete(req.params.id);
      res.json({ Success: "Note has been deleted" });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some Error occured in create note");
    }
  }
);
module.exports = router;
