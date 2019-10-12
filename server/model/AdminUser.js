const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const schema = new mongoose.Schema({
    username: {type: String},
    password: {
        type: String,
        // 查找的时候不返回该字段
        select: false,
        set(val) {
            return bcrypt.hashSync(val, 10)
        }
    }
})
/* schema.pre('save', (next) => {
    bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err)
        console.log('salt===', salt)
        bcrypt.hash(this.password, salt, (err, hash) => {
            if (err) return next(err)
            this.password = hash
            next()
        })
    })
}) */
module.exports = mongoose.model('AdminUser', schema)