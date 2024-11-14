const express = require('express');
const { hotels } = require('../data');
const HotelPriceShorter = require('../controllers/hotel-price-shorter');
const HotelRatingShorter = require('../controllers/hotel-rating-shorter');
const HotelReviewShorter = require('../controllers/hotel-review-shorter');
const HotelsAmenityFilter = require('../controllers/hotels-amenity-filter');
const HotelsCountryFilter = require('../controllers/hotels-country-filter');
const HotelsCategoryFilter = require('../controllers/hotels-category-filter');

const router = express.Router();

/**
 * Declare all routes here
 */

router.get('/', (req, res) => {
  res.status(200).json({ success: true, msg: 'app is up and running' });
});

router.get('/hotels', (req, res) => {
  res.json({ hotels });
});

router.get('/hotels/sort/pricing', HotelPriceShorter);
router.get('/hotels/sort/rating', HotelRatingShorter);
router.get('/hotels/sort/reviews', HotelReviewShorter);
router.get('/hotels/filter/amenity', HotelsAmenityFilter);
router.get('/hotels/filter/country', HotelsCountryFilter);
router.get('/hotels/filter/category', HotelsCategoryFilter);

module.exports = router;
