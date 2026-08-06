const WeatherApiClient = require("../clients/WeatherApiClient");

const getCurrentWeather = async () => {
    const weatherData = await WeatherApiClient.getCurrentWeather();

    return weatherData;
}


//forecast
const getForecast = async () => {
    const forecast = await WeatherApiClient.getForecast();

    return {
        date:forecast.forecast.time,
        maxtemp:forecast.forecast.maxtemp,
        mintemp:forecast.forecast.mintemp,
        status:forecast.forecast.weathercode,
    };
}
module.exports = {
    getCurrentWeather,
    getForecast
}
