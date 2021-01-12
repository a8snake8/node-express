import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/views/main/Main.vue'

// 新闻分类
import CategoriesCreate from '@/views/categories/Create.vue'
import CategoriesList from '@/views/categories/List.vue'

//物品分类
import ItemsCreate from '@/views/items/Create.vue'
import ItemsList from '@/views/items/List.vue'

//英雄分类
import HeroesCreate from '@/views/heroes/Create.vue'
import HeroesList from '@/views/heroes/List.vue'

//文章分类
import ArticalsCreate from '@/views/articals/Create.vue'
import ArticalsList from '@/views/articals/List.vue'

//广告分类
import AdsCreate from '@/views/ads/Create.vue'
import AdsList from '@/views/ads/List.vue'

//系统管理
import UsersCreate from '@/views/users/Create.vue'
import UsersList from '@/views/users/List.vue'

//登录
import Login from '@/views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Login',
    name: 'login',
    component: Login,
    meta: { isPublic: true }
  },
  {
    path: '/',
    component: Main,
    children: [{
      path: '/categories/create',
      component: CategoriesCreate,
    }, {
      path: '/categories/List',
      component: CategoriesList,
    }, {
      path: '/categories/edite/:id',
      component: CategoriesCreate,
      props: true
    }, {
      path: '/items/create',
      component: ItemsCreate,
    }, {
      path: '/items/edite/:id',
      component: ItemsCreate,
      props: true
    }, {
      path: '/items/List',
      component: ItemsList,
    }, {
      path: '/heroes/create',
      component: HeroesCreate,
    }, {
      path: '/heroes/edite/:id',
      component: HeroesCreate,
      props: true
    }, {
      path: '/heroes/List',
      component: HeroesList,
    }, {
      path: '/articals/create',
      component: ArticalsCreate,
    }, {
      path: '/articals/edite/:id',
      component: ArticalsCreate,
      props: true
    }, {
      path: '/articals/List',
      component: ArticalsList,
    }, {
      path: '/ads/create',
      component: AdsCreate,
    }, {
      path: '/ads/edite/:id',
      component: AdsCreate,
      props: true
    }, {
      path: '/ads/List',
      component: AdsList,
    }, {
      path: '/users/create',
      component: UsersCreate,
    }, {
      path: '/users/edite/:id',
      component: UsersCreate,
      props: true
    }, {
      path: '/users/List',
      component: UsersList,
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  const token = global.window.localStorage.pro__ACCESS_TOKEN
  if (!to.meta.isPublic && !token) {
    return next('/Login')
  }
  next()
})

export default router
