import request from '../untils/request'

export function updateBook (obj) {
  return request({
    url: '/book/update',
    method: 'post',
    data: obj,
  })
}

export function getBookList (obj) {
  return request({
    url: '/catlist',
    method: 'get',
    params: obj,
  })
}