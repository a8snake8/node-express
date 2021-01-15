const express = require('express')

const app = express()

app.set('secret', 'asd13a1sd3as4d5131') // 设置token密钥，这里应该放到环境变量中去
app.use(express.json()) // 中间件
app.use(require('cors')()) // 跨域
require('require-all')(__dirname + '/models')// 引用文件夹快捷方式
app.use('/uploads', express.static(__dirname + '/uploads')) // 静态文件托管（可以通过文件夹的路径访问图片）
app.use('/admin', express.static(__dirname + '/admin')) // 静态文件托管（可以通过文件夹的路径访问后台）
app.use('/web', express.static(__dirname + '/web')) // 静态文件托管（可以通过文件夹的路径访问后台）

require('./routes/admin')(app) //引入后台admin的api
require('./routes/web')(app) //引入后台web的api
require('./plugins/db')(app) // 链接数据库

app.listen(3000, () => {
  console.log('http://localhost:3000')
})