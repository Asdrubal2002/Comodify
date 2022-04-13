const userCtrl = {};

userCtrl.renderUserProfile = (req, res, next) => {
  res.render('profile');
}

userCtrl.renderProfile = (req, res, next) => {
  res.render('politics');
}

module.exports = userCtrl;