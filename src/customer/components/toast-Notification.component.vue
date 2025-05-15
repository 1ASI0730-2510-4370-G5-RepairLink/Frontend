<script>
import {Toast as PvToast} from "primevue";

export default {
  name: "toast-Notification",
  components: {PvToast},
  methods: {
    showSuccess(message) {
      this.$toast.add({
        severity: "success",
        summary: "Successfully",
        detail: message,
        life: 3000,
      });
    },
    showError(message) {
      this.$toast.add({
        severity: "error",
        summary: "Error",
        detail: message,
        life: 3000,
      });
    },
  },
}
</script>

<template>
  <pv-toast/>
</template>

<style scoped>

</style>