import {createRouter, createWebHistory} from "vue-router";
import welcomeComponent from "@/signup_login/components/welcome.component.vue";
import LoginComponent from "@/signup_login/components/login.component.vue";
import SignupCustomerComponent from "@/signup_login/components/signup-customer.component.vue";
import SignupTechnicianComponent from "@/signup_login/components/signup-technician.component.vue";
import signupTechinicianNextStepComponent from "@/signup_login/components/signup-techinician-next-step.component.vue";

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
        {path: '/login', name:'LogInPage', component: LoginComponent},
        {path: '/signup-customer', name:'SignUpPage-Customer', component: SignupCustomerComponent},
        {path: '/signup-technician', name:'SignUpPage-Technician', component: SignupTechnicianComponent},
        {path: '/next-step', name:'SignUpPage-Technician-Next-Step', component:signupTechinicianNextStepComponent}
    ]
})

export default router;