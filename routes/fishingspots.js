const express = require('express');
const router = express.Router({ mergeParams: true });
const catchAsync = require('../utilities/catchAsync');
const { isLoggedIn, isAuthor, validateFishingSpot } = require('../middleware');
const fishingspot = require('../controllers/fishingspots');
const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });

const FishingSpot = require('../models/fishingSpot');

router.route('/')
    .get(catchAsync(fishingspot.index))
    .post(isLoggedIn, upload.array('image'), validateFishingSpot, catchAsync(fishingspot.createFishingspot));

router.get('/new', isLoggedIn, fishingspot.newFishingspotForm);

router.route('/:id')
    .get(catchAsync(fishingspot.showFishingspot))
    .put(isLoggedIn, isAuthor, upload.array('image'), validateFishingSpot, catchAsync(fishingspot.updateFishingspot))
    .delete(isLoggedIn, isAuthor, catchAsync(fishingspot.destroyFishingspot));

router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(fishingspot.editFishingspotForm));




module.exports = router;