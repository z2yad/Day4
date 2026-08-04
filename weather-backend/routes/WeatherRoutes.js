const express = require("express");
const Router = express.Router();

const WeatherController = require("../controller/weatherController");

Router.get("/", WeatherController.getWeather);

module.exports = Router;