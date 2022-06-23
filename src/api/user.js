import request from '@/utils/request'

// 接口：获取验证码
export const auCode = data => {
  return request({
    url: '/au/code',
    method: 'POST',
    data,
    noToken: true
  })
}

// 接口：用户登录
export const auLogin = data => {
  return request({
    url: '/au/login',
    method: 'POST',
    data,
    noToken: true
  })
}

// 接口：用户信息
export const auInfo = () => {
  return request({
    url: '/au/info'
  })
}

// 接口：修改用户信息
export const auEdit = data => {
  return request({
    url: '/au/login',
    method: 'POST',
    data
  })
}

// 接口：文件上传
export const upLoad = data => {
  return request({
    url: '/upload',
    method: 'POST',
    data
  })
}
