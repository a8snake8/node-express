// 分类的模型
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: { type: String }
})
module.exports = mongoose.model('Category', schema)