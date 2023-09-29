const express = require('express');
const router = express.Router({ mergeParams: true });
const ExpressError = require('../utilities/expressError');
const catchAsync = require('../utilities/catchAsync');
const FishingSpot = require('../models/fishingSpot');
const Review = require('../models/review');
const reviews = require('../controllers/reviews');
const { validateReview, isLoggedIn, isReviewAuthor } = require('../middleware');

router.post('/', isLoggedIn, validateReview, catchAsync(reviews.createReview));

router.delete('/:reviewId', isLoggedIn, isReviewAuthor, catchAsync(reviews.deleteReview));

module.exports = router;