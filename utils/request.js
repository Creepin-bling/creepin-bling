/*
    基于axios的封装模块 
 */

import axios from 'axios'

const request = axios.create({
    // 基础路径
    baseURL: 'http://realworld.api.fed.lagounews.com'
})


// 请求拦截器



// 响应拦截器

export default request