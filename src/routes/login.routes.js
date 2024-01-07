const express = require("express");
const loginController = require("../controllers/login.controller");

const router = express.Router();

router.get("/", loginController.login);
router.post("/", loginController.loginCheck);

module.exports = router;
