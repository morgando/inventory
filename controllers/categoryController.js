let Category = require('../models/category')
let Item = require('../models/item')
let async = require('async')


exports.search_category = function(req, res) {
    async.series({
            categories: function(callback) {
                console.log('inside category count')
                Category.find({}, 'name id')
                .exec(function (err, list_categories) {
                    console.log('done with category count')
                    return callback(err, list_categories);
                });

            },
            items: function(callback) {
                console.log('inside item count')
                console.log(req.query);
                console.log(req.query.category);
                if(req.query.category) {
                    Item.find({category: req.query.category}, 'name')
                    .exec(function (err, list_items) {

                        return callback(err, list_items);
                    }); 
                } else {
                    console.log('im here')
                    return callback([]);
                }                
            }
        }, 
        //callback
        function(err, results) {
            console.log('hellloooo')
            if(err) {
                console.log('there is error')
                console.log(err);
            }
            console.log('rendering now!')
            console.log(results);
            console.log(results.items == true);
            res.render('index', { data: results });
        }
    );

    console.log('-_-')
};

// exports.search_results = function(req, res) {
//     Item.find({category: req.body.category}, 'name')
//     .exec(function (err, list_items) {

//     })
// }