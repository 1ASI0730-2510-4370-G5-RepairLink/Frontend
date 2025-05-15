<script>
import {Button as PvButton, Column as PvColumn, DataTable as PvDataTable, Tag as PvTag} from "primevue";

export default {
  name: "service-list",
  components: {PvTag, PvButton, PvColumn, PvDataTable},
  data() {
    return {
      services: [],
      visibleServices: [],
      servicesToShow: 4,
    };
  },
  mounted() {
    fetch('https://fakeapi-24rk.onrender.com/services')
        .then(res => res.json())
        .then(data => {
          this.services = data;
          this.visibleServices = this.services.slice(0, this.servicesToShow);
        });
  },
  methods: {
    loadMoreServices() {
      const nextBatch = this.services.slice(this.visibleServices.length, this.visibleServices.length + this.servicesToShow);
      this.visibleServices = [...this.visibleServices, ...nextBatch];
    },
    collapseServices() {
      this.visibleServices = this.services.slice(0, this.servicesToShow);
    },
    reserveService(service) {
      if (service.status === "Reservado") {
        alert(`❌ Error: El servicio "${service.name}" ya está reservado.`);
        return;
      }
      alert(`✅ Has reservado el servicio: ${service.name}`);
      service.status = "Reservado";
    },
  },
};
</script>


<template>
  <div class="service-container">
    <h2 class="title">Servicios 🛠 </h2>

    <div class="service-grid">
      <pv-card v-for="service in visibleServices" :key="service.id" class="service-card">
        <template #header>
          <img :src="service.image" alt="Servicio" class="service-img" />
        </template>
        <template #title>{{ service.name }}</template>
        <template #content>
          <p>{{ service.description }}</p>
          <pv-tag :value="service.status" />
        </template>
        <template #footer>
          <pv-button label="Book Now" icon="pi pi-calendar" @click="reserveService(service)" />
        </template>
      </pv-card>
    </div>

    <div class="buttons-container">
      <pv-button label=" Ver más servicios " icon="pi pi-plus" class="see-more-button" @click="loadMoreServices" v-if="visibleServices.length < services.length" />
      <pv-button label=" Ver menos " icon="pi pi-minus" class="see-less-button" @click="collapseServices" v-if="visibleServices.length > servicesToShow" />
    </div>
  </div>
</template>


<style scoped>
.service-container {
  padding: 5px;

}

.service-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.service-card {
  width: 250px;
  padding: 15px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #90B5FF;
  color: #000000;
}

.service-img {
  width: 100%;
  height: 150px;
  object-fit: contain;
  border-radius: 8px 8px 0 0;
  display: block;
}

.see-more-button {
  margin-top: 20px;
  display: block;
  text-align: center;
}

.service-card h2 {
  color: black;
}

.service-card p {
  color: black;
}
.title
{
  color: black;
}
</style>

