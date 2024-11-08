
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';

// Import Bootstrap JS (if you need Bootstrap JavaScript functionality)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
