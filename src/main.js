import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from "./plugin/vue.router"

//引入全局css
import "./assets/css/base.css";
import "./assets/js/font.js";

//引入全局axios

import axios from "axios"
window.axios=axios

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
