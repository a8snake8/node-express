const { schema } = require('../../models/Item')

module.exports = app => {
  const router = require('express').Router()
  const mongoose = require('mongoose')

  app.get('/web/api/catlist', async (req, res) => {
    console.log(req)
    const cat = await mongoose.model('Category').find().lean().limit(10)
    res.send(cat)
  })

  app.use('/web/api', router)
}