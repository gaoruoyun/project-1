//路由配置信息
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
export default [
    {
        path:'/shopcart',
        name:'ShopCart',
        component:ShopCart,
        meta:{show:true}
    },
    {
        path:'/addcartsuccess',
        name:'addcartsuccess',
        component:AddCartSuccess,
        meta:{show:true}
    },
    {
        path:'/detail/:skuid',//query
        component:Detail,
        meta:{show:true}
    },
    {
        path:'/home',
        component:Home,
        meta:{show:true}
    },
    {
        path:'/search/:keyword?',
        component:Search,
        meta:{show:true},
        name:"search",
        //传递props数据
        //props:true
       // props:{a:1,b:2}
       props:($route)=>{
           return{keyword:$route.params.keyword,k:$route.query.k}
       }
    },
    {
        path:'/login',
        component:Login,
        meta:{show:false}
    },
    {
        path:'/register',
        component:Register,
        meta:{show:false}
    },
   
]