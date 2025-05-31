<template>
  <div class="page-container">
    <menubar class="menubar" />
    <div class="content-wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
import menubar from '@/shared/components/menubar.component.vue';
import LanguageSwitcher from "@/public/components/language-switcher.component.vue";
import FooterContent from "@/public/components/footer-content.component.vue";
import MyServices from "@/serviceCatalog/components/my-services.component.vue";

export default {
  components: { LanguageSwitcher, FooterContent, menubar, MyServices },
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