let Item = require('../models/item')


// exports.item_list = function(req, res) {
//     Category.find({}, 'name ObjectId')
//     .populate('name')
//     .exec(function (err, list_items) {
//         if(err) { return next(err); }

//         res.render('index', {categories: list_categories});
//     });
// };


exports.item_detail = function(req, res) {

    let item = req.query.item;

    res.render('item', {item: item})

}