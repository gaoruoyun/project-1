import Vue from 'vue'
import App from './App.vue'

//全局组件 三级联动
import TypeNav from '@/components/TypeNav'
import Carsousel from "@/components/Carousel";
import Pagination from "@/components/Pagination"
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carsousel.name, Carsousel);
Vue.component(Pagination.name, Pagination);
//引入路由
import router from '@/router';
//引入仓库
import store from './store';

//引入mockserver。js ---mock数据
//不对外暴露 引入就是执行
import '@/mock/mockServe'

import 'swiper/css/swiper.css'

new Vue({
  render: h => h(App),
  //全局事件总线$bus配置
  beforeCreate(){
    Vue.prototype.$bus = this //VM
    //Vue.prototype.$API = API;
  },
  router,//注册路由 会多$route,$router 
  store,//注册仓库 组件实例身上会多一个属性$store
}).$mount('#app')
