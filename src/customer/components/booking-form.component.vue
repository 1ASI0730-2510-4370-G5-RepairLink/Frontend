<script>
import {Button as PvButton, Dialog as PvDialog, InputText as PvInputText} from "primevue";

export default {
  name: "booking-form",
  components: {PvButton, PvInputText, PvDialog},
  props: ["visible"],
  data(){
    return {
      name: "",
      date: null,
      visible: false,
    };
  },
  methods:{
    confirmBooking(){
      this.$emit("confirmBooking", {
        name: this.name,
        date: this.date,
      });
    },
  }
}
</script>

<template>
  <pv-dialog v-model="visible" modal header="Reservar Servicio" :style="{ width: '400px' }">
    <div class="form-container">
      <label>Nombre:</label>
      <pv-input-text v-model="name" class="full-width" />

      <label>Fecha:</label>
      <pv-calendar v-model="date" class="full-width" />

      <pv-button label="Confirmar Reserva" icon="pi pi-check" class="full-width" @click="confirmBooking" />
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