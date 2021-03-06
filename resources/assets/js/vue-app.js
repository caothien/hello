import Vue from 'vue'
import VueRouter from 'vue-router';
import Example from './components/Example'
import { routes } from './routes';
Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes
});
new Vue({
    el: '#app',
    router
});