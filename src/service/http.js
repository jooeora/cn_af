//http.ts
import axios, { AxiosRequestConfig } from 'axios'
import NProgress from 'nprogress'
import qs from 'qs'

// 设置请求头和请求路径

axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.interceptors.request.use(
  config => {
    const token = window.sessionStorage.getItem('token')
    if (token) {
      //@ts-ignore
      config.headers.token = token
    }
    config.data = qs.stringify(JSON.parse(config.data))
    return config
  },
  error => {
    return error
  }
)
// 响应拦截
axios.interceptors.response.use(res => {
  if (res.data.status === 1) {
    sessionStorage.setItem('token', '')
    // token过期操作
  }
  return res
})

const http = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .get(url, { params })
        .then(res => {
          NProgress.done()
          resolve(res.data)
        })
        .catch(err => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .post(url, JSON.stringify(params))
        .then(res => {
          NProgress.done()
          resolve(res.data)
        })
        .catch(err => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
  upload(url, file) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .post(url, file, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        .then(res => {
          NProgress.done()
          resolve(res.data)
        })
        .catch(err => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
  download(url) {
    const iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    iframe.src = url
    iframe.onload = function () {
      document.body.removeChild(iframe)
    }
    document.body.appendChild(iframe)
  }
}
export default http
