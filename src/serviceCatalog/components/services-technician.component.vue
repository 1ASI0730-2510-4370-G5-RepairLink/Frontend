<script>
import { ref } from 'vue';

import ServiceList from "@/serviceCatalog/components/service-list.component.vue";
import BookingForm from "@/booking/components/booking-form.component.vue";
import ToastNotification from "@/shared/components/toast-Notification.component.vue";
import ServiceHistory from "@/booking/components/service-history.component.vue";
import ScheduleServices from "@/booking/components/schedule-services.component.vue";

export default {
  name: "ServicesTechnician",
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
  <BookingForm :visible="bookingVisible" @update:visible="bookingVisible = $event" :service="selectedService" />
  <ToastNotification ref="toast" />
  <ServiceHistory />
  <ScheduleServices />
</template>

<style scoped>

</style>
