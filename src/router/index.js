import { createRouter, createWebHistory } from 'vue-router';
import BookServicePage from '@/customer/modules/booking/pages/BookServicePage.vue';
import HomeCustomerPage from "@/customer/modules/home/HomeCustomerPage.vue";

const routes = [
    { path: '/', redirect: '/home-customer' },
    { path: '/home-customer', name: 'HomeCustomerPage', component: HomeCustomerPage },
    { path: '/book-service', name: 'BookServicePage', component: BookServicePage }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
