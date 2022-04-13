const authCtrl = {};

const passport = require('passport');

authCtrl.renderSignUp = (req, res) => {
    res.render('auth/signup');
};

authCtrl.signUp = passport.authenticate('local.signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
});

authCtrl.renderSignIn = (req, res, next) => {
    res.render('auth/signin');
};

authCtrl.signIn = passport.authenticate('local.signin', {
    successRedirect: '/profile',
    failureRedirect: '/signin',
    failureFlash: true
});

authCtrl.renderChange = (req, res, next) => {
    res.render('auth/change');
};

authCtrl.ChangePass = passport.authenticate('local.change', {
    successRedirect: '/signin',
    failureRedirect: '/change',
    failureFlash: true
});

authCtrl.renderRecover = (req, res, next) => {
    res.render('auth/recover');
};

authCtrl.recoPass = passport.authenticate('local.recover', {
    successRedirect: '/signin',
    failureRedirect: '/recover',
    failureFlash: true
});


authCtrl.logout = (req, res, next) => {
    req.logOut();
    res.redirect('/');
};

module.exports = authCtrl;