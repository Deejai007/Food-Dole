const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017";
mongoose.set("strictQuery", true);
const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("~~~~~~ Connected to mongo");
  });
};
module.exports = connectToMongo;
// "mongodb+srv://ronaldo:UxU6ZnxOtOgnF7Pg@cluster0.wqfcdio.mongodb.net/test";
