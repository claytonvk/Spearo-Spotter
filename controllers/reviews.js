const FishingSpot = require('../models/fishingSpot');
const Review = require('../models/review');

module.exports.createReview = async (req, res) => {
    const location = await FishingSpot.findById(req.params.id);
    const review = new Review(req.body.review);
    review.author = req.user.id;
    location.reviews.unshift(review);
    await review.save();
    await location.save();
    req.flash('success', 'Created new review!');
    res.redirect(`/fishingspots/${location.id}`);
}

module.exports.deleteReview = async (req, res) => {
    const { id, reviewId } = req.params;
    await FishingSpot.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash('success', 'Successfully deleted review')
    res.redirect(`/fishingspots/${id}`);
}