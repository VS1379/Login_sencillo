const { check } = require("express-validator");

const validationResult = [
  check("name").notEmpty().withMessage("NOMBRE VACIO"),
  check("lastName").notEmpty().withMessage("APELLIDO VACIO"),
  check("email").notEmpty().withMessage("EMAIL VACIO"),
  check("password").notEmpty().withMessage("CONTRASEÑA VACIA"),
];

module.exports = validationResult;
