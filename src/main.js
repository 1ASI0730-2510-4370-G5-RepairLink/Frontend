import { createApp } from 'vue';
import App from './App.vue';
import Aura from '@primevue/themes/aura';
import PrimeVue from 'primevue/config';
import router from './router';

import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import {
    Button,
    DatePicker,
    Card,
    Column,
    DataTable,
    Dialog,
    InputText,
    Menu,
    Tag,
    Toast,
    DataView,
    Drawer,
    ToastService
} from "primevue";

const app = createApp(App);

app.use(PrimeVue, { theme: { preset: Aura }, ripple: true });
app.use(router);
app.use(ToastService);

app
    .component('pv-button', Button)
    .component('pv-card', Card)
    .component('pv-data-table', DataTable)
    .component('pv-dialog', Dialog)
    .component('pv-input-text', InputText)
    .component('pv-calendar', DatePicker)
    .component('pv-toast', Toast)
    .component('pv-menu', Menu)
    .component('pv-drawer', Drawer)
    .component('pv-tag', Tag)
    .component('pv-column', Column)
    .component('pv-data-view', DataView)
    .component('Toast', Toast);

app.mount('#app');
