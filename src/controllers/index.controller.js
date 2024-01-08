const session = require("express-session");
module.exports = indexController = {
  index: (req, res) => {
    let user = req.session.userLogued;
    res.render("index", { user });
  },
  logout: (req, res) => {
    req.session.destroy();
    res.clearCookie("userEmail")
    return res.redirect("/login");
  },
};
