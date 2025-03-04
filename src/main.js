import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'
import router from './router.js'
import { createPinia } from "pinia";

createApp(App)
    .use(router)
    .use(createPinia())
    .mount('#app')