<script>
import {Button as PvButton, Card as PvCard, Tag as PvTag} from "primevue";

export default {
  name: "service-card",
  components: {PvButton, PvTag, PvCard},
  props: ['service'],
  methods:{
    reserveService() {
      this.$emit('openBooking', this.service);
    }
  }
}
</script>

<template>
  <pv-card >
    <template #header>
      <img src="https://via.placeholder.com/150" alt="Service Image" />
    </template>
    <template #title>{{service.name}}</template>
    <template #content>
      <p>{{service.description}}</p>
      <pv-tag :value="service.status"/>
    </template>
    <template #footer>
      <pv-button label="Reservar" icon="pi pi-calendar" @click="reserveService"/>
    </template>
  </pv-card>

</template>

<style scoped>
img{
  width: 100%;
  height: auto;
}
</style>