const getWeather = (req, res) => {
  res.json({
    message: "get all weathers",
  });
};

module.exports = {
    getWeather
};