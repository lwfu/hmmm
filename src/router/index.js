import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录页'
    }
  },

  {
    path: '/',
    component: Layout,
    redirect: '/my',
    children: [
      {
        path: 'company',
        name: 'company',
        component: () => import('@/views/company/index.vue'),
        meta: {
          title: '公司'
        }
      },

      {
        path: 'question',
        name: 'question',
        component: () => import('@/views/question/index.vue'),
        meta: {
          title: '刷题'
        }
      },
      {
        path: 'find',
        name: 'find',
        component: () => import('@/views/find/index.vue'),
        meta: {
          title: '发现'
        }
      },
      {
        path: 'findlist',
        name: 'findlist',
        component: () => import('@/views/find/components/FindList.vue'),
        meta: {
          title: '发现列表',
          noTabbar: true
        }
      },
      {
        path: 'sharelist',
        name: 'sharelist',
        component: () => import('@/views/find/components/ShareList.vue'),
        meta: {
          title: '分享列表',
          noTabbar: true
        }
      },
      {
        path: 'sharedetail/:id',
        name: 'sharedetail',
        component: () => import('@/views/find/components/ShareDetail.vue'),
        meta: {
          title: '面经详情',
          noTabbar: true
        }
      },
      {
        path: 'technic/:id',
        name: 'technic',
        component: () => import('@/views/find/components/Technic.vue'),
        meta: {
          title: '面试技巧详情',
          noTabbar: true
        }
      },
      {
        path: 'marketdata',
        name: 'marketdata',
        component: () => import('@/views/find/components/MarketDate.vue'),
        meta: {
          title: '市场数据',
          noTabbar: true
        }
      },
      {
        path: 'sharesearch',
        name: 'sharesearch',
        component: () => import('@/views/find/components/ShareSearch.vue'),
        meta: {
          title: '面经热搜',
          noTabbar: true
        }
      },
      {
        path: 'technicsearch',
        name: 'technicsearch',
        component: () => import('@/views/find/components/TechnicSearch.vue'),
        meta: {
          title: '面试技巧搜索',
          noTabbar: true
        }
      },
      {
        path: 'my',
        name: 'my',
        component: () => import('@/views/my/index.vue'),
        meta: {
          title: '我的'
        }
      },
      {
        path: 'edit',
        // 路由懒加载
        component: () => import('../views/my/edit.vue'),
        meta: {
          title: '修改信息',
          noTabbar: true
        }
      },
      {
        path: 'photo',
        // 路由懒加载
        component: () => import('../views/my/photo.vue'),
        meta: {
          title: '修改头像',
          noTabbar: true
        }
      }
    ]
  },

  {
    path: '/interview/:questionId/:city',
    name: 'Interview',
    component: () => import('@/views/interview/index.vue'),
    meta: {
      title: '模拟面试'
    }
  },
  
  {
    path: '/details',
    name: 'details',
    component: () => import('@/views/company/compoents/details.vue'),
    meta: {
      title: '公司详情'
    }
  }
]

const router = new VueRouter({
  routes
})

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}

export default router
