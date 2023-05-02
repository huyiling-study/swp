// createRouter 方法用于创建路由的实例对象
// createWebHashHistory 用于指定路由的工作模式（hash模式）
// 1.
import { createRouter, createWebHashHistory } from 'vue-router'

// 2.
import MyHome from './MyHome.vue'
import Myset from './Myset.vue'
import MyAbout from './MyAbout.vue'

import Tab1 from './tabs/MyTab1.vue'
import Tab2 from './tabs/MyTab2.vue'

import MyMain from './MyMain.vue'
import Login from './Login.vue'

// 3.
// createRouter 方法的返回值就是路由实例对象
// 创建路由实例对象
const router = createRouter({
    // 3.1 通过 history 属性指定路由的工作模式
    history: createWebHashHistory(),
    // 3.2 通过 routers 数组，指定路由规则
    routes: [
        { path: '/', redirect: '/home' },
        // path 是 hash 地址，component 是要展示的组件
        { path: '/home', component: MyHome },
        // 动态路由匹配（id可以随意取）props开启动态路由传参
        { path: '/set/:id', component: Myset,props:true },
        {
            path: '/about', 
            component: MyAbout,
            redirect: '/about/tab1',
            // 通过 children 属性嵌套声明子级路由规则（子路由path不要/开头）
            children: [
                { path: 'tab1', component: Tab1 },
                { path: 'tab2', component: Tab2}
            ]
        },
        { path: '/main',component:MyMain},
        { path: '/login',component:Login}
    ]
})

// 声明全局路由导航守卫
router.beforeEach((to,from,next)=>{
    const token = localStorage.getItem('token')
    // console.log(to);
    // next()
    // 若访问后台主页，跳转到登录界面，其他的放行
    if(to.path === '/main'&& !token){
        next('/login')
    }else{
        next()
    }
})

// 4.
export default router