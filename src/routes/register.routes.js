const express = require("express");
const registerController = require("../controllers/register.controller");
const registerValidation = require("../middlewares/registerValidation");

const router = express.Router();

router.get("/", registerController.register);
router.post("/", registerValidation, registerController.registerSave);

router.get("/all", registerController.allRegisted);
router.get("/find", registerController.findRegisted);
router.get("/delet", registerController.deleteRegisted);

module.exports = router;
