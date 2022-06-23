import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

<<<<<<< HEAD
import '@/styles/base.scss' // 全局样式
import '@/plugins/vant' // vant组件
import '@/permission' // 路由守卫
=======
import '@/styles/base.scss'   // 全局样式
import '@/plugins/vant'       // vant组件
import '@/permission'         // 路由守卫
import '@/assets/iconfont/iconfont.css'
>>>>>>> lwf

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
