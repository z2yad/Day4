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
        console.log(err);
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
        console.log(err);
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
                    hourly: "time,temperature_2m"
                }
            }

        )

        return response.data;
    } catch (err) {
        console.log(err);
    }
}
module.exports = {
    getCurrentWeather,
    getForecast,
    gethourly
};