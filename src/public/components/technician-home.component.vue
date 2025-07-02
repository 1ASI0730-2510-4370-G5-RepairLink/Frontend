<script setup lang="ts">
import heroImageTech from '@/assets/heroTech.png';
import daleImage from '@/assets/dale.png';
import {BookingService}  from "@/booking/services/booking.service.js";
import {Booking} from "@/booking/model/booking.entity.js";
import {BookingDetails} from "@/booking/pages/booking-details.component.vue";
import {onMounted, ref} from 'vue';
import { useRouter } from 'vue-router';

const services = ref<Booking[]>([]);

onMounted(() => {
  const bookingService = new BookingService();
  bookingService.getAll()
      .then(response => {
        if (Array.isArray(response)) {
          services.value = response;
        } else if (response && Array.isArray(response.data)) {
          services.value = response.data;
        } else {
          services.value = [];
          console.warn('Respuesta inesperada:', response);
        }
      })
      .catch(error => {
        console.error('Error cargando bookings:', error);
      });
});

function formatDateRange(startISO: string, endISO: string): string {
  const optionsDate: Intl.DateTimeFormatOptions = { month: 'short', day: '2-digit', year: 'numeric' };
  const optionsTime: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', hour12: false };

  const startDate = new Date(startISO);
  const endDate = new Date(endISO);

  const dateStr = startDate.toLocaleDateString('en-US', optionsDate).toUpperCase();
  const startTimeStr = startDate.toLocaleTimeString('en-US', optionsTime);
  const endTimeStr = endDate.toLocaleTimeString('en-US', optionsTime);

  return `${dateStr} ${startTimeStr} - ${endTimeStr}`;
}

function formatTimeRange(startISO: string, endISO: string): { formattedDate: string, duration: string } {
  const optionsDate: Intl.DateTimeFormatOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
  const optionsTime: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', hour12: false };

  const startDate = new Date(startISO);
  const endDate = new Date(endISO);

  const dateStr = startDate.toLocaleDateString('en-GB', optionsDate);

  const startTimeStr = startDate.toLocaleTimeString('en-GB', optionsTime);
  const endTimeStr = endDate.toLocaleTimeString('en-GB', optionsTime);

  const durationInMillis = endDate.getTime() - startDate.getTime();
  const durationInHours = Math.floor(durationInMillis / (1000 * 60 * 60));
  const durationInMinutes = Math.floor((durationInMillis % (1000 * 60 * 60)) / (1000 * 60));

  const durationStr = `${durationInHours} horas ${durationInMinutes} minutos`;

  return {
    formattedDate: `${dateStr} ${startTimeStr} - ${endTimeStr} hrs`,
    duration: durationStr,
  };
}

const selectedBooking = ref<Booking | null>(null);
const showDetails = ref(false);
const router = useRouter();

function openDetail(service: Booking) {
  router.push({ name: 'booking-details', params: { id: service.id } });
}

function closeDetail() {
  showDetails.value = false;
  selectedBooking.value = null;
}

</script>
<template>
  <div style="font-family: Roboto, sans-serif; max-width: 900px; margin: auto; padding: 10px;">
    <div style="text-align: left; color: #9abaff; font-weight: 500; margin-bottom: 20px;">
      Expertos en soluciones, dedicados a<br /> su satisfacción
    </div>

    <div style="text-align: center; margin-bottom: 20px;">
      <img :src="heroImageTech" alt="service" style="width: 220px; height: 220px;" />
    </div>

    <div style="color: #9abaff; font-weight: 600; margin-bottom: 15px;">
      Servicios Asinados
    </div>

    <div class="cards-container">
      <div
          v-for="(service, index) in services"
          :key="service.id"
          class="service-card"
      >
        <div class="header">
          <span class="status">Est. serv.: {{ service.status }}</span>
        </div>

        <h3 class="service-name">{{ service.type }}</h3>

        <button class="btn-detail" @click="openDetail(service)">Ver Detalles</button>

        <div class="footer">
          <span class="time">{{ formatDateRange(service.startTime, service.endTime) }}</span>
        </div>

        <div class="illustration">
          <img :src="daleImage" alt="service illustration" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.service-card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 15px rgba(0,0,0,0.1);
  width: 280px;
  padding: 16px;
  position: relative;
  overflow: hidden;
  font-family: 'Poppins', sans-serif;
}

.header {
  font-size: 12px;
  color: #888;
  margin-bottom: 8px;
}

.status {
  background: #f1f1f1;
  padding: 4px 10px;
  border-radius: 12px;
}

.service-name {
  font-size: 18px;
  margin: 0 0 12px 0;
  color: #222;
}

.btn-detail {
  background: transparent;
  border: 1.5px solid #2f52e0;
  border-radius: 12px;
  padding: 6px 14px;
  color: #2f52e0;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-detail:hover {
  background-color: #2f52e0;
  color: white;
}

.footer {
  margin-top: 16px;
  font-size: 14px;
  color: #2f52e0;
  display: flex;
  justify-content: space-between;
  font-weight: 600;
}

.illustration {
  position: absolute;
  right: 10px;
  bottom: 40px;
  width: 100px;
  opacity: 0.8;
}

.illustration img {
  max-width: 70%;
  height: auto;
}
</style>