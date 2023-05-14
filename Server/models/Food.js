const mongoose = require("mongoose");
const { Schema } = mongoose;

const FoodSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  name: {
    type: String,
    reqired: true,
  },
  description: {
    type: String,
    reqired: true,
  },
  type: {
    type: String,
    // reqired: true,
    default: "General",
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  quantityUnit: {
    type: String,
    required: true,
  },
  useBefore: {
    type: Date,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
// FoodSchema.createIndex({ useBefore: 1 }, { expireAfterSeconds: 0 });
module.exports = mongoose.model("food", FoodSchema);
