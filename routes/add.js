var express = require('express');
var router = express.Router();


router.get('/category', function(req, res, next) {
  res.render('add-category', { });
});

router.get('/item', function(req, res, next) {
    res.render('add-item', {});
});

module.exports = router;