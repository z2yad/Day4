const WetherService = require("../Services/weatherService");

const getCurrentWeather = async (req, res) => {
  const data = await WetherService.getCurrentWeather();

  res.json(data);
}
const getForecast = async (req, res) => {
  const forecast = await WetherService.getForecast();

  res.json(forecast);
}
const gethourly = async (req, res) => {
const hourly = await WetherService.gethourly();

res.json(hourly);
}
const SunriseAndSunset = async (req, res) => {
  const sunriseAndSunset = await WetherService.SunriseAndSunset();
  res.json(sunriseAndSunset);
}
const precipitationData = async (req, res) => {
  const precipitation = await WetherService.precipitationData();
  res.json(precipitation);
}

module.exports = {
  getCurrentWeather,
  getForecast,
  gethourly,
  SunriseAndSunset,
  precipitationData
}