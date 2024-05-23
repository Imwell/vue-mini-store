import request from '@/utils/request'

export function getUserList(params) {
  return request({
    url: '/getUsers',
    method: 'get',
    params
  })
}
export function getOrderList(params) {
  return request({
    url: '/getOrders',
    method: 'get',
    params
  })
}
export function buy(data) {
  return request({
    url: '/buyDiamond',
    method: 'post',
    data,
    headers: {
      'X-Buy': 'buy'
    }
  })
}
export function updateQuota(data) {
  return request({
    url: '/updateQuota',
    method: 'post',
    data
  })
}
