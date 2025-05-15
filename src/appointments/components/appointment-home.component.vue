<script>
import appointmentHeaderComponent from "@/appointments/components/appointment-header.component.vue";
import appointmentCardComponent from "@/appointments/components/appointment-card.component.vue";
import promoBannerComponent from "@/appointments/components/promo-banner.component.vue";
export default {
  name: "appointment-home",
  components: {
    appointmentHeaderComponent,
    appointmentCardComponent,
    promoBannerComponent
  },
  data() {
    return {
      currentUser: {
        firstName: 'Gabriel',
        lastName: 'Smith'
      },
      headerImage: require('src/appointments'),
      appointments: [
        {
          date: 'April 29, 2025',
          time: '3:00PM-4:00PM',
          status: 'New'
        },
        {
          date: 'May 1, 2025',
          time: '10:00AM-11:00AM',
          status: 'Confirmed'
        }
      ]
    }
  }
}
</script>

<template>
  <div class="appointments-home container">
    <!-- Header Section -->
    <appointment-header-component
        :user="currentUser"
        :right-image="headerImage"
    />

    <!-- Appointments List -->
    <div class="appointments-list mt-5">
      <h3 class="mb-4">Upcoming Appointments</h3>
      <appointment-card-component
          v-for="(appointment, index) in appointments"
          :key="index"
          :appointment="appointment"
      />
    </div>

    <!-- Promo Banner -->
    <promo-banner-component class="mt-5" />
  </div>
</template>

<style scoped>

</style>