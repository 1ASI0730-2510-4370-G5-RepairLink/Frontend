<script>
export default {
  name: "service-history",
  data() {
    return {
      users: {
        serviceHistory: [],
      }
    };
  },
  mounted() {
    const userID = JSON.parse(localStorage.getItem('loggedUser'));
        fetch('https://fakeapi-24rk.onrender.com/users')
        .then(res => res.json())
        .then(data => {
          const user =data.find(user => user.id=== userID.id )

          if (user) {
            // If user found, assign their service history
            this.users.serviceHistory = user.serviceHistory;
          } else {
            // Handle case where user isn't found
            console.error('User not found');
            this.users.serviceHistory = [];
          }
        });
  }
}
</script>

<template>
  <div class="history-container">
    <h2>Historial de Servicios</h2>
    <pv-data-table :value="users.serviceHistory" tableStyle="min-width: 50rem">
      <pv-column field="name" header="Servicio"></pv-column>
      <pv-column field="date" header="Fecha"></pv-column>
      <pv-column field="status" header="Estado">

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