const express = require("express");
const Router = express.Router();

const WeatherController = require("../controller/weatherController");

Router.get("/", WeatherController.getCurrentWeather);
Router.get("/forecast", WeatherController.getForecast);
Router.get("/hourly", WeatherController.gethourly);
module.exports = Router;