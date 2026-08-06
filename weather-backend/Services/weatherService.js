const WeatherApiClient = require("../clients/WeatherApiClient");

const getCurrentWeather = async () => {
    const weatherData = await WeatherApiClient.getCurrentWeather();

    return weatherData;
}


//forecast
const getForecast = async () => {
    const forecast = await WeatherApiClient.getForecast();

    const { daily } = forecast;

    const forecastData = [];
    for (let i = 0; i < daily.time.length; i++) {
        forecastData.push({
            date: daily.time[i],
            max: daily.temperature_2m_max[i],
            min: daily.temperature_2m_min[i],
            status: daily.weather_code[i]
        });
    }
    return forecastData;
}
module.exports = {
    getCurrentWeather,
    getForecast
}
