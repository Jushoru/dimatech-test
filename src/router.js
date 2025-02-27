import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
    routes: [
        {
            path: '/',
            name: 'task1Page',
            component: () => import('../../dimatech-test/src/components/views/task1Page.vue'),
        },
        {
            path: '/task2Page',
            name: 'task2Page',
            component: () => import('../../dimatech-test/src/components/views/task2Page.vue'),
        },
    ]
})