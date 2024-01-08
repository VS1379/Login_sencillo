const user = require("../models/User");
const bcrypt = require("bcryptjs");
const session = require("express-session");
module.exports = loginController = {
  login: (req, res) => {
    res.render("login");
  },

  loginCheck: (req, res) => {
    let userToLogin = user.findOne("../db/users.json", req.body.email);
    if (user.findOne("../db/users.json", req.body.email)) {
      if (bcrypt.compareSync(req.body.password, userToLogin.password)) {
        delete userToLogin.password;
        req.session.userLogued = userToLogin;
        if (req.body.rememberme) {
          res.cookie("userEmail", req.body.email, { maxAge: 600000 });
        }
        return res.redirect("/index");
      }
      console.log(bcrypt.compareSync(req.body.password, userToLogin.password));
      res.send("Contraseña Incorrecta");
    }
  },
};
