const WetherService = require("../Services/weatherService");

const getCurrentWeather = async (req, res) => {
  const data = await WetherService.getCurrentWeather(30.0444,31.2357);

  res.json(data);
}
const getForecast = async (req, res) => {
  const forecast = await WetherService.getForecast(30.0444,31.2357);

  res.json(forecast);
}
const gethourly = async (req, res) => {
const hourly = await WetherService.gethourly(30.0444,31.2357);

res.json(hourly);
}
const SunriseAndSunset = async (req, res) => {
  const sunriseAndSunset = await WetherService.SunriseAndSunset(30.0444,31.2357);
  res.json(sunriseAndSunset);
}
const precipitationData = async (req, res) => {
  const precipitation = await WetherService.precipitationData(30.0444,31.2357);
  res.json(precipitation);
}

module.exports = {
  getCurrentWeather,
  getForecast,
  gethourly,
  SunriseAndSunset,
  precipitationData
}