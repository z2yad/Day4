const express = require("express");
const app = express();
const port = 3000;


//call route to server
const WeatherRoutes = require("./routes/WeatherRoutes");

app.use("/api/weather", WeatherRoutes);

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
