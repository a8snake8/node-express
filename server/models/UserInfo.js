// 分类的模型
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  username: { type: String },
  password: {
    type: String,
    select: false,
    set (val) {
      return require('bcrypt').hashSync(val, 10) // 密码添加散列加密
    }
  },
})
module.exports = mongoose.model('Login', schema)