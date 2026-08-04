const express = require("express");
const Router = express.Router();

Router.get("/", (req, res) => {
  res.json({
    message: "Welcome to the weather API",
  });
});

module.exports = Router;