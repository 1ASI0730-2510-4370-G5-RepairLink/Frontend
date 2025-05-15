import { createApp } from 'vue'
import App from './App.vue'
import Material from '@primeuix/themes/material'
import PrimeVue from 'primevue/config'
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
    Drawer, ToastService
} from "primevue";


const app = createApp(App)

app.use(PrimeVue, {theme: { preset: Material }, ripple: true })
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

app.mount('#app');
app.use(ToastService); // Register ToastService
app.component('Toast', Toast);
