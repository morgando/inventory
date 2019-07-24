

exports.category_list = function(req, res) {
    Category.find({}, 'name ObjectId')
    .populate('name')
    .exec(function (err, list_categories) {
        if(err) { return next(err); }

        res.render('index', {categories: list_categories});
    });
};

