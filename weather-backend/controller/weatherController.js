const WetherService = require("../Services/weatherService");

const getCurrentWeather = async (req, res) => {
 
  const latitude = Number(req.query.latitude);
  const longitude = Number(req.query.longitude);
  const data = await WetherService.getCurrentWeather(latitude, longitude);
  res.json(data);
}
const getForecast = async (req, res) => {
     ;
  const latitude = Number(req.query.latitude);
  const longitude = Number(req.query.longitude);
  const forecast = await WetherService.getForecast(latitude, longitude);

  res.json(forecast);
}
const gethourly = async (req, res) => {
  const latitude = Number(req.query.latitude);
const longitude = Number(req.query.longitude);
  const hourly = await WetherService.gethourly(latitude, longitude);
  res.json(hourly);
}
const SunriseAndSunset = async (req, res) => {
  const latitude = Number(req.query.latitude);
  const longitude = Number(req.query.longitude);
  const sunriseAndSunset = await WetherService.SunriseAndSunset(latitude, longitude);
  res.json(sunriseAndSunset);
}
const precipitationData = async (req, res) => {
  const latitude = Number(req.query.latitude);
  const longitude = Number(req.query.longitude);
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