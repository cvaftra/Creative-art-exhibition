import axios from 'axios'

// 创建 axios 实例
const request = axios.create({
    baseURL: 'https://cnodejs.org/api/v1',
    timeout: 5000
})

// 请求拦截器
request.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// 响应拦截器
request.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        return Promise.reject(error)
    }
)

export default request 