const mongoose = require("mongoose");
const mongoURI = process.env.DB_URI;

mongoose.set("strictQuery", true);
const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("~~~~~~ Connected to mongo");
  });
};
module.exports = connectToMongo;
