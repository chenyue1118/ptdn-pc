import request from '@/utils/request'

const baseUrl = '/base_url'

// 登录
export function login (data) {
  return request({
    url: `${baseUrl}/login`,
    method: 'post',
    data
  })
}
