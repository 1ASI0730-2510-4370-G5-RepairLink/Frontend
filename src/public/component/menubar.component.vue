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
  <div>
    <pv-button icon="pi pi-bars" @click="visible = true" class="menu-button custom-menu-button" />

    <pv-drawer v-model:visible="visible" position="left" header="Menú" class="custom-drawer">
      <div class="logo-container">
        <img src='@/img/logo-producto.png' alt="Logo" class="logo" />
      </div>
      <ul class="menu-list">
        <li><a href="#">Inicio</a></li>
        <li><a href="">Mis Servicios</a></li>
        <li><a href="#">Perfil</a></li>
        <li><a href="#">Notificaciones</a></li>
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