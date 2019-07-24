var express = require('express');
var router = express.Router();
var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

var select2 = require('select2');

var $ = jQuery = require('jquery')(window);

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
  res.render('index', { title: 'Inventory', categories: categs })
});

module.exports = router;
