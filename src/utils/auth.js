import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'
const MobileKey = 'vue_admin_template_mobile'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function getMobile() {
  return Cookies.get(MobileKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function setMobile(token) {
  return Cookies.set(MobileKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey) && Cookies.remove(MobileKey)
}
