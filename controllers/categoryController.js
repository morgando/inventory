let Category = require('../models/category')
let Item = require('../models/item')
let async = require('async')


exports.search_category = function(req, res) {
    async.series({
            categories: function(callback) {

                Category.find({}, 'name id')
                .exec(function (err, list_categories) {

                    return callback(err, list_categories);
                });

            },
            items: function(callback) {

                if(req.query.category) {
                    Item.find({category: req.query.category}, 'name id')
                    .exec(function (err, list_items) {
                        return callback(err, list_items);
                    }); 
                } else {

                    return callback(null, []);
                }                
            }
        }, 
        //callback
        function(err, results) {

            if(err) {
                console.log('there is error')
                console.log(err);
            }

            res.render('index', { data: results });
        }
    );

};

exports.item_list = function(req, res) {

    category = JSON.parse(req.query.category);



    async.parallel({
        selected_category: function(callback) {
            // Category.find({id: req.query.category}, 'name')
            // .exec(function (err, category) {
            //     return callback(err, category);


            // });

            
            console.log(category.name);
            return callback(null, category.name)
        },
        items: function(callback) {
            console.log(category._id)
            Item.find({category: category._id}, 'name description id')
            .exec(function (err, list_items) {
                console.log(list_items)
                return callback(err, list_items)
            });
        }
    },
    function(err, results) {
        console.log(results);
        if(err) {
            console.log('error! 1! 1: ' + err);
        }
        res.render('category', {data: results});
    });

}

// exports.category_list = function(req, res) {
//     console.log('got here')
//     Category.find({}, 'name id')
//     .exec(function (err, list_categories) {
//         if(err) {
//             console.log(err);
//             return;
//         }
//         res.render('category', {selected_category: req.query.category, items: list_items, categories: list_categories});
//     })
// }



// exports.search_results = function(req, res) {
//     Item.find({category: req.body.category}, 'name')
//     .exec(function (err, list_items) {

//     })
// }