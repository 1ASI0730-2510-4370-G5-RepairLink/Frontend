<script>
import menubar from "@/public/component/menubar.component.vue";

export default {
  components: { menubar }
};
</script>

<template>
  <div class="page-container">
    <menubar class="menubar"/>
    <div class="content-wrapper">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.page-container {
  background-color: #FFD38F;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content-wrapper {
  background-color: #FFFFFF;
  padding: 10px;
  border-radius: 8px;
  width: 70%;
}

.menubar {
  position: fixed;
  left: 10px;
  width: 250px;
  height: 10vh;
}
</style>
