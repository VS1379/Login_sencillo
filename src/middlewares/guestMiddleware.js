module.exports = function guessMiddleware(req, res, next) {
  const user = require("../models/User");
  if (req.cookies.userEmail) {
    req.session.userLogued = user.findOne(
      "../db/users.json",
      req.cookies.userEmail
    );
    delete req.session.userLogued.password;
  }

  if (req.session.userLogued) {
    return res.redirect("/index");
  }
  next();
};
