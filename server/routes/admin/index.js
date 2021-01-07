// 后台的admin的api配置
module.exports = app => {
  const express = require('express')

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
    console.log(req)
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
  // 合并参数让api方法可以获取
  app.use('/admin/api/rest/:resource', async (req, res, next) => {
    const modelName = require('inflection').classify(req.params.resource)
    req.Model = require(`../../models/${modelName}`)
    next()
  }, router)


  // 其他路由
  const multer = require('multer')
  const upload = multer({ dest: __dirname + '/../../uploads' }) //当前文件夹
  app.post('/admin/api/upload', upload.single('file'), async (req, res) => {
    const file = req.file
    file.url = `http://localhost:3000/uploads/${file.filename}`
    res.send(file)
  })

}