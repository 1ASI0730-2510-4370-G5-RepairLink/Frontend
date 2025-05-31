<script>
import {Button as PvButton, Drawer as PvDrawer, Menu as PvMenu} from "primevue";
import LanguageSwitcher from "@/public/components/language-switcher.component.vue";
import FooterContent from "@/public/components/footer-content.component.vue";

export default {
  name: "menubar",
  components: {FooterContent, LanguageSwitcher, PvDrawer, PvButton, PvMenu},
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
  <aside class="side-menu">
    <h1>Menú</h1>
    <div class="logo-container">
      <img src="/logo-producto.png" alt="Logo" class="logo" />
    </div>
    <ul class="menu-list">
      <li><a href="#"><i class="pi pi-home"></i> Inicio</a></li>
      <li><a href="#"><i class="pi pi-list"></i> Mis Servicios</a></li>
      <li><a href="#"><i class="pi pi-user"></i> Perfil</a></li>
      <li><a href="#"><i class="pi pi-bell"></i> Notificaciones</a></li>
      <hr class="menu-divider" />
      <li><a href="#" @click="logout"><i class="pi pi-sign-out"></i> Cerrar sesión</a></li>
    </ul>
    <language-switcher class="language-switcher" />
    <footer>
      <footer-content/>
    </footer>
  </aside>
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
  color: black;
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
.side-menu {
  background-color: #FFD38F;
  width: 250px;
  height: 100vh;
  padding: 20px;
}
.language-switcher {
  margin-top: 20px;
  padding: 10px 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
}
</style>