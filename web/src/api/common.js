import request from '../untils/request'

export function updateBook (obj) {
  return request({
    url: '/book/update',
    method: 'post',
    data: obj,
  })
}

export function postArticalList (obj) {
  return request({
    url: '/artical',
    method: 'post',
    data: obj,
  })
}