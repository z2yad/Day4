const axios = require("axios");

const getCurrentWeather = async () => {
    try {
        const response = await axios.get(
            "https://api.open-meteo.com/v1/forecast",
            {
                params: {
                    latitude: 30.0444,
                    longitude: 31.2357,
                    current: "temperature_2m,relative_humidity_2m,wind_speed_10m"
                }
            }
        )
        return response.data;
    } catch (err) {
        throw new Error("Failed to fetch current weather");
    }
}
const getForecast = async () => {
    try {
        const response = await axios.get(
            "https://api.open-meteo.com/v1/forecast",
            {
                params: {
                    latitude: 30.0444,
                    longitude: 31.2357,
                    daily: "temperature_2m_max,temperature_2m_min,weather_code"
                }
            }
        )
        return response.data;
    } catch (err) {
        throw new Error("Failed to fetch daily weather");
    }
}
//hourly

const gethourly = async () => {
    try {
        const response = await axios.get(
            "https://api.open-meteo.com/v1/forecast",
            {
                params: {
                    latitude: 30.0444,
                    longitude: 31.2357,
                    hourly: "temperature_2m"
                }
            }

        )

        return response.data;
    } catch (err) {
        throw new Error("Failed to fetch hourly weather");
    }
}
const SunriseAndSunset = async () => {
    try {
        const response = await axios.get(
            "https://api.open-meteo.com/v1/forecast",
            {
                params: {
                    latitude: 30.0444,
                    longitude: 31.2357,
                    daily: "sunrise,sunset"
                }
            }

        )

        return response.data;
    } catch (err) {
        throw new Error("Failed to fetch hourly weather");
    }
}
module.exports = {
    getCurrentWeather,
    getForecast,
    gethourly,
    SunriseAndSunset
};