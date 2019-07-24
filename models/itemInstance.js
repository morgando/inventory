var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var ItemInstanceSchema = new Schema(
{
    category: {type: Schema.Types.ObjectId, ref: 'Item', required: true}
});

module.exports = mongoose.model('Item', ItemInstanceSchema)