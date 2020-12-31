// 后台的admin的api配置
module.exports = app => {
  const express = require('express')
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
    const items = await req.Model.find().populate('parent').limit()
    res.send(items)
  })
  // 查询
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
  app.use('/admin/api/rest/:resource', async (req, res, next) => {
    const modelName = require('inflection').classify(req.params.resource)
    req.Model = require(`../../models/${modelName}`)
    next()
  }, router)
}