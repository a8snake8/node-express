// 分类的模型
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: { type: String },
  types: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category', require: true }],
  body: { type: String }
})
module.exports = mongoose.model('Artical', schema)