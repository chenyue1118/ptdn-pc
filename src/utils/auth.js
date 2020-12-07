import Cookies from 'js-cookie'

const TokenKey = 'CMSToken'
const expires = 7

export function getToken () {
  return Cookies.get(TokenKey)
}

export function setToken (token) {
  return Cookies.set(TokenKey, token, { expires })
}

export function removeToken () {
  return Cookies.remove(TokenKey)
}
