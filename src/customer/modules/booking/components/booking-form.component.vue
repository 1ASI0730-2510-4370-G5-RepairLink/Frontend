<script>
import {
  Button as PvButton,
  Dialog as PvDialog,
  InputText as PvInputText,
  DatePicker
} from "primevue";

export default {
  name: "booking-form",
  components: { PvButton, PvInputText, PvDialog, DatePicker },
  props: {
    visible: Boolean,
    service: Object
  },
  data() {
    return {
      name: "",
      date: null
    };
  },
  methods: {
    confirmBooking() {
      this.$emit("update:visible", false); // cerrar el modal correctamente
      const router = this.$router;
      router.push({
        name: "BookServicePage",
        query: {
          name: this.name,
          date: this.date,
          category: this.service?.name || ""
        }
      });
    }
  }
};
</script>

<template>
  <pv-dialog
      :visible="visible"
      modal
      header="Reservar Servicio"
      :style="{ width: '400px' }"
      @update:visible="$emit('update:visible', $event)"
  >
    <div class="form-container">
      <label>Nombre:</label>
      <pv-input-text v-model="name" class="full-width" />

      <label>Fecha:</label>
      <pv-calendar v-model="date" class="full-width" />

      <pv-button
          label="Continuar"
          icon="pi pi-arrow-right"
          class="full-width"
          @click="confirmBooking"
      />
    </div>
  </pv-dialog>
</template>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.full-width {
  width: 100%;
}
</style>
