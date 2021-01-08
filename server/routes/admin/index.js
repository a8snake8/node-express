// 后台的admin的api配置
module.exports = app => {
  const express = require('express')
  const jwt = require('jsonwebtoken')
  const AdminUser = require('../../models/Userinfo')
  const assert = require('http-assert')

  //下面为整合的公共资源路由
  const router = express.Router({
    mergeParams: true // 支持合并路由
  })

  // 新增
  router.post('/', async (req, res) => {
    const model = await req.Model.create(req.body)
    res.send(model)
  })
  // 查询
  router.get('/', async (req, res) => {
    const queryOptions = {}
    if (req.Model.modelName === 'Category') {
      queryOptions.populate = 'parent'
    }
    const items = await req.Model.find().setOptions(queryOptions).limit()
    res.send(items)
  })
  // 条件查询
  router.get('/:id', async (req, res) => {
    const items = await req.Model.findById(req.params.id)
    res.send(items)
  })
  // 编辑
  router.put('/:id', async (req, res) => {
    const items = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(items)
  })
  // 删除
  router.delete('/:id', async (req, res) => {
    const items = await req.Model.findByIdAndDelete(req.params.id)
    res.send(items)
  })

  // 登录校验中间件
  const authMiddleware = require('../../middleware/auth')
  // 公共路由资源中间件
  const resourceMiddleware = require('../../middleware/resource')
  // 合并参数让api方法可以获取
  app.use('/admin/api/rest/:resource', authMiddleware(), resourceMiddleware(), router)

  // 其他路由
  const multer = require('multer')
  const upload = multer({ dest: __dirname + '/../../uploads' }) //当前文件夹
  app.post('/admin/api/upload', authMiddleware(), upload.single('file'), async (req, res) => {
    const file = req.file
    file.url = `http://localhost:3000/uploads/${file.filename}`
    res.send(file)
  })

  // 登录路由
  app.post('/admin/api/login', async (req, res) => {
    const { username, password } = req.body
    // 第一步 根据用户名查找用户
    const user = await AdminUser.findOne({ username }).select('+password')
    assert(user, 422, '用户不存在')
    // 第二步 校验密码
    const isValid = require('bcrypt').compareSync(password, user.password)
    assert(isValid, 422, '密码错误')
    // 第三步 返回token
    const token = jwt.sign({ id: user._id }, app.get('secret'))
    res.send({ token })
  })

  // 错误处理函数
  app.use(async (err, req, res, next) => {
    res.status(err.statusCode || 500).send({
      message: err.message
    })
  })

}