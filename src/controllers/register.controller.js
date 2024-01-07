const { validationResult } = require("express-validator");
const bcriptjs = require("bcryptjs");
const user = require("../models/User");

module.exports = registerController = {
  register: (req, res) => {
    res.render("register");
  },
  registerSave: (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      errors = errors.mapped();
      return res.render("register", { errors });
    }
    try {
      req.body.password = bcriptjs.hashSync(req.body.password, 10);
      user.save("../db/users.json", req.body);
      res.send("todo ok!");
    } catch (error) {
      console.log(error);
    }
  },
  allRegisted: (req, res) => {
    res.send(user.findAll("../db/users.json"));
  },
  findRegisted: (req, res) => {
    try {
      res.send(user.findOne("../db/users.json", "#PabloDelmonte@gmail.com"));
    } catch (error) {
      res.send(error);
    }
  },
  deleteRegisted: (req, res) => {
    try {
      user.delete("../db/users.json", "PabloDelmonte@gmail.com");
    } catch (error) {
      console.log(error);
    }
  },
};
