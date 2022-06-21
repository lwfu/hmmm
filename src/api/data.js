import request from '@/utils/request'

/**
 * @description: 热门职位数据
 * @return {*}
 */
export const dataHot = () => {
  return request({
    url: '/chart-data/hot'
  })
}

// 接口：城市索引
export const dataIndexes = () => {
  return request({
    url: '/chart-data/indexes'
  })
}

// 接口：统计信息
export const dataStatistics = params => {
  return request({
    url: '/chart-data/statistics',
    params
  })
}
