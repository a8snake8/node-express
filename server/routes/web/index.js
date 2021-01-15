module.exports = app => {
  const router = require('express').Router()
  const mongoose = require('mongoose')

  console.log(mongoose.model('Artical'))

  app.get('/web/api/catlist', async (req, res) => {
    const cat = await mongoose.model('Category').find().lean().limit(10)
    res.send(cat)
  })

  app.get('/web/api/artical', async (req, res) => {
    const art = await mongoose.model('Artical').find().populate(['types']).limit()
    res.send(art)
  })

  app.use('/web/api', router)
}