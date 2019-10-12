import axios from 'axios'
import Vue from 'vue'
import router from './router'

const http = axios.create({
    baseURL: 'http://localhost:3000/admin/api'
})

// 路由拦截 让请求头header携带上保存的token
http.interceptors.request.use((config) => {
    // Do something before request is sent
    if (localStorage.token) {
        config.headers.Authorization = 'Bearer ' + (localStorage.token || '')
    }
    return config
  }, function (error) {
    // Do something with request error
    return Promise.reject(error)
})
// 错误拦截 通用错误处理
http.interceptors.response.use(res => {
    return res
}, err => {
    if(err.response.data.message) {
        Vue.prototype.$message({
            type: 'error',
            message: err.response.data.message
        })
    }
    if(err.response.status === 401) {
        router.push('/login')
    }
    return Promise.reject(err)
})

export default http