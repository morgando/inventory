var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var ItemSchema = new Schema(
{
    name: {type: String, required: true},
    description: {type: String, required: false},
    quantity: {type: Number, required: true, min: 0},
    category: {type: Schema.Types.ObjectId, ref: 'Category', required: true}
});

module.exports = mongoose.model('Item', ItemSchema)