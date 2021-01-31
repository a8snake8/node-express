import request from '../untils/request'
import qs from 'qs'

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

export function postNewsList (data) {
  return request({
    url: 'https://api.apiopen.top/getWangYiNews',
    method: 'post',
    data: qs.stringify(data)
  })
}