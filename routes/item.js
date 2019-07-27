var express = require('express');
var router = express.Router();

let item_controller = require('../controllers/itemController');


router.get('/', category_controller.item_detail)

module.exports = router;
