<template>
    <div class="app">
        <!-- 声明路由连接 -->
        <h1>vue-router的基本使用</h1>
        <router-link to="/home">首页</router-link>
        <router-link to="/set">设置</router-link>
        <router-link to="/set/1">设置1</router-link>
        <router-link to="/set/2">设置2</router-link>
        <router-link to="/set/3">设置3</router-link>
        <router-link to="/about">关于</router-link>
        <router-link to="/main">主页</router-link>
        <router-link to="/login">登录</router-link>
        <hr>

        <!-- 声明路由占位符 -->
        <router-view></router-view>
    </div>
</template>

<script>
import { hasChanged } from '@vue/shared';
import MyAbout from './components/MyAbout.vue';
import MyHome from './components/MyHome.vue';
import Myset from './components/Myset.vue';
import MyMain from './components/MyMain.vue';
import Login from './components/Login.vue';


export default {
    name: 'App',
    components: { MyAbout, MyHome, Myset ,MyMain,Login},
 
}
</script>

<style scoped>
.app a{
    padding-right: 10px;
}
</style>