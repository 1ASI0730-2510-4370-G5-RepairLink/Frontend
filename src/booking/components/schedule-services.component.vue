<script>
export default {
  name: "ScheduleServices",
  data() {
    return {
      services: []
    };
  },
  mounted() {
    this.loadServices();
  },
  methods: {
    loadServices() {
      fetch("http://localhost:3000/scheduledServices")
          .then(res => res.json())
          .then(data => {
            this.services = data;
          });
    },
    viewDetails(service) {
      alert(`Detalles del servicio:\n${service.details}`);
    },
    trackService(service) {
      alert(`Seguimiento en curso para: ${service.category}\nTécnico: ${service.technician}`);
    },
    cancelService(id) {
      const target = this.services.find(s => s.id === id);
      if (!target) return;

      fetch(`http://localhost:3000/scheduledServices/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "Cancelado" })
      }).then(() => {
        target.status = "Cancelado";
      });
    }
  }
};
</script>

<template>
  <div class="schedule-container">
    <h2>Servicios Programados</h2>
    <pv-data-table :value="services" tableStyle="min-width: 50rem">
      <pv-column field="name" header="Cliente"></pv-column>
      <pv-column field="category" header="Servicio"></pv-column>
      <pv-column field="technician" header="Técnico"></pv-column>
      <pv-column field="date" header="Fecha"></pv-column>
      <pv-column field="time" header="Hora"></pv-column>
      <pv-column field="status" header="Estado"></pv-column>

      <pv-column header="Acciones">
        <template #body="{ data }">
          <div class="actions">
            <pv-button
                label="Track Service"
                icon="pi pi-map-marker"
                class="p-button-info p-button-sm"
                @click="trackService(data)"
            />
            <pv-button
                label="Details"
                icon="pi pi-eye"
                class="p-button-help p-button-sm"
                @click="viewDetails(data)"
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
.schedule-container {
  padding: 2rem;
  color: #000;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
</style>