module.exports = options => {

  const jwt = require('jsonwebtoken')
  const AdminUser = require('../models/Userinfo')
  const assert = require('http-assert')

  return async (req, res, next) => {
    const token = String(req.headers['x-access-token'] || '').split(' ').pop() //获取请求头里面的token参数
    assert(token, 401, '请提供jwt token')
    const { id } = jwt.verify(token, req.app.get('secret')) //用于和服务端的token做对比查出用户id
    assert(id, 401, '无效jwt token')
    req.user = await AdminUser.findById(id)
    assert(req.user, 401, '请先登录')
    await next()
  }
}