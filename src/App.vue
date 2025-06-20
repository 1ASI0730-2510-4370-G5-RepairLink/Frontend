<template>
  <div class="page-container">
    <menubar v-if="showMenu" class="menubar" />
    <div class="content-wrapper">
      <welcome-page v-if="$route.name === 'welcome'"></welcome-page>
      <router-view />
    </div>
  </div>
</template>

<script>
import menubar from '@/shared/components/menubar.component.vue';
import LanguageSwitcher from "@/public/components/language-switcher.component.vue";
import FooterContent from "@/public/components/footer-content.component.vue";
import MyServices from "@/serviceCatalog/pages/my-services.component.vue";
import WelcomePage from "@/userManagement/pages/welcome.component.vue";

export default {
  components: {WelcomePage, LanguageSwitcher, FooterContent, menubar, MyServices },
  computed: {
    showMenu() {
      return localStorage.getItem('user') !== null;
    }
  },
  data() {
    return {
    };
  },
  methods: {}
};
</script>

<style scoped>

.page-container {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
}

.menubar {
  width: 250px;
  height: 100vh;
  position: relative;
}

.content-wrapper {
  background-color: #FFFFFF;
  padding: 20px;
  border-radius: 8px;
  flex: 1;
  overflow-y: auto;
}

</style>