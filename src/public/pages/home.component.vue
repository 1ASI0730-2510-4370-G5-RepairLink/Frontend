<script setup>
import { ref, onMounted } from 'vue'
import CustomerHome from "@/public/components/customer-home.component.vue"
import TechnicianHome from "@/public/components/technician-home.component.vue"
import {useRoute} from "vue-router";

const user = ref({});

onMounted(() => {
  const storedUser = localStorage.getItem('user');

  if (storedUser) {
    user.value = JSON.parse(storedUser);
  }
});

</script>

<template>
  <div style="font-family: Roboto, sans-serif; max-width: 900px; margin: auto; padding: 10px;">
    <div style="text-align: left; color: #8da8ff; font-weight: 600; margin-bottom: 10px;">
      Hola, {{ user.name  }}
    </div>
    <CustomerHome v-if="user.role === 'customer'" />
    <TechnicianHome v-else-if="user.role === 'technician'" />
  </div>
</template>

<style scoped>

</style>