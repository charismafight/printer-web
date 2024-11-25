import './assets/main.css'
import './assets/button.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_SERVER

const app = createApp(App)

app.config.globalProperties.$http = axios

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.mount('#app')
