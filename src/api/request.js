//二次封装
import axios from "axios";
import nprogress from "nprogress";
//start：进度条开始 done：进度条结束 放在请求拦截器
import "nprogress/nprogress.css";

//利用axios 方法create 创建axios实例
const requests = axios.create({
    //配置对象
    baseURL:"/api",//请求路径前加上api
    timeout:5000,
})
//请求拦截器
requests.interceptors.request.use((config)=>{
    nprogress.start()
    return config
})

//响应拦截器
requests.interceptors.response.use((res)=>{
    //成功回调，响应拦截器检测到 做一些事情
    nprogress.done()
    return res.data
},(error)=>{
    //响应失败的回调
    console.log(请求错误)
})

export default requests
