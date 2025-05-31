<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { BookingService } from '@/booking/services/booking.service.js';

const route = useRoute();
const booking = ref(null);
const bookingService = new BookingService();

onMounted(() => {
  const id = route.params.id;
  bookingService.getById(id)
      .then(response => {
        if (response && typeof response.data === 'object') {
          booking.value = response.data;
        } else {
          booking.value = null;
          console.warn('Respuesta inesperada:', response);
        }
      })
      .catch(error => {
        console.error('Error cargando booking:', error);
      });
});

</script>

<template>
  <div class="container">
    <main class="details">
      <button class="close-btn">×</button>

      <h2>Appointment Details</h2>

      <section>
        <h3>Information</h3>
        <p><strong>Date and Time:</strong> {{ booking?.date || 'Loading...' }}</p>
        <p><strong>Duration:</strong> {{ booking?.duration || '-' }}</p>
        <p><strong>Service Type:</strong> {{ booking?.type || '-' }}</p>
        <p><strong>Status:</strong> {{ booking?.type || '-' }}</p>
        <p><strong>Address:</strong> {{ booking?.address || '-' }}</p>
      </section>

      <section>
        <h3>Technician Details</h3>
        <p><strong>Technician Name:</strong> {{ booking?.technician?.name || '-' }}</p>
        <p>
          <strong>Technician Profile:</strong>
          <a href="#" class="profile-link">Ver Profile</a>
          <img :src="booking?.technician?.photo" alt="Technician photo" class="tech-photo" />
        </p>
      </section>

      <section>
        <h3>User Comments or Notes</h3>
        <p>{{ booking?.userComments || 'No comments' }}</p>
      </section>

      <section class="price-details">
        <h4>Technician Price details</h4>
        <p>Cost S/. {{ booking?.price || '0' }}</p>
        <p>{{ booking?.priceDetails || 'Additional repair details' }}</p>
      </section>

      <button class="btn-set-price">Set Price</button>
    </main>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  min-height: 100vh;
  font-family: Arial, sans-serif;
}

.sidebar {
  width: 250px;
  background-color: #ffcc80;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.logo {
  font-weight: bold;
  font-size: 18px;
  color: #42a5f5;
  margin-bottom: 20px;
}

.sidebar nav ul {
  list-style: none;
  padding: 0;
}

.sidebar nav ul li {
  margin: 15px 0;
  cursor: pointer;
  font-size: 14px;
}

.logout {
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.details {
  flex: 1;
  padding: 40px;
  background: #fff;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 15px;
  left: 15px;
  border: none;
  background: black;
  color: white;
  padding: 4px 8px;
  cursor: pointer;
  font-size: 18px;
}

h2 {
  color: #4a90e2;
  margin-bottom: 20px;
}

section {
  margin-bottom: 25px;
}

section h3 {
  font-weight: bold;
  margin-bottom: 8px;
}

.technician-profile {
  display: flex;
  align-items: center;
}

.profile-link {
  font-weight: bold;
  margin-right: 15px;
  color: black;
  text-decoration: underline;
  cursor: pointer;
}

.tech-photo {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  vertical-align: middle;
}

.price-details {
  background-color: #ddd;
  padding: 15px;
  font-size: 14px;
  color: #555;
}

.btn-set-price {
  background-color: #ffcc80;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  color: #333;
}
</style>