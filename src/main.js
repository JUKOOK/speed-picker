import Vue from 'vue';
import App from "./App.vue";
import "./assets/base.css"
import "./plugins/naver-maps"

new Vue({
    render: (h) => h(App),
  }).$mount('#app');