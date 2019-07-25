var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var ItemInstanceSchema = new Schema(
{
    item: {type: Schema.Types.ObjectId, ref: 'Item', required: true}
});

module.exports = mongoose.model('ItemInstance', ItemInstanceSchema)