const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.json({
    message: "Welcome to the weather API",
  });
});

module.exports = route;