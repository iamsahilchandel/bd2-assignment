const { hotels } = require('../data');

const HotelPriceShorter = (req, res) => {
  const pricing = req.query.pricing;

  let data = {};

  if (pricing === 'low-to-high') {
    data = hotels.sort((a, b) => a.price - b.price);
  } else {
    data = hotels.sort((a, b) => b.price - a.price);
  }

  res.json({ hotels: data });
};

module.exports = HotelPriceShorter;
