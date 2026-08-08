require("dotenv").config();

const express = require("express");
const app = express();

const port = process.env.PORT || 3000;


//call route to server
const WeatherRoutes = require("./routes/WeatherRoutes");

app.use("/api/weather", WeatherRoutes);


app.listen(port, () => {
  console.log(`server is running http://localhost:${port}`);
});
