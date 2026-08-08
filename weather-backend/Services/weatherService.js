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
            maxTemperature: daily.temperature_2m_max[i] + "°C",
            minTemperature: daily.temperature_2m_min[i] + "°C",
            status: getWeatherStatus(daily.weather_code[i])
        });
    }
    return forecast;
}

// transform Status from number to text
const getWeatherStatus = (code) => {
    switch (code) {
        case 0:
            return "Clear sky"
        case 1:
            return "Mostly clear"
        case 2:
            return "Partly cloudy"
        case 3:
            return "Overcast"
        case 45:
            return "Fog"
        case 48:
            return "Depositing rime fog"
        case 51:
            return "Light drizzle"
        case 53:
            return "Moderate drizzle"
        case 55:
            return "Dense drizzle"
        case 56:
            return "Light freezing drizzle"
        case 57:
            return "Dense freezing drizzle"
        case 61:
            return "Light rain"
        case 63:
            return "Moderate rain"
        case 65:
            return "Heavy rain"
        case 66:
            return "Light freezing rain"
        case 67:
            return "Heavy freezing rain"
        case 71:
            return "Light snow fall"
        case 73:
            return "Moderate snow fall"
        case 75:
            return "Heavy snow fall"
        case 77:
            return "Snow grains"
        case 80:
            return "Light rain showers"
        case 81:
            return "Moderate rain showers"
        case 82:
            return "Violent rain showers"
        case 83:
            return "Light snow showers"
        case 84:
            return "Moderate snow showers"
        case 85:
            return "Heavy snow showers"
        case 86:
            return "Heavy snow showers"
        case 95:
            return "Thunderstorm"
        case 96:
            return "Thunderstorm with hail"
        case 99:
            return "Thunderstorm with heavy hail"
        default:
            return "Unknown"
    }
}
//hourly Data
const gethourly = async () => {
    const hourlyData = await WeatherApiClient.gethourly();
    return {
        time: hourlyData.hourly.time,
        temperature: hourlyData.hourly.temperature_2m
    }
}

const SunriseAndSunset = async () => {
    const sunriseAndSunsetData = await WeatherApiClient.SunriseAndSunset();
    const { daily } = sunriseAndSunsetData;
    return {
        sunrise: daily.sunrise[0].split("T")[1],
        sunset: daily.sunset[0].split("T")[1]
    };
}
//precipitation Data
const precipitationData = async () => {
    const precipitation = await WeatherApiClient.getPrecipitation();
    return {
        precipitation: precipitation.daily.precipitation_sum[0] + "mm"
    };
}
module.exports = {
    getCurrentWeather,
    getForecast,
    gethourly,
    SunriseAndSunset,
    precipitationData
}
