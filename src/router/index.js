/**
 * @fileoverview Router configuration for the ACME Learning Center application
 * Defines all routes and navigation behavior for the application
 */

import {createRouter, createWebHistory} from "vue-router";
import signupCustomerComponent from "@/userManagement/pages/signup-customer.component.vue";
import SignupCustomerComponent from "@/userManagement/pages/signup-customer.component.vue";
import SignupTechinicianNextStepComponent from "@/userManagement/pages/signup-techinician-next-step.component.vue";
import BookingComponent from "@/booking/pages/booking.component.vue";

/**
 * @description Lazy-loaded component imports for route configuration
 * Using dynamic imports to enable code splitting and improve initial load performance
 */

const HomeComponent = () => import('../public/pages/home.component.vue');
const PageNotFoundComponent = () => import('../public/pages/page-not-found.component.vue');
const BookingDetailsComponent = () => import('../booking/pages/booking-details.component.vue');
const MyServicesComponent = () => import('../serviceCatalog/pages/my-services.component.vue');
const ProfileComponent = () => import('../userManagement/pages/profile.component.vue');
const NotificationsComponent = () => import('../notification/pages/notifications.component.vue');
const WelcomeComponent = () => import('../userManagement/pages/welcome.component.vue');
const LoginComponent = () => import('../userManagement/pages/login.component.vue');

/**
 * @type {import('vue-router').RouteRecordRaw[]}
 * @description Application route definitions.
 * Each route object contains:
 * - path: URL path for the route
 * - name: Unique identifier for the route
 * - component: Vue component to render
 * - meta: Additional metadata including page title
 */
const routes = [
    {   path: '/welcome',                  name: 'welcome',       component: WelcomeComponent,               meta: {title: 'Welcome'}},
    {   path: '/login',                  name: 'login',       component: LoginComponent,               meta: {title: 'Login'}},
    {   path: '/signup-customer',                  name: 'signup-customer',       component: signupCustomerComponent,               meta: {title: 'SignUpCustomer'}},
    {   path: '/signup-technician',                  name: 'signup-technician',       component: SignupTechinicianNextStepComponent,               meta: {title: 'SignUpTechnician'}},
    {   path: '/home',                  name: 'home',       component: HomeComponent,               meta: {title: 'Home'}},
    {   path: '/booking/:id',           name: 'booking-details',       component: BookingDetailsComponent, props: true,  meta: {title: 'Booking Details'}},
    {   path: '/booking/',           name: 'booking',       component: BookingComponent, props: true,  meta: {title: 'New Booking'}},
    {   path: '/profile',                  name: 'profile',       component: ProfileComponent,               meta: {title: 'Profile'}},
    {   path: '/my-services',                  name: 'my-services',       component: MyServicesComponent,               meta: {title: 'My Services'}},
    {   path: '/notifications',                  name: 'notifications',       component: NotificationsComponent,               meta: {title: 'Notifications'}},
    {   path: '/',                      name: 'default',    redirect: {name: 'welcome'}},
    {   path: '/:pathMatch(.*)*',       name: 'not-found',  component: PageNotFoundComponent,       meta: {title: 'Page not found'}},
]

/**
 * @type {import('vue-router').Router}
 * @description Vue Router instance configured with HTML5 history mode
 */
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,

});

/**
 * @description Global navigation guard that runs before each route change
 * Handles:
 * - Navigation logging
 * - Dynamic page title updates based on route metadata
 *
 * @param {import('vue-router').RouteLocationNormalized} to - Target route
 * @param {import('vue-router').RouteLocationNormalized} from - Current route
 * @param {import('vue-router').NavigationGuardNext} next - Function to resolve the navigation
 */

router.beforeEach((to, from, next) => {
    console.log(`Navigating from ${from.name} to ${to.name}`);
    let baseTitle = 'RepairLink';
    document.title = `${baseTitle} | ${to.meta['title']}`;
    next();
});

export default router;