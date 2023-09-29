const mongoose = require('mongoose');
const express = require('express');
const app = express();
const path = require('path');
const fishingSeed = require('./fishingLocationsDB');
const FishingSpot = require('../models/fishingSpot');
const Review = require('../models/review');
const User = require('../models/user');

mongoose.connect('mongodb://127.0.0.1:27017/spearoSpotter')
    .then(() => {
        console.log('CONNECTION OPEN!')
    })
    .catch((err) => {
        console.log('OH NO ERROR', err)
    })


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const seedDB = async () => {
    await FishingSpot.deleteMany({})
    await Review.deleteMany({})
        // await User.deleteMany({})

        .then(() => {
            console.log('success')
        })
        .catch(() => {
            console.log('fail')
        })
    await FishingSpot.insertMany(fishingSeed)
        .then(() => {
            console.log('success')
        })
        .catch(() => {
            console.log('fail')
        })

};

seedDB()

