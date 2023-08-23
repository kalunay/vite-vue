import 'primevue/resources/themes/lara-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import { initializeApp } from 'firebase/app'

import './api'

const firebaseConfig = {

    apiKey: "AIzaSyAEw_kI1j4wUUagmHX4fngGhxxy7cGs3-4",
    authDomain: "jwt-vue-4297e.firebaseapp.com",
    projectId: "jwt-vue-4297e",
    storageBucket: "jwt-vue-4297e.appspot.com",
    messagingSenderId: "400079050896",
    appId: "1:400079050896:web:b14d6c2bbfb30fb78b2015"  
};

initializeApp(firebaseConfig)

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.mount('#app')
