module.exports = app => {
    const mongoose = require('mongoose')

    mongoose.connect('mongodb://127.0.0.1:27017/node-vue-moba', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    // 使用require-all工具来引入所有Models来防止报错
    require('require-all')(__dirname + '/../model')
}