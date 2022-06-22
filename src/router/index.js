import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/my'
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue')
  },

  {
    path: '/',
    component: Layout,
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
        path: 'my',
        name: 'my',
        component: () => import('@/views/my/index.vue'),
        meta: {
          title: '我的'
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
