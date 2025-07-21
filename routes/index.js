const express = require("express");

const router = express.Router();

const indexController = require("../controllers/indexController.js");

router.get('/', indexController.getMsg);
router.post("/new", indexController.postMsg);

module.exports = router;   