import request from '@/utils/request'

// 接口：企业试题筛选条件
export const questionsCompanyFilters = params => {
  return request({
    url: '/questions/companyFilters/' + params.id,
    params
  })
}

// 接口：面试题数据
export const questionsCompany = params => {
  return request({
    url: '/questions/company/' + params.id,
    params
  })
}

// 接口：提交试题
export const questionsSubmit = params => {
  return request({
    url: '/questions/submit',
    params
  })
}

// 接口：面试题详情
export const questionsDetails = id => {
  return request({
    url: '/questions/' + id
  })
}

// 接口：收藏试题
export const questionsCollect = data => {
  return request({
    url: '/questions/collect',
    method: 'POST',
    data
  })
}

// 接口：试题评论
export const questionsComment = data => {
  return request({
    url: '/questions/comment',
    method: 'POST',
    data
  })
}
