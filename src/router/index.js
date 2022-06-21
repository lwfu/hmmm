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
