import Vue from 'vue'
import App from './App.vue'
// 导入router对象
import router from './router/index.js'

import './element-ui/index.js'
import { Loading } from 'element-ui'


import axios from 'axios'
// 配置请求根路径
// axios.defaults.baseURL = 'https://www.escook.cn'
axios.defaults.baseURL = 'http://localost:8080'
let loadingInstance = null
// 配置请求拦截器
axios.interceptors.request.use(config => {
  console.log(config);
  // 展示Loading效果
  loadingInstance = Loading.service({ fullscreen: true })
  // 为当前请求配置Token认证字段
  config.headers.Authorization = 'Huyiling xxx'
  return config
})
// 配置响应拦截器
axios.interceptors.response.use(response=>{
  // 关闭Loading效果
  loadingInstance.close()
  return response
})
Vue.prototype.$http = axios


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // router:router 声明router属性指向导入router对象
  router
}).$mount('#app')
