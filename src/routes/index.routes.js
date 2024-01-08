const express = require("express");
const indexController = require("../controllers/index.controller");
const authMiddleware = require("../middlewares/authMiddleware")
const router = express.Router();

router.get("/", authMiddleware,indexController.index);
router.get("/index", authMiddleware,indexController.index);

router.get("/index/logout", authMiddleware,indexController.logout);

module.exports = router;
