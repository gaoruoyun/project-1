import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
Vue.use(VueRouter)


//先把VueRouter 原型对象的push 保存一份
let originPush = VueRouter.prototype.push
let originReplace =  VueRouter.prototype.replace

//重写push|replace方法
//第一个参数 往哪跳转（传递哪些参数）
VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && reject){
        originPush.call(this,location,resolve,reject)
    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
}
VueRouter.prototype.replace = function(location,resolve,reject){
    if(resolve && reject){
        originReplace.call(this,location,resolve,reject)
    }else{
        originReplace.call(this,location,()=>{},()=>{})
    }
}
export default new VueRouter({
    routes,
    //滚动行为
    scrollBehavior(to,from,savePosition){
        return {y:0}
    }
})
