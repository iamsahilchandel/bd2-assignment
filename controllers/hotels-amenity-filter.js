const { hotels } = require('../data');

const HotelsAmenityFilter = (req, res) => {
  const amenity = req.query.amenity;

  let data = hotels.filter(
    (hotel) => hotel.amenity.toUpperCase() === amenity.toUpperCase()
  );

  res.json({ hotels: data });
};

module.exports = HotelsAmenityFilter;
