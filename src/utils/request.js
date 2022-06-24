import axios from 'axios'
import store from '@/store'
import { Toast } from 'vant'

const request = axios.create({
  baseURL: 'http://hmmm.zllhyy.cn/'
})

let cancelFns = []
let toast;
let err;
// 请求拦截器
request.interceptors.request.use(config => {
  if (!config.noToken) config.headers.authorization = `Bearer ${store.getters.token}`

  toast = Toast.loading({
    duration: 0,
    message: '加载中...',
    forbidClick: true,
  });

  cancelFns = cancelFns.filter(i => {
    // 避免重复请求，判断一下这次的请求是否和上次请求相同
    if (i.url === config.url && i.method === config.method) {
      // 执行取消方法
      i.fn()
      return false
    }
    return true
  })

  // 为每次请求配置取消方法cancelToken
  if (config.needCancel) {
    config.cancelToken = new axios.CancelToken(cancelFn => {
      cancelFns.push({
        url: config.url,
        method: config.method,
        fn: cancelFn
      })
    })
  }
  err = false
  return config
}, err => {
  return Promise.reject(err)
})

// 响应拦截器
request.interceptors.response.use(async res => {
  const data = res.data
  toast.clear()
  if (data?.code === 401) {
    if (err) return
    err = true
    await store.dispatch('logout', '/login?backUrl=' + location.href.split('#')[1])
    Toast.fail('登录状态已过期，请重新登录！')
    return 
  }
  return res.data
}, err => {
  return Promise.reject(err)
})

export default request
