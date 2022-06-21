import router from './router'
import store from './store'

// 白名单
const whiteList = ['/login']

router.beforeEach(async(to, from, next) => {
  document.title = to.meta.title ? to.meta.title + ' - 黑马面面' : '黑马面面'
  next()
  // 判断是否登录
  if (store.getters.token) {
    // 判断登录后是否还要访问登录页
    if (to.path === '/login') {
      next('/')
    } else {
      // 判断是否已有用户信息
      if (!store.getters.userInfo) {
        // 获取用户信息
      }
      next()
    }
  } else {
    // 判断没登录的状态下访问的页面是否是白名单页面
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})

router.afterEach((to, from) => {
})
