module.exports = app => {
  const router = require('express').Router()
  const mongoose = require('mongoose')

  app.get('/web/api/catlist', async (req, res) => {
    const cat = await mongoose.model('Category').find().lean().limit(10)
    res.send(cat)
  })

  app.post('/web/api/artical', async (req, res) => {

    const { cate, page, pageSize, name } = req.body
    const currentPage = parseInt(page) || 1
    const pagesize = parseInt(pageSize) || 2;
    let params = {
      //条件查询参数
      name: { $regex: name, $options: '$i' },
      types: { $in: cate }
    };
    let mp = {};
    for (let i in params) {
      if (params[i] !== undefined) {
        mp[i] = params[i]
      }
    }
    const queryOptions = {
      limit: pagesize,
      skip: (currentPage - 1) * pagesize
    }
    const art = await mongoose.model('Artical').find({ ...mp }).setOptions(queryOptions).lean()
    res.send(art)
  })

  app.use('/web/api', router)
}