import VueRouter from 'vue-router'
import Vue from 'vue'

// 首页
import Home from '@/views/home/Index.vue'
// 项目
import Project from '@/views/project/Index.vue'
// 留言
import Talk from '@/views/talk/Index.vue'
// 个人
import Person from '@/views/person/Index.vue'

Vue.use(VueRouter)

const routes = [{
  path: "/",
  component: Home
}, {
  path: "/project",
  component: Project
}, {
  path: "/talk",
  component: Talk
}, {
  path: "/person",
  component: Person
}]

const router = new VueRouter({
  routes,
  base: process.env.BASE_URL,
  //路由模式为hash
  mode: "hash"
})

export default router