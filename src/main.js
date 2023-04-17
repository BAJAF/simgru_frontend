/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

//axios plugin
import axios from 'axios';
import VueAxios from 'vue-axios';

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import router from './router';

const firebaseConfig = {

  apiKey: "AIzaSyBb0vJ1pzwkxwHDAY2Sx1FdjsaLptxYlVA",

  authDomain: "simgru.firebaseapp.com",

  projectId: "simgru",

  storageBucket: "simgru.appspot.com",

  messagingSenderId: "141259875889",

  appId: "1:141259875889:web:8665abc5fbf367aa44d710",

  measurementId: "G-PDX2WBZCT6"

};

axios.default.baseURL = "http://localhost:8000/"; //ruta del servidor

//createApp.use(router).use(VueAxios,axios).mount('#app');

initializeApp(firebaseConfig);

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
