import { reqCategoryList,reqGetBannerList,reqFloorList } from "@/api"
const state = {
    categoryList: [],
    bannerList: [],
    floorList:[]
}
//mutations修改state的唯一手段
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
      },
      GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
      },
      GETFLOORLIST(state,floorList){
        state.floorList = floorList;
     },
}
//action 处理action 可以书写自己的业务逻辑 也可以处理异步
const actions = {
    async categoryList({ commit }) {
        //reqgetCategoryList返回的是一个Promise对象
        //需要用await接受成功返回的结果，await必须要结合async一起使用（CP）
        let result = await reqCategoryList();
        if (result.code == 200) {
          commit("CATEGORYLIST", result.data);
        }
      },
      async getBannerList({ commit }) {
        let result = await reqGetBannerList();
        if (result.code == 200) {
          commit("GETBANNERLIST", result.data);
        }
      },
      //获取floor数据
        async getFloorList({ commit }) {
            let result = await reqFloorList();
            if (result.code == 200) {
            //提交mutation
            commit("GETFLOORLIST", result.data);
            }
        },
}
//getters 理解为计算属性 用于建华仓库数据 让组件获取仓库数据更加方便
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}