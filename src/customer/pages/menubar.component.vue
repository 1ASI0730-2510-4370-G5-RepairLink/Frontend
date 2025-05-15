<script>
import {Button as PvButton, Drawer as PvDrawer, Menu as PvMenu} from "primevue";

export default {
  name: "menubar",
  components: {PvDrawer, PvButton, PvMenu},
  data(){
    return{
      items: [
        { label: "Inicio", icon: "pi pi-home" },
        { label: "Mis Servicios", icon: "pi pi-list" },
        { label: "Perfil", icon: "pi pi-user" },
        { label: "Notificaciones", icon: "pi pi-info-circle" },
      ],
      visible: false,
    }
  }
}
</script>

<template>
  <div >
    <pv-button icon="pi pi-bars" @click="visible = true" class="menu-button custom-menu-button" style="background-color: peachpuff" />

    <pv-drawer v-model:visible="visible" position="left" header="Menú" class="custom-drawer" style="background-color: peachpuff; color: black ; font-family: 'Roboto', sans-serif">
      <div class="logo-container">
        <img src="/src/customer/images/logo-producto.png" alt="Logo" class="logo" />
      </div>
      <ul class="menu-list" style="color: peachpuff">
        <router-link to=""></router-link>
        <li><router-link to="/home" style="color: black;font-family: 'Roboto', sans-serif">Home</router-link></li>
        <li><router-link to="my-services" style="color: black;font-family: 'Roboto', sans-serif">My Services</router-link></li>
        <li><router-link to="/profile" style="color: black;font-family: 'Roboto', sans-serif">Profile</router-link></li>
        <li><router-link to="#" style="color: black;font-family: 'Roboto', sans-serif">Help</router-link></li>
      </ul>
    </pv-drawer>
  </div>

</template>

<style scoped>
.menu-button {
  position: fixed;
  top: 20px;
  right: 20px;
}

.menu-list {
  list-style: none;
  padding: 0;
}

.menu-list li {
  margin: 15px 0;
}

.menu-list a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  padding: 10px;
  display: block;
}

.menu-list a:hover {
  background: rgba(255, 255, 255, 0.2);
}
.custom-menu-button {
  background-color: #ffffff;
  border: none;
  color: black;
}

.logo-container {
  text-align: center;
  padding: 15px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  margin-bottom: 15px;
}

.logo {
  max-width: 120px;
  height: auto;
  display: inline-block;
}
</style>