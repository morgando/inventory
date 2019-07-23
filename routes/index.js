var express = require('express');
var router = express.Router();

categs = [
    {
        name: 'bob',
        description: 'blah',
        quantity: 5
    },
    {
        name: 'sue',
        description: 'bleh',
        quantity: 1
    }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Inventory', categories: categs });
});

module.exports = router;
