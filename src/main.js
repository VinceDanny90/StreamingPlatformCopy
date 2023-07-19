import { createApp } from 'vue'
import router from './route'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import './style.css'
import App from './App.vue'

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

createApp(App)
.use(router)
.use(pinia)
.mount('#app')
