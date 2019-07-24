var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var ItemSchema = new Schema(
{
    quantity: {type: Number, required: true, min: 0},
    category: {type: Schema.Types.ObjectId, ref: 'Category', required: true}
});

module.exports = mongoose.model('Item', ItemSchema)