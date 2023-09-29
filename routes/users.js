const express = require('express');

const router = express.Router({ mergeParams: true });
const catchAsync = require('../utilities/catchAsync');
const User = require('../models/user');
const users = require('../controllers/users');

router.route('/register')
    .get(users.registerForm)
    .post(catchAsync(users.register));

router.route('/login')
    .get(users.loginForm)
    .post(users.authenticateLocal, users.login);

router.get('/logout', users.logout)


module.exports = router;