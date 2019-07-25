var express = require('express');
var router = express.Router();

let category_controller = require('../controllers/categoryController');

/* GET home page. */
router.get('/', category_controller.category_list);

module.exports = router;
