<script>
export default {
  name: "service-history",
  data() {
    return {
      serviceHistory: [],
    };
  },
  mounted() {
    fetch('https://fakeapi-24rk.onrender.com/serviceHistory')
        .then(res => res.json())
        .then(data => {
          this.serviceHistory = data;
        });
  }
}
</script>

<template>
  <div class="history-container">
    <h2>Historial de Servicios</h2>
    <pv-data-table :value="serviceHistory" tableStyle="min-width: 50rem">
      <pv-column field="name" header="Servicio"></pv-column>
      <pv-column field="date" header="Fecha"></pv-column>
      <pv-column field="status" header="Estado">
        <template #body="{ data }">
          <pv-tag :value="data.status" />
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

</style>