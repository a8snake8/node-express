const express = require('express')

const app = express()

app.use(express.json()) // 中间件
app.use(require('cors')()) // 跨域
app.use('/uploads', express.static(__dirname + '/uploads')) // 静态文件托管（可以通过文件夹的路径访问图片）

require('./routes/admin')(app) //引入后台admin的api
require('./plugins/db')(app) // 链接数据库

app.listen(3000, () => {
  console.log('http://localhost:3000')
})