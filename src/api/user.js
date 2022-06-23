import request from '@/utils/request'
import store from '../store/index'
// 接口：获取验证码
export const auCode = data => {
  return request({
    url: '/au/code',
    method: 'POST',
    data,
    needToken: false
  })
}

// 接口：用户登录
export const auLogin = data => {
  return request({
    url: '/au/login',
    method: 'POST',
    data,
    needToken: false
  })
}

// 接口：用户信息
export const auInfo = () => {
  return request({
    url: '/au/login'
  })
}

// 接口：修改用户信息
export const auEdit = data => {
  return request({
    url: '/au/edit',
    method: 'POST',
    data,
    headers: {
      authorization: 'Bearer ' + store.state.token
    }
  })
}

// 接口：文件上传
export const upLoad = avatar => {
  const _data = new FormData()
  _data.append('files', avatar)
  return request({
    url: '/upload',
    method: 'POST',
    data: _data,
    headers: {
      authorization: 'Bearer ' + store.state.token
    }
  })
}
