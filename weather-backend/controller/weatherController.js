const WetherService = require("../Services/weatherService");

const getCurrentWeather = async (req,res) =>{
    const data = await WetherService.getCurrentWeather();
    
  res.json(data);
}
const getForecast = async (req,res) =>{
  const forecast = await WetherService.getForecast();
  
res.json(forecast);
}

module.exports = {
    getCurrentWeather,
    getForecast
}