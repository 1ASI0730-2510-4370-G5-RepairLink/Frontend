<script>
export default {
  name: "service-history",
  data() {
    return {
      serviceHistory: [],
    };
  },
  mounted() {
    fetch('http://localhost:3000/scheduledServices')
        .then(res => res.json())
        .then(data => {
          this.serviceHistory = data.filter(s =>
              ["Completado", "Cancelado", "En proceso"].includes(s.status)
          );
        });
  }
};
</script>

<template>
  <div class="history-container">
    <h2>Historial de Servicios</h2>
    <pv-data-table :value="serviceHistory" tableStyle="min-width: 50rem">
      <pv-column field="category" header="Servicio"></pv-column>
      <pv-column field="date" header="Fecha"></pv-column>
      <pv-column header="Estado">
        <template #body="{ data }">
          <pv-tag
              :value="data.status"
              :class="{
              'completed-tag': data.status === 'Completado',
              'cancelled-tag': data.status === 'Cancelado',
              'inprocess-tag': data.status === 'En proceso'
            }"
          />
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
