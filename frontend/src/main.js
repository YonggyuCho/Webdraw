import { createApp } from 'vue'
import App from './App.vue'
import routers from './routers/router.js'
import Vue from 'vue'
import store from '@/store/store.js'
import axios from 'axios';


const app = createApp(App)
app.use(routers)  // router 추가
app.use(store)
app.mount('#app')

app.config.globalProperties.$axios = axios
