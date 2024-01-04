const express = require("express");
const indexController = require("../controllers/index.controller");
const registerValidation = require("../middlewares/registerValidation");

const router = express.Router();

router.get("/login", indexController.login);
router.get("/register", indexController.register);
router.post("/register", registerValidation, indexController.registerPost);

module.exports = router;
