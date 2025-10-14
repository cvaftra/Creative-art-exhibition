import request from '../utils/request'

// 获取话题列表
export const getTopics = (params) => request.get('/topics', { params })

// 获取话题详情
export const getTopicDetail = (id) => request.get(`/topic/${id}`)

// 获取用户信息
export const getUserInfo = (loginname) => request.get(`/user/${loginname}`)