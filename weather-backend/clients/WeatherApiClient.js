const axios = require("axios");

const getCurrentWeather = async (latitude, longitude) => {
    try {
        const response = await axios.get(
            "https://api.open-meteo.com/v1/forecast",
            {
                params: {
                    latitude,
                    longitude,
                    current: "temperature_2m,relative_humidity_2m,wind_speed_10m"
                }
            }
        )
        return response.data;
    } catch (err) {
        throw new Error("Failed to fetch current weather");
    }
}
const getForecast = async (latitude, longitude) => {
    try {
        const response = await axios.get(
            "https://api.open-meteo.com/v1/forecast",
            {
                params: {
                    latitude,
                    longitude,
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

const gethourly = async (latitude, longitude) => {
    try {
        const response = await axios.get(
            "https://api.open-meteo.com/v1/forecast",
            {
                params: {
                    latitude,
                    longitude,
                    hourly: "temperature_2m"
                }
            }

        )

        return response.data;
    } catch (err) {
        throw new Error("Failed to fetch hourly weather");
    }
}
const SunriseAndSunset = async (latitude, longitude) => {
    try {
        const response = await axios.get(
            "https://api.open-meteo.com/v1/forecast",
            {
                params: {
                    latitude,
                    longitude,
                    daily: "sunrise,sunset"
                }
            }

        )

        return response.data;
    } catch (err) {
        throw new Error("Failed to fetch hourly weather");
    }
}
//Precipitation
const getPrecipitation = async (latitude, longitude) => {
    try{
        const response = await axios.get(
            "https://api.open-meteo.com/v1/forecast",
            {
                params: {
                    latitude,
                    longitude,
                    daily: "precipitation_sum"
                }
            }
        )
        return response.data;
    }catch(err){
        throw new Error("Failed to fetch precipitation");
    }
}

module.exports = {
    getCurrentWeather,
    getForecast,
    gethourly,
    SunriseAndSunset,
    getPrecipitation
};