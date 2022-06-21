import request from '@/utils/request'

// 接口：面试技巧列表
export const articlesTechnic = params => {
  return request({
    url: '/articles/technic',
    params
  })
}

// 接口：面试技巧详情
export const articlesTechnicDetail = id => {
  return request({
    url: '/articles/technic/' + id
  })
}

// 接口：面试技巧热搜
export const articlesTechnicTopSearch = () => {
  return request({
    url: '/articles/technicTopSearch'
  })
}

// 接口：面经列表
export const articlesShare = params => {
  return request({
    url: '/articles/share',
    params
  })
}

// 接口：面经详情
export const articlesShareDetail = id => {
  return request({
    url: '/articles/share' + id
  })
}

// 接口：面经热搜
export const articlesShareTopSearch = () => {
  return request({
    url: '/articles/shareTopSearch'
  })
}
// 接口：面经评论
export const articlesComments = params => {
  return request({
    url: '/articles/comments' + params.id,
    params
  })
}
// 接口：发表评论
export const setarticlesComments = data => {
  return request({
    url: '/articles/comments',
    method: 'POST',
    data
  })
}

// 接口：点赞文章
export const articlesStar = data => {
  return request({
    url: '/articles/star',
    method: 'POST',
    data
  })
}

// 接口：收藏面经
export const articlesCollect = data => {
  return request({
    url: '/articles/collect',
    method: 'POST',
    data
  })
}
// 接口：合并历史
export const articlesMergeHistory = data => {
  return request({
    url: '/articles/mergeHistory',
    method: 'POST',
    data
  })
}