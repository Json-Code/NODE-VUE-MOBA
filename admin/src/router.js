import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
import CategoryEdit from './views/CategoryEdit.vue'
import CategoryList from './views/CategoryList.vue'

import ItemEdit from './views/ItemEdit.vue'
import ItemList from './views/ItemList.vue'

import HeroEdit from './views/HeroEdit.vue'
import HeroList from './views/HeroList.vue'

import ArticleEdit from './views/ArticleEdit.vue'
import ArticleList from './views/ArticleList.vue'

import AdEdit from './views/AdEdit.vue'
import AdList from './views/AdList.vue'

import AdminUserEdit from './views/AdminUserEdit.vue'
import AdminUserList from './views/AdminUserList .vue'

import Login from './views/Login.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path:  '/login',
      name: 'Login',
      component: Login,
      // 设置元信息
      meta: {isPublic: true}
    },
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        //分类管理
        {
          path: '/categories/create',
          component: CategoryEdit
        },
        {
          path: '/categories/list',
          component: CategoryList
        },
        {
          path: '/categories/edit/:id',
          props: true,
          component: CategoryEdit
        },
        //物品管理
        {
          path: '/items/create',
          component: ItemEdit
        },
        {
          path: '/items/list',
          component: ItemList
        },
        {
          path: '/items/edit/:id',
          props: true,
          component: ItemEdit
        },
        //英雄管理
        {
          path: '/heroes/create',
          component: HeroEdit
        },
        {
          path: '/heroes/list',
          component: HeroList
        },
        {
          path: '/heroes/edit/:id',
          props: true,
          component: HeroEdit
        },
        // 文章管理
        {
          path: '/articles/create',
          component: ArticleEdit
        },
        {
          path: '/articles/list',
          component: ArticleList
        },
        {
          path: '/articles/edit/:id',
          props: true,
          component: ArticleEdit
        },
        // 文章管理
        {
          path: '/ads/create',
          component: AdEdit
        },
        {
          path: '/ads/list',
          component: AdList
        },
        {
          path: '/ads/edit/:id',
          props: true,
          component: AdEdit
        },
        // 管理员账号管理
        {
          path: '/admin_users/create',
          component: AdminUserEdit
        },
        {
          path: '/admin_users/list',
          component: AdminUserList
        },
        {
          path: '/admin_users/edit/:id',
          props: true,
          component: AdminUserEdit
        }
      ]
    }
  ]
})

// 布置路由守卫
router.beforeEach((to, form, next) => {
  if (!to.meta.isPublic && !localStorage.token) {
    return next('/login')
  }
  next()
})
export default router
