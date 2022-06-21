import request from '@/utils/request'

// 接口：新增企业评论
export const addComments = data => {
  return request({
    url: '/comments',
    method: 'POST',
    data
  })
}

// 接口：面经分享评论点赞
export const commentsStar = data => {
  return request({
    url: '/comments',
    method: 'POST',
    data
  })
}