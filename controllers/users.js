const passport = require('passport');
const User = require('../models/user');

module.exports.registerForm = (req, res) => {
    res.render('users/register')
}

module.exports.register = async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const user = new User({ email, username });
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            if (err) return next(err);
            req.flash('success', 'Welcome to SpearoSpotter!');
            res.redirect('/fishingspots');
        })
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('register');
    }

}

module.exports.authenticateLocal = passport.authenticate('local', {
    failureFlash: true,
    failureRedirect: "/login",
    failureMessage: true,
    keepSessionInfo: true
})

module.exports.loginForm = (req, res) => {
    res.render('users/login')
}

module.exports.login = (req, res) => {
    req.flash('success', `Welcome Back ${req.session.passport.user}!`);
    const redirectUrl = req.session.returnTo || '/fishingspots';
    delete req.session.returnTo;
    res.redirect(redirectUrl);
}

module.exports.logout = (req, res) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        req.flash('success', 'Goodbye!');
        res.redirect('/fishingspots');
    });
}