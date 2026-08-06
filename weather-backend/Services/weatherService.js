const WeatherApiClient = require("../clients/WeatherApiClient");

const getCurrentWeather = async () => {
    const weatherData = await WeatherApiClient.getCurrentWeather();

    return {
        temp: weatherData.current.temperature_2m + "°C",
        humidity: weatherData.current.relative_humidity_2m + "%",
        windSpeed: weatherData.current.wind_speed_10m + "km/h"
    };
}


//forecast Data
const getForecast = async () => {
    const forecastData = await WeatherApiClient.getForecast();
    debugger;
    const { daily } = forecastData;

    const forecast = [];
    for (let i = 0; i < daily.time.length; i++) {
        forecast.push({
            date: daily.time[i],
            maxTemperature: daily.temperature_2m_max[i],
            minTemperature: daily.temperature_2m_min[i],
            status: daily.weather_code[i]
        });
    }
    return forecast;
}
const gethourly = async () => {
    const hourlyData = await WeatherApiClient.gethourly();
    return hourlyData;
}

const SunriseAndSunset = async () => {
    const sunriseAndSunsetData = await WeatherApiClient.SunriseAndSunset();
    const { daily } = sunriseAndSunsetData;
    return {
        sunrise: daily.sunrise[0],
        sunset: daily.sunset[0]
    };
}
const precipitationData = async () => {
    const precipitation = await WeatherApiClient.getPrecipitation();
    return {
        precipitation: precipitation.daily.precipitation_sum[0]
    };
}
module.exports = {
    getCurrentWeather,
    getForecast,
    gethourly,
    SunriseAndSunset,
    precipitationData
}
