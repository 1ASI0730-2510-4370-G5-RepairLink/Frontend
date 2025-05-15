<script>
import menubar from '@/customer/pages/menubar.component.vue'
import ServiceList from "@/customer/components/service-list.component.vue";
import BookingForm from "@/customer/components/booking-form.component.vue";
import ToastNotification from "@/customer/components/toast-Notification.component.vue";
import ServiceHistory from "@/customer/components/service-history.component.vue";
import ScheduledServices from "@/customer/components/schedule-services.component.vue";

export default {
  components: {ServiceHistory, ToastNotification, BookingForm, ServiceList, menubar, ScheduledServices},
  data(){
    return {
      bookingVisible: false,
    };
  },
  methods: {
    openBooking(service) {
      this.bookingVisible = true;
    },
    confirmBooking(data) {
      this.$refs.toast.showSuccess(`Reserva confirmada para ${data.name} el ${data.date}`);
      this.bookingVisible = false;
    },
  },
}

</script>

<template>
  <div class="page-container">
    <menubar class="menubar"/>
    <div class="content-wrapper">
      <service-list @openBooking="openBooking"/>
      <BookingForm :visible="bookingVisible" @confirm="confirmBooking"/>
      <ToastNotification ref="toast" />
      <ServiceHistory />
      <ScheduledServices/>
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
