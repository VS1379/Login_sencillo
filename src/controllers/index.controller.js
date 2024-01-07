const session = require("express-session");
module.exports = indexController = {
  index: (req, res) => {
    let user = req.session.userLogued;
    console.log(req.session.userLogued);
    res.render("index", { user });
  },
};
