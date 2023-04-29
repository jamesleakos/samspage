const express = require('express');
const router = express.Router();
const imageController = require('../controllers/images.js');

// we don't actually use this anymore - we use the imagekit CDN instead
// router.get('/random', imageController.getRandomImage);

module.exports = router;