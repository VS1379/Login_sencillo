const express = require("express");
const registerController = require("../controllers/register.controller");
const registerValidation = require("../middlewares/registerValidation");
const guessMiddleware = require("../middlewares/guestMiddleware")

const router = express.Router();

router.get("/", guessMiddleware, registerController.register);
router.post("/", registerValidation, registerController.registerSave);

router.get("/all", guessMiddleware, registerController.allRegisted);
router.get("/find", guessMiddleware, registerController.findRegisted);
router.get("/delet", guessMiddleware, registerController.deleteRegisted);

module.exports = router;
