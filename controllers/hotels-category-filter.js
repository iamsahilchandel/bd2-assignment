const { hotels } = require('../data');

const HotelsCategoryFilter = (req, res) => {
  const category = req.query.category;

  let data = hotels.filter(
    (hotel) => hotel.category.toUpperCase() === category.toUpperCase()
  );

  res.json({ hotels: data });
};

module.exports = HotelsCategoryFilter;
