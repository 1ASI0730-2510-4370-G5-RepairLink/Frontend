<script>
import { ref } from 'vue';

import ServiceList from "@/customer/modules/catalog/components/service-list.component.vue";
import BookingForm from "@/customer/modules/booking/components/booking-form.component.vue";
import ToastNotification from "@/shared/components/toast-Notification.component.vue";
import ServiceHistory from "@/customer/modules/history/components/service-history.component.vue";
import ScheduleServices from "@/customer/modules/booking/components/schedule-services.component.vue";

export default {
  name: "HomeCustomerPage",
  components: {
    ServiceList,
    BookingForm,
    ToastNotification,
    ServiceHistory,
    ScheduleServices
  },
  setup() {
    const bookingVisible = ref(false);

    const openBooking = () => {
      bookingVisible.value = true;
    };

    const confirmBooking = (data) => {
      const toast = document.querySelector('.p-toast');
      alert(`Reserva confirmada para ${data.name} el ${data.date}`);
      bookingVisible.value = false;
    };

    return {
      bookingVisible,
      openBooking,
      confirmBooking
    };
  }
};
</script>

<template>
  <ServiceList @openBooking="openBooking"/>
  <BookingForm :visible="bookingVisible" @update:visible="bookingVisible = $event" :service="selectedService" />
  <ToastNotification ref="toast" />
  <ServiceHistory />
  <ScheduleServices />
</template>

<style scoped>

</style>
