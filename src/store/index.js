import Vue from "vue";
import vuex from "vuex";

Vue.use(vuex)
//注册插件一次

import home from "./home";
import search from "./search";
import detail from "./detail";

//对外暴露store类的一个实例
export default new vuex.Store({
    modules:{
        home,
        search,
        detail
    }

})
