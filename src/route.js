import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            name: 'home',
            path: '/home',
            component: () => import( './components/home.vue')
        },
        {
            name: 'test',
            path: '/test',
            component: () => import( './components/test.vue')
        }
    ]
})