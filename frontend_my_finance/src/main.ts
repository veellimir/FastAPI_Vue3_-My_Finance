import { autoAnimatePlugin } from '@formkit/auto-animate/vue';
import { createApp } from 'vue'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import App from './App.vue'
import router from './router/router';

import './style.css'



const app = createApp(App)

app.use(autoAnimatePlugin)
app.use(router)
app.mount('#app')