import { axios } from '@/utils/request'

export function getAction(url) {
    return axios({
        url: url,
        method:'get'
    })
}

export function postAction(url,params) {
  return axios({
      url: url,
      method:'post',
      data:params
  })
}