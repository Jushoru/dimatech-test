import { createRouter, createWebHistory } from 'vue-router';
import Task1Page from "./components/views/task1Page.vue";
import Task2Page from "./components/views/task2Page.vue";

export default createRouter({
    history: createWebHistory('/dimatech-test/'),
    routes: [
        {
            path: '/',
            component: Task1Page,
        },
        {
            path: '/task2Page',
            component: Task2Page,
        },
    ]
})