import request from '@/utils/request'

// 接口：模拟面试筛选条件
export const interviewFilters = () => {
  return request({
    url: '/interview/filters'
  })
}

// 接口：获取模拟面试题
export const interviewQuestions = params => {
  return request({
    url: '/interview/questions',
    params
  })
}
