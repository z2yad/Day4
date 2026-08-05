const WetherService = require("../Services/weatherService");

const getWeather = async (req,res) =>{
    const data = await WetherService.getWeather();
    
  res.json(data);
}

module.exports = {
    getWeather
}