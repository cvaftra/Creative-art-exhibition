import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
// 单页应用（SPA）：一个页面，只有一个html文件，其他都是通过js动态渲染的
// 组件化开发：一个页面，可以拆分成多个组件，每个组件可以独立开发，互不干扰
// 路由：一个页面，可以有多个路由，每个路由可以独立开发，互不干扰