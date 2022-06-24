import router from './router'
import store from './store'
// 白名单
const whiteList = [
  '/login',
  '/company',
  '/find',
  '/details',
  'technic',
  'sharedetail',
  '/findlist',
  '/sharelist'
]

router.beforeEach(async (to, from, next) => {
  to.meta.fromPath = from.path
  document.title = to.meta.title ? to.meta.title + ' - 黑马面面' : '黑马面面'
  // 判断是否登录
  if (store.getters.token) {
    // 判断登录后是否还要访问登录页
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    // 判断没登录的状态下访问的页面是否是白名单页面
    if (whiteList.includes(to.path) || whiteList.includes(to.name)) {
      next()
    } else {
      next('/login?backUrl=' + to.path)
    }
  }
})
