const Location = require("../models/locationModel");

exports.addLocation = async (req, res) => {
  try {
    const { long, lat } = req.body;
    if (!long || !lat)
      return res
        .status(400)
        .json({ message: "Please input longitude and latitude" });

    const location = await Location.create({
      userId: req.user,
      location: {
        coordinates: [long, lat],
      },
    });

    res.status(201).json({ message: "Location added successfully", location });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message || "Internal server error" });
  }
};

exports.viewLocations = async (req, res) => {
  const locations = await Location.find({ userId: req.user._id });

  res.status(200).json({ locations });
};
