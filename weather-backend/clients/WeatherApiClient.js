const axios = require("axios");

const getCurrentWeather = async () => {
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
    if (response.status != 200) {
        throw new Error(`API Error: ${response.statusText}`);
    }
    return response.data;
}
const getForecast = async () => {
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
    if (response.status != 200) {
        throw new Error(`API Error: ${response.statusText}`);
    }
    return response.data;
}
//hourly

const gethourly = async () => {
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
    if (response.status !== 200) {
        throw new Error(`API Error: ${response.statusText}`);
    }
    return response.data;
}
module.exports = {
    getCurrentWeather,
    getForecast,
    gethourly
};