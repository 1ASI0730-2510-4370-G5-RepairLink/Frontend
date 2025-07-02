<script>
import {ref} from "vue";

export default {
  name: "service-history",
  data() {
    return {
      bookings: [],
    };

  },

  mounted() {
    const userId = localStorage.getItem('userId');
    fetch('http://localhost:3000/bookings')
        .then(res => res.json())
        .then(data => {
          this.bookings = data.filter(s =>
              ["new", "confirmado", "completado"].includes(s.status.toLowerCase()) &&
              s.customer_id === String(userId)
          );
          console.log(userId);

        });
  }
};
</script>

<template>
  <div class="history-container">
    <h2>Historial de Servicios</h2>
    <p v-if="bookings.length === 0">No hay servicios registrados por el momento.</p>
    <pv-data-table v-else :value="bookings" tableStyle="min-width: 50rem">
      <pv-column field="category" header="Servicio"></pv-column>
      <pv-column field="date" header="Fecha"></pv-column>
      <pv-column header="Estado">
        <template #body="{ data }">
          <pv-tag
              :value="data.status"
              :class="{
              'completed-tag': data.status === 'Completado',
              'cancelled-tag': data.status === 'Cancelado',
              'inprocess-tag': data.status === 'En proceso',
              'new-tag': data.status === 'Nuevo'
            }"
          />
        </template>
      </pv-column>
      <pv-column header="Acciones">
        <template #body="{ data }">
          <div class="actions">
            <pv-button
                label="Track Service"
                icon="pi pi-map-marker"
                class="p-button-info p-button-sm"
                @click=""
            />
            <pv-button
                label="Details"
                icon="pi pi-eye"
                class="p-button-help p-button-sm"
                @click=""
            />
            <pv-button
                label="Cancelar"
                icon="pi pi-times"
                class="p-button-danger p-button-sm"
                @click="cancelService(data.id)"
                :disabled="data.status === 'Cancelado' || data.status === 'Completado'"
            />
          </div>
        </template>
      </pv-column>
    </pv-data-table>
  </div>
</template>

<style scoped>
.history-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: black;
}

.completed-tag {
  background-color: #27ae60;
  color: white;
}

.cancelled-tag {
  background-color: #e74c3c;
  color: white;
}

.inprocess-tag {
  background-color: #00cec9;
  color: white;
}
</style>