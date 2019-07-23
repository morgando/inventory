var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var CategorySchema = new Schema(
{
    name: {type: String, required: true},
    description: {type: String, required: false},
    quantity: {type: Number, required: true, min: 0},
    path_to_photo: {type: String, required: false}

});

module.exports = mongoose.model('Category', CategorySchema)