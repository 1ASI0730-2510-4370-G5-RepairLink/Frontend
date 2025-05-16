<script>
import {DatePicker as PvCalendar} from "primevue";
export default {
  name: "schedule-services",
  components: {PvCalendar},
  data() {
    return {
      users: {
        scheduledServices: [],
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
            this.users.scheduledServices = user.scheduledServices;
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
  <div class="scheduled-container">
    <h2>Servicios Programados</h2>
    <pv-data-table :value="users.scheduledServices" tableStyle="background-color: #F0F0F0; min-width: 50rem;">
      <pv-column field="name" header="Servicio"></pv-column>
      <pv-column field="date" header="Fecha"></pv-column>
      <pv-column header="Estado">
        <template #body>
          <pv-tag value="Esperando" class="waiting-tag" />
        </template>
      </pv-column>
    </pv-data-table>
  </div>
  <div class="buttons-row">
    <pv-button label="Track Service" icon="pi pi-map-marker" class="left-button" />
    <pv-button label="Detail" icon="pi pi-info-circle" class="right-button" />
  </div>
</template>


<style scoped>
.scheduled-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: black;
}

.waiting-tag {
  background: #f1c40f;
  color: white;
}

.buttons-row {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding: 0 20px;
}

.left-button {
  align-self: flex-start;
}

.right-button {
  align-self: flex-end;
}
</style>