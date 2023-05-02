import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

// 导入路由
import router from './components/router'

const app = createApp(App)

// 挂载路由模块
app.use(router)

app.mount('#app')