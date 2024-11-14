const { hotels } = require('../data');

const HotelReviewShorter = (req, res) => {
  const reviews = req.query.reviews;

  let data = {};

  if (reviews === 'least-to-most') {
    data = hotels.sort((a, b) => a.reviews - b.reviews);
  } else {
    data = hotels.sort((a, b) => b.rating - a.rating);
  }

  res.json({ hotels: data });
};

module.exports = HotelReviewShorter;
