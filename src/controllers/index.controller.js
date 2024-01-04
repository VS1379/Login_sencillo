const { validationResult } = require("express-validator");

module.exports = indexController = {
  login: (req, res) => {
    res.render("login");
  },
  register: (req, res) => {
    res.render("register");
  },
  registerPost: (req, res) => {
    let errors = validationResult(req);
    if (errors) {
      errors = errors.mapped();
      return res.render("register", { errors });
    }
    res.send("todo ok!");
  },
};
