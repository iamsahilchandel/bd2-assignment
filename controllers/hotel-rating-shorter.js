const { hotels } = require('../data');

const HotelRatingShorter = (req, res) => {
  const rating = req.query.rating;

  let data = {};

  if (rating === 'low-to-high') {
    data = hotels.sort((a, b) => a.rating - b.rating);
  } else {
    data = hotels.sort((a, b) => b.rating - a.rating);
  }

  res.json({ hotels: data });
};

module.exports = HotelRatingShorter;
