const  mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {type: String},
    parent: {type: mongoose.SchemaTypes.ObjectId, ref: 'Category'}
})

// virtual虚拟属性
schema.virtual('children', {
    // 内键
    localField: '_id',
    // 外键
    foreignField: 'parent',
    justOne: false,
    ref: 'Category'
})
schema.virtual('newsList', {
    // 内键
    localField: '_id',
    // 外键
    foreignField: 'categories',
    justOne: false,
    ref: 'Article'
})

module.exports = mongoose.model('Category', schema)