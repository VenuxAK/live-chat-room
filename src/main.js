import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import Bootstrap & Icon
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"

// Global CSS
import "./assets/css/global.css"

// Bootstrap JS
import "bootstrap/dist/js/bootstrap.bundle.min"



createApp(App).use(router).mount('#app')
