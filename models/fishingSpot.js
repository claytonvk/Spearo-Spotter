const mongoose = require('mongoose');
const Review = require('./review')
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    url: String,
    filename: String
});

ImageSchema.virtual('thumbnail').get(function () {
    return this.url.replace('/upload', '/upload/w_200');
});

ImageSchema.virtual('index').get(function () {
    return this.url.replace('/upload', '/upload/ar_3:2,c_fill,w_400');
});

ImageSchema.virtual('show').get(function () {
    return this.url.replace('/upload', '/upload/ar_3:2,b_black,c_pad,w_600');
});

const fishingSpotSchema = new Schema({
    name: String,
    description: String,
    location: String,
    difficulty: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    images: [ImageSchema],
    longitude: {
        type: Number,
        min: -180,
        max: 180,
        required: true
    },
    latitude: {
        type: Number,
        min: -90,
        max: 90,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
});

fishingSpotSchema.post('findOneAndDelete', async function (doc) {
    if (doc) {
        await Review.deleteMany({
            _id: {
                $in: doc.reviews
            }
        })
    }
})

module.exports = mongoose.model('Fishingspot', fishingSpotSchema);