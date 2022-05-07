//api接口进行统一管理
import requests from "./request";
import mockRequests from "./mockAjax";

//三级联动接口
// /api/product/getBaseCategoryList get 无参数
//axios发请求 返回Promise 对象
export const reqCategoryList = ()=>requests({url:`/product/getBaseCategoryList`,method:'get'})
export const reqGetBannerList = () => mockRequests({url:'/banner',method:'get'})
export const reqFloorList = () => mockRequests({url:'/floor',method:'get'})

//获取搜索模块数据 地址：/api/list   POST  需带参数 例：
// {
//     "category3Id": "61",
//     "categoryName": "手机",
//     "keyword": "小米",
//     "order": "1:desc",
//     "pageNo": 1,
//     "pageSize": 10,
//     "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
//     "trademark": "4:小米"
//   }
//当前这个接口 给服务器传递参数params 至少是一个空对象
export const reqGetSearchInfo = (params)=>requests({url:"/list",method:"post",data:params});
export const reqGoodsInfo = (skuId)=>requests({url:`/item/${skuId}`,method:'get'});
//讲产品添加到购物车
export const reqAddOrUpdateShopCart = (skuId,skuNum)=>requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:"post"})
