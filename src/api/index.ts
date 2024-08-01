import request from '~/utils/request'

// test
export function getTest() {
  return request({
    url: '/posts34',
    method: 'post',
  })
}
