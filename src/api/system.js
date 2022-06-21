import request from '@/utils/request'

// 接口：消息列表
export const systemMessages = () => {
  return request({
    url: '/system-messages'
  })
}

// 接口：设置已读
export const systemMessagesRead = data => {
  return request({
    url: '/system-messages/read',
    method: 'POST',
    data
  })
}
