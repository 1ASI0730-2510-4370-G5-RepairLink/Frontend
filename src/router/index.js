import {createRouter, createWebHistory} from "vue-router";
import welcomeComponent from "@/signup_login/components/welcome.component.vue";
import LoginComponent from "@/signup_login/components/login.component.vue";

/**
 * Vue Router instance
 * @type {Router} Vue Router instance creation with default configs
 * @property {Object} history
 * @property {Array} routes
 */


const router =createRouter({
    history: createWebHistory(),
    routes:[
       {path: '/', name: 'WelcomePage', component: welcomeComponent},
        {path: '/login', name:'LogInPage', component: LoginComponent}
    ]
})

export default router;