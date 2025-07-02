<script>
import { ref } from 'vue';

import ServiceList from "@/serviceCatalog/components/service-list.component.vue";
import ToastNotification from "@/shared/components/toast-Notification.component.vue";
import ServiceHistory from "@/booking/components/service-history.component.vue";

export default {
  name: "ServicesCustomer",
  components: {
    ServiceHistory,
    ServiceList,
    ToastNotification
  },

};
</script>

<template>
  <ServiceList />
  <ToastNotification ref="toast" />
  <ServiceHistory />
</template>

<style scoped>

</style>
