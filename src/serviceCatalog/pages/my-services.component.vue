<script setup>
import { ref, onMounted } from 'vue'
import ServicesCustomer from "@/serviceCatalog/components/services-customer.component.vue"
import ServicesTechnician from "@/serviceCatalog/components/services-technician.component.vue"
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
  <div>
    <ServicesCustomer v-if="user.role === 'customer'" />
    <ServicesTechnician v-else-if="user.role === 'technician'" />
  </div>
</template>

<style scoped>

</style>