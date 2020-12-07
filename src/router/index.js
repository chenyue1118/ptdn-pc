import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import Layout from '@/views/layout/index.vue'
import Label from '@/views/layout/label.vue'
// import Label from '@/layout/label.vue'
import { getToken } from '@/utils/auth.js'

Vue.use(VueRouter)

/*
 * hasShow: 一级路由是否展示，默认不展示
 * navShow: 下属一级只有一个菜单  直接显示名称
 * hidden: 下属一级只有一个菜单   判断menu 的 active
 */

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  }, {
    path: '/',
    name: 'index',
    redirect: '/path1'
  }, {
    path: '/path1',
    name: 'path1',
    meta: {
      title: '业务中心',
      hasShow: true
    },
    redirect: '/path1/child1',
    component: Layout,
    children: [
      {
        path: 'child1',
        meta: {
          title: '车场管理',
          navShow: true
        },
        redirect: '/path1/child1/child1-1',
        component: Label,
        children: [
          {
            path: 'child1-1',
            name: 'child1-1',
            meta: {
              title: '我的车场'
            },
            component: () => import('@/views/test/child1-1.vue')
          }, {
            path: 'child1-2',
            name: 'child1-2',
            meta: {
              title: '项目管理'
            },
            component: () => import('@/views/test/child1-2.vue')
          }
        ]
      }, {
        path: 'child2',
        meta: {
          title: '机构管理',
          navShow: false
        },
        redirect: '/path1/child2/child2-1',
        component: Label,
        children: [
          {
            path: 'child2-1',
            name: 'child2-2',
            meta: {
              title: '页面1-页面2-子页面1',
              hidden: true,
              activeMenu: '/path1/child2'
            },
            component: () => import('@/views/test/child1-1.vue')
          }
        ]
      }
    ]
  }, {
    path: '/path2',
    name: 'path2',
    meta: {
      title: '运营中心',
      hasShow: true
    },
    component: Layout,
    children: [
      {
        path: 'child2',
        component: Label,
        children: [
          {
            path: 'child2-1',
            name: 'child2-1',
            meta: {
              title: '商户管理'
            },
            component: () => import('@/views/test/child1-1.vue')
          }
        ]
      }
    ]
  }, {
    path: '/account-center',
    name: 'accountCenter',
    meta: {
      title: '账户中心',
      hasShow: true
    },
    redirect: '/account-center/account-manage',
    component: Layout,
    children: [
      {
        path: 'account-manage',
        meta: {
          title: '账户管理',
          navShow: false
        },
        redirect: '/account-center/account-manage/index',
        component: Label,
        children: [
          {
            path: 'index',
            name: 'accountManage',
            meta: {
              title: '账户管理列表',
              hidden: true,
              activeMenu: '/account-center/account-manage'
            },
            component: () => import('@/views/account-center/account-manage/index.vue')
          }
        ]
      }, {
        path: 'personal',
        meta: {
          title: '个人中心',
          navShow: true
        },
        redirect: '/account-center/personal/user-info',
        component: Label,
        children: [
          {
            path: 'user-info',
            name: 'userInfo',
            meta: {
              title: '个人信息'
            },
            component: () => import('@/views/test/child1-1.vue')
          }, {
            path: 'edit-pass',
            name: 'ediaPass',
            meta: {
              title: '修改密码'
            },
            component: () => import('@/views/test/child1-1.vue')
          }
        ]
      }
    ]
  }
]

// const Domain = ['login', 'test', 'child1-1', 'child1-2', 'child1-3', 'child2-1', 'child2-2']

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  // 路由跳转后，滚动条回到顶部
  scrollBehavior: ({ savedPosition }) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes
})

router.beforeEach((to, from, next) => {
  // Start progress bar
  NProgress.start()
  const TOKEN = getToken()
  // if (!TOKEN && !Domain.includes(to.name)) {
  if (TOKEN) {
    next({
      name: 'login'
    })
  } else {
    next()
  }
})

router.afterEach(() => {
  // Finish progress bar
  NProgress.done()

  // set page title
  // document.title = `${TITLE}-${to.meta.title || '' }`
})

export default router
