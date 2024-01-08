const express = require("express");
const loginController = require("../controllers/login.controller");
const guessMiddleware = require("../middlewares/guestMiddleware");

const router = express.Router();

router.get("/", guessMiddleware,loginController.login);
router.post("/", guessMiddleware,loginController.loginCheck);

module.exports = router;
