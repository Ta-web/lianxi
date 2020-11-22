import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/tiao',
        name: 'Haha',
        component: () => import('@/views/tiao/tiao.vue'),
    },

    {
        path: '/dian',
        name: 'Wo',
        component: () => import('@/views/dian/dian.vue'),
    },
];

const router = new VueRouter({
    routes,
});

export default router;
