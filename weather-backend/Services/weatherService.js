const WeatherApiClient = require("../clients/WeatherApiClient");

const getWeather = async () => {
    const weatherData = await WeatherApiClient.getCurrentWeather();

    return weatherData;
}


module.exports = {
    getWeather
}