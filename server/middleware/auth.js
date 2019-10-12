module.exports = options => {
    const jwt = require('jsonwebtoken')
    const AdminUser = require('../model/AdminUser')
    const assert = require('http-assert')
    return async (req, res, next) => {
        const token = String(req.headers.authorization || '').split(' ').pop()
        assert(token, 401, '请先提供jwt token')
        // req中有app对象
        const { _id } = jwt.verify(token, req.app.get('secret'))
        assert(_id, 401, '无效的token')
        req.user = await AdminUser.findById(_id)
        assert(req.user, 401, '请先登录')
        await next()
    }
}