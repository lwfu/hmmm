import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/styles/base.scss'   // 全局样式
import '@/plugins/vant'       // vant组件
import '@/permission'         // 路由守卫
import '@/assets/iconfont/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
