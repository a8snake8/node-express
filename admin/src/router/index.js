import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/main/Main.vue'
import CategoriesCreate from '../views/categories/Create.vue'
import CategoriesList from '../views/categories/List.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [{
      path: '/categories/create',
      name: 'categories/create',
      component: CategoriesCreate,
    }, {
      path: '/categories/List',
      name: 'categories/List',
      component: CategoriesList,
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
