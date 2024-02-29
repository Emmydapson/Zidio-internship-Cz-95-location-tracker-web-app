const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// Function to handle user registration
exports.register = async (req, res) => {
  try {
    // Extract user data from request body
    const { username, email, password } = req.body;

    // Check if user already exists
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save user to the database
    await newUser.save();

    // Generate JWT token
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Respond with success message and send jwt cookie
    res
      .cookie("jwt", token, {
        httpOnly: true,
        maxAge: 1 * 24 * 60 * 60 * 1000,
      })
      .status(201)
      .json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: err.message || "Internal server error" });
  }
};

// Function to handle user login
exports.login = async (req, res) => {
  try {
    // Extract login credentials from request body
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Check if the password is correct
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Respond with token
    res
      .cookie("jwt", token, {
        httpOnly: true,
        maxAge: 1 * 24 * 60 * 60 * 1000,
      })
      .status(200)
      .json({ message: "User logged in successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: err.message || "Internal server error" });
  }
};
