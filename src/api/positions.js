import request from '@/utils/request'

export const positionDetail = id => {
  return request({
    url: '/positions/' + id,
  })
}
