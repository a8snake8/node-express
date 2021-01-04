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

Vue.use(VueRouter)

const routes = [
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
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
