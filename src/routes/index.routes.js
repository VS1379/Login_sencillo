const express = require("express");
const indexController = require("../controllers/index.controller");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/", authMiddleware, indexController.index);
router.get("/logout", authMiddleware, indexController.logout);

module.exports = router;
