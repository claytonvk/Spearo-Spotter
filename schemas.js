const Joi = require('joi');
const { number } = require('joi');

module.exports.fishingspotSchema = Joi.object({
    fishingspot: Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        difficulty: Joi.number().required().min(1).max(5),
        // image: Joi.string().required(),
        longitude: Joi.number().required().min(-180).max(180),
        latitude: Joi.number().required().min(-90).max(90),

    }).required(),
    deleteImages: Joi.array()
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        body: Joi.string().required()
    }).required()
});