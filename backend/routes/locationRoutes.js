const express = require("express");
const {
  addLocation,
  viewLocations,
} = require("../controllers/locationController");
const verifyJwt = require("../middleware/auth");
const router = express.Router();

router.use(verifyJwt);

// Route for adding your location
router.post("/", addLocation);

// Route for viewing your added locations
router.get("/", viewLocations);

module.exports = router;
