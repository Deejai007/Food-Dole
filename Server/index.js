const connectToMongo = require("./db");
let cors = require("cors");
connectToMongo();
const express = require("express");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const app = express();
cloudinary.config({
  cloud_name: "dam1s70im",
  api_key: "712472359239611",
  api_secret: "8XoWJNBAQd-F085Omb6otnCPGjc",
});
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "DEV",
  },
});
const upload = multer({ storage: storage });
const port = 5001;
app.use(cors());
app.use(express.json());
// Avialable Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/food", require("./routes/food"));

app.listen(port, () => {
  console.log(`~~~~~~ listening on port ${port}`);
});
