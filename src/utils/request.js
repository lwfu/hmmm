import axios from 'axios'

const request = axios.create({
  baseURL: 'http://106.55.138.21:1337'
  // timeout: 5000
})

// 请求拦截器
request.interceptors.request.use(config => {
  return config
}, err => {
  return Promise.reject(err)
})

// 响应拦截器
request.interceptors.response.use(res => {
  return res.data
}, err => {
  return Promise.reject(err)
})

export default request
