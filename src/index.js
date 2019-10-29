import Vue from 'vue'
import App from './app.vue'
import router from './route.js'
import './assets/app.styl'


new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
