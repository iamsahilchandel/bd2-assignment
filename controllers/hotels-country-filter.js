const { hotels } = require('../data');

const HotelsCountryFilter = (req, res) => {
  const country = req.query.country;

  let data = hotels.filter(
    (hotel) => hotel.country.toUpperCase() === country.toUpperCase()
  );

  res.json({ hotels: data });
};

module.exports = HotelsCountryFilter;
