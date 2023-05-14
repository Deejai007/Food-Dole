const jwt = require("jsonwebtoken");
const JWT_SECRET = "DeepakJainBoi";

const fetchuser = (req, res, next) => {
  // Get user from JWT token and append id to req object
  const token = req.header("authtoken");
  // console.log("!!", token);
  if (!token) {
    res.status(401).send({ error: "1Please auth using valid token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);

    req.user = data.user;
    // console.log(data.user.id);
    next();
  } catch (error) {
    // res.status(401).send({ error: "2Please auth using valid token" })
    console.log(error);
  }
};
module.exports = fetchuser;
