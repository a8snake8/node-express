// 分类的模型
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: { type: String },
  ads: [{
    title: { type: String },
    image: { type: String },
    url: { type: String }
  }],
})
module.exports = mongoose.model('Ads', schema)