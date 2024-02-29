const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const verifyJwt = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    const payload = await jwt.verify(token, process.env.JWT_SECRET);
    if (!payload)
      return res.status(401).json({ message: "You are not logged in" });

    console.log(payload);
    const user = await User.findOne({ _id: payload.userId });
    if (!user)
      return res.status(401).json({ message: "You are not logged in" });

    req.user = user;
    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = verifyJwt;
