const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    title: {type: String},
    categories: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Category'}],
    body: {type: String}
}, {
    // 自动生成和管理createTime和updateTime字段
    timestamps: true
})

// 第三个参数省略了 默认为第一个参数 Article 的复数形式 articles
module.exports = mongoose.model('Article', schema)