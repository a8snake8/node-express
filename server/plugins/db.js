// 数据库连接
module.exports = app => {
  const mongoose = require('mongoose')
  mongoose.connect('mongodb://127.0.0.1:27017/node-vue-noba', {
    useNewUrlParser: true
  })

  // require('require-all')(__dirname + '/../models')//引用文件夹快捷方式
}