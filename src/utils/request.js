import axios from 'axios'
import store from '@/store'
import { Toast } from 'vant'

const request = axios.create({
<<<<<<< HEAD
  baseURL: 'http://hmmm.zllhyy.cn',
  timeout: 5000
=======
  baseURL: 'http://hmmm.zllhyy.cn'
>>>>>>> lwf
})


let cancelFns = []
let toast;
// 请求拦截器
<<<<<<< HEAD
request.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// 响应拦截器
request.interceptors.response.use(
  res => {
    return res.data
  },
  err => {
    return Promise.reject(err)
  }
)
=======
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
  return config
}, err => {
  return Promise.reject(err)
})

// 响应拦截器
request.interceptors.response.use(res => {
  toast.clear()
  Toast.success({
    message: '加载成功',
    duration: 100
  })
  return res.data
}, err => {
  return Promise.reject(err)
})
>>>>>>> lwf

export default request
