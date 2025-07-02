<script>
import {
  Button as PvButton,
  Column as PvColumn,
  DataTable as PvDataTable,
  Tag as PvTag,
  Carousel as PvCarousel
} from "primevue";
import { useRouter } from 'vue-router';

export default {
  name: "service-list",
  components: { PvTag, PvButton, PvColumn, PvDataTable,PvCarousel },
  data() {
    return {
      services: [],
      visibleServices: [],
      servicesToShow: 4,
      router: null
    };
  },
  mounted() {
    this.router = this.$router;
    fetch('http://localhost:3000/services')
        .then(res => res.json())
        .then(data => {
          this.services = data;
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

    goToBooking(service) {
      this.router.push({
        name: "booking",
        query: {
          name: service.name,
          category: service.id,
          date: new Date().toISOString().split('T')[0]
        }
      });
    }
  }
};
</script>

<template>
  <div class="service-container">
    <pv-carousel
        :value="services"
        :numVisible="3"
        :numScroll="1"
        circular
        :responsiveOptions="[
        { breakpoint: '1024px', numVisible: 2, numScroll: 1 },
        { breakpoint: '600px', numVisible: 1, numScroll: 1 }
      ]"
    >
      <template #item="{ data: service }">
        <pv-card class="service-card">
          <template #header>
            <img :src="service.image" alt="Servicio" class="service-img" />
          </template>
          <template #title>{{ service.name }}</template>
          <template #content>
            <p>{{ service.description }}</p>
          </template>
          <template #footer>
            <pv-button
                label="Reservar Ahora"
                icon="pi pi-calendar"
                @click="goToBooking(service)"
            />
          </template>
        </pv-card>
      </template>
    </pv-carousel>
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

.service-container {
  padding: 1rem;
}

.service-card {
  margin: 0 auto;
  width: 250px;
  text-align: center;
  background-color: #90B5FF;
  color: black;
  border-radius: 8px;
}

.service-img {
  width: 100%;
  height: 150px;
  object-fit: contain;
  border-radius: 8px 8px 0 0;
}

.title {
  text-align: center;
  color: black;
  margin-bottom: 1rem;
}
</style>
