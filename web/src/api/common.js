import request from '../untils/request'

export function updateBook (obj) {
  return request({
    url: '/book/update',
    method: 'post',
    data: obj,
  })
}

export function getArticalList (obj) {
  return request({
    url: '/artical',
    method: 'get',
    params: obj,
  })
}