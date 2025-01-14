import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function sendSmsCode(data) {
  return request({
    url: '/sendSmsCode',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout(v) {
  return request({
    url: '/logout',
    method: 'post',
    data: {
      mobile: v
    }
  })
}
