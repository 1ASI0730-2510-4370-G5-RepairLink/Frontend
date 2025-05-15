<script>
import menubar from '@/customer/pages/menubar.component.vue'
import ServiceList from "@/customer/components/service-list.component.vue";
import BookingForm from "@/customer/components/booking-form.component.vue";
import ToastNotification from "@/customer/components/toast-Notification.component.vue";
import ServiceHistory from "@/customer/components/service-history.component.vue";
import ScheduledServices from "@/customer/components/schedule-services.component.vue";

export default {
  name: "my-services-page",
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

<template >
  <div class="page-container">
    <menubar class="menubar"/>
    <div class="content-wrapper">

    </div>
  </div>
</template>

<style scoped>
.page-container {
  font-family: 'Roboto', sans-serif !important;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  background: none;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
  background: white;
}

.content-wrapper {
  padding-top:20px;
  border-radius: 20px 20px 20px 20px;
  overflow: scroll;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
  0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 20px;
  background-color: white;
  width: 1300px;
  height: 80vh;
  display: flex;
  flex-direction: column; /* Stack vertically */
  justify-content: center; /* Vertical centering */
  align-items: center; /* Horizontal centering */
  text-align: center; /* Backup for text elements */

}
.content-wrapper::-webkit-scrollbar {
  display: none; /* Chrome/Safari */
}
.menubar {
  position: fixed;
  left: 10px;
  top: 1px;
  width: 250px;
  height: 10vh;
}

</style>
