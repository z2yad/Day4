const WetherService = require("../Services/weatherService");

const getCurrentWeather = async (req, res) => {
  const {latitude, longitude} = req.query;
  const data = await WetherService.getCurrentWeather(latitude, longitude);

  res.json(data);
}
const getForecast = async (req, res) => {
  const {latitude, longitude} = req.query;
  const forecast = await WetherService.getForecast(latitude, longitude);

  res.json(forecast);
}
const gethourly = async (req, res) => {
  const {latitude, longitude} = req.query;
  const hourly = await WetherService.gethourly(latitude, longitude);
  res.json(hourly);
}
const SunriseAndSunset = async (req, res) => {
  const {latitude, longitude} = req.query;
  const sunriseAndSunset = await WetherService.SunriseAndSunset(latitude, longitude);
  res.json(sunriseAndSunset);
}
const precipitationData = async (req, res) => {
  const {latitude, longitude} = req.query;
  const precipitation = await WetherService.precipitationData(latitude, longitude);
  res.json(precipitation);
}

module.exports = {
  getCurrentWeather,
  getForecast,
  gethourly,
  SunriseAndSunset,
  precipitationData
}