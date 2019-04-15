import axios from 'axios'

export function get(url) {
  return axios
    .get(url)
    .then(response => {
      return response.data ? response.data : null
    })
    .catch(error => {
      if (error.response) {
        const res = { code: error.response.status, msg: error.response.data, error: error }
        throw res
      } else {
        const res = { code: 500, msg: error.message, error: error }
        throw res
      }
    })
}

export function post(url, data) {
  return axios
    .post(url, data)
    .then(response => {
      return response.data ? response.data : null
    })
    .catch(error => {
      if (error.response) {
        const res = { code: error.response.status, msg: error.response.data, error: error }
        throw res
      } else {
        const res = { code: 500, msg: error.message, error: error }
        throw res
      }
    })
}