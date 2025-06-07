<script setup>
import { ref, onMounted } from 'vue'
import CustomerHome from "@/public/components/customer-home.component.vue"
import TechnicianHome from "@/public/components/technician-home.component.vue"

const user = ref({
  id: 1,
  username: "Gabriel",
  role: "technician"
});

const appointments = ref([])

onMounted(async () => {
  appointments.value = await fetchAppointments()
})

function fetchAppointments() {
  return Promise.resolve([
    { id: 1, date: '2025-04-29', time: '3:00PM-4:00PM', status: 'New' },
    { id: 2, date: '2025-04-30', time: '1:00PM-2:00PM', status: 'Confirmed' }
  ])
}
</script>

<template>
  <div style="font-family: Roboto, sans-serif; max-width: 900px; margin: auto; padding: 10px;">
    <div style="text-align: left; color: #8da8ff; font-weight: 600; margin-bottom: 10px;">
      Hello, {{ user.username  }}
    </div>
    <CustomerHome v-if="user.role === 'customer'" />
    <TechnicianHome v-else-if="user.role === 'technician'" />
  </div>
</template>

<style scoped>

</style>