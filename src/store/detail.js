import { reqGoodsInfo,reqAddOrUpdateShopCart } from "@/api"
//state仓库 存储数据的地方
const state = {
    goodInfo:{}
}
//mutations修改state的唯一手段
const mutations = {
    GETGOODINFO(state,goodInfo){
        state.goodInfo = goodInfo
    }
}
//action 处理action 可以书写自己的业务逻辑 也可以处理异步
const actions = {
    //获取产品信息的action
    async getGoodInfo({commit},skuid){
        let result = await reqGoodsInfo(skuid)
        if(result.code==200){
            commit('GETGOODINFO',result.data)
        }
    },
    //产品添加到购物车
    async addOrUpdateShopCart({commit},{skuId,skuNum}){
        let result = await reqAddOrUpdateShopCart(skuId,skuNum)
        if(result.code==200){
            return "ok"
          }else{
              return Promise.reject(new Error('faile'))
          }
    }

}
//getters 理解为计算属性 用于建华仓库数据 让组件获取仓库数据更加方便
const getters = {
    categoryView(state){
        return state.goodInfo.categoryView||{}
    },
    skuInfo(state){
        return state.goodInfo.skuInfo||{}
    },
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList||{}
    }
}

//对外暴露store类的一个实例
export default {
    state,
    actions,
    mutations,
    getters

}
