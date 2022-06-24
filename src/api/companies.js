import request from '@/utils/request'

// 接口：获取企业列表
export const companyList = () => {
  return request({
    url: '/companies/list',
    noToken: true
  })
}

// 接口：获取企业详情
export const companyDetail = id => {
  return request({
    url: '/companies/' + id,
    noToken: true
  })
}

// 接口：获取企业评论数据
export const companyComments = id => {
  return request({
    url: `/companies/${ id }/comments`,
    noToken: true
  })
}

// 接口：获取企业职位
export const companyPositions = id => {
  return request({
    url: `/companies/${ id }/positions`,
    noToken: true
  })
}

// 接口：获取企业职位筛选条件
export const companyPositionFilters = id => {
  return request({
    url: `/companies/${ id }/positionFilters`,
    noToken: true
  })
}
