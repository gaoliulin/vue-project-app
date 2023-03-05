import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'

import App from './App.vue'
import Main from './Main.vue'
import router from './router'

import './assets/main.css'

const app = createApp(Main)

app.use(createPinia())
app.use(router)
// 全局配置 ElementPlus
app.use(ElementPlus, { size: 'small', zIndex: 3000 })

app.mount('#app')
