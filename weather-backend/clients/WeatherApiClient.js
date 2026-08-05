const axios = require("axios");

const getCurrentWeather = async () => {
    const response = await axios.get(
        "https://api.open-meteo.com/v1/forecast",
        {
            params: {
                latitude: 30.0444,
                longitude: 31.2357,
                current:"temperature_2m,relative_humidity_2m,wind_speed_10m"
            }
        }
    )
    if(response.status != 200){
        throw new Error(`API Error: ${response.statusText}`);
    }
    return response.data;
}
module.exports = {
    getCurrentWeather
};