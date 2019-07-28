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

    Item.findOne({_id: req.query.item}, 'name description _id')
    .exec(function (err, item_details) {
        if(err) {
            console.log('error ' + err);
            return;
        }


        res.render('item', {item: item_details})
    });

}