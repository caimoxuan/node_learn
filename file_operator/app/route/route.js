var express = require("express");
var router = express.Router();

var $ = require("../controller/fileController");


router.get('/show', $.show);
router.get("/download", $.download);
router.get("/showDrictory", $.drictory);

module.exports = router;
