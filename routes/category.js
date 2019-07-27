var express = require('express');
var router = express.Router();

let category_controller = require('../controllers/categoryController');


router.get('/', category_controller.item_list)

module.exports = router;
