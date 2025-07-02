<script>
import { Button, DatePicker, FileUpload, InputText, Rating, Textarea } from "primevue";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import { useToast } from 'primevue/usetoast';

export default {
  name: 'Booking',
  components: {
    InputText,
    Textarea,
    DatePicker,
    FileUpload,
    Rating,
    Button
  },
  setup() {
    const route = useRoute();
    const category = ref(route.query.category || '');
    const name = ref(route.query.name || '');
    const details = ref('');
    const date = ref(route.query.date ? new Date(route.query.date) : null);
    const time = ref('');
    const image = ref(null);

    const technicians = ref([]);
    const reviews = ref([]);
    const filteredTechnicians = ref([]);
    const selectedTechnician = ref(null);

    const toast = useToast();

    const user = ref(null);

    const getAverageRating = (technicianId) => {
      const techReviews = reviews.value.filter(r => r.technician_id === technicianId);
      if (techReviews.length === 0) return 0;

      const total = techReviews.reduce((sum, r) => sum + r.rating, 0);
      return total / techReviews.length;
    };

    onMounted(async () => {
      try {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          user.value = JSON.parse(storedUser);
        }

        const response = await axios.get('http://localhost:3000/users');
        const allUsers = response.data;
        technicians.value = allUsers.filter(u => u.role === 'technician');

        const reviewsResponse = await axios.get('http://localhost:3000/reviews');
        reviews.value = reviewsResponse.data;

        filteredTechnicians.value = technicians.value.filter(
            tech => tech.specialty === category.value
        );
      } catch (error) {
        console.error('Error al cargar técnicos:', error);
      }
    });

    const handleImageUpload = (event) => {
      const file = event.files[0];
      if (!file || !file.type.startsWith("image/")) {
        toast.add({
          severity: 'warn',
          summary: 'Archivo inválido',
          detail: 'Solo se permiten imágenes.',
          life: 3000
        });
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        image.value = reader.result;
      };
      reader.readAsDataURL(file);
    };

    const confirmBooking = async () => {
      if (!category.value || !selectedTechnician.value || !date.value || !time.value) {
        toast.add({
          severity: 'warn',
          summary: 'Campos incompletos',
          detail: 'Por favor completa todos los campos obligatorios.',
          life: 3000
        });
        return;
      }

      const scheduledDateTime = new Date(date.value);
      const [hour, minute] = time.value.split(':');
      scheduledDateTime.setHours(parseInt(hour), parseInt(minute));

      const booking = {
        customer_id: user.value.id,
        technician_id: selectedTechnician.value.id,
        service_id: category.value,
        address_id: user.value.address_id || 'unknown',
        scheduled_time: scheduledDateTime.toISOString(),
        name: name.value,
        description: details.value,
        type: "Home Services",
        status: "new",
        startTime: scheduledDateTime.toISOString(),
        endTime: new Date(scheduledDateTime.getTime() + 2 * 60 * 60 * 1000).toISOString(),
        image: image.value
      };

      try {
        await axios.post('http://localhost:3000/bookings', booking);
        toast.add({
          severity: 'success',
          summary: 'Reserva confirmada',
          detail: `Tu servicio de ${category.value} ha sido agendado.`,
          life: 3000
        });
      } catch (error) {
        console.error('Error al guardar la reserva:', error);
        toast.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No se pudo registrar la reserva.',
          life: 3000
        });
      }
    };

    return {
      name,
      category,
      details,
      date,
      time,
      image,
      selectedTechnician,
      filteredTechnicians,
      handleImageUpload,
      confirmBooking,
      user,
      getAverageRating,
      reviews
    };
  }
};
</script>

<template>
  <div class="booking-container">
    <h2>Reserva de Servicio</h2>
    <p>Servicio: <strong>{{ name }}</strong></p>
    <p v-if="user">Cliente: <strong>{{ user.name }}</strong></p>

    <h3>Técnicos Disponibles</h3>
    <div class="technician-list">
      <div
          v-for="tech in filteredTechnicians"
          :key="tech.name"
          class="technician-item"
          :class="{ selected: tech === selectedTechnician }"
          @click="selectedTechnician = tech"
      >
        <span>{{ tech.name }}</span>
        <Rating :modelValue="getAverageRating(tech.id)" readonly :cancel="false" />
      </div>
    </div>

    <h3>Detalles del dispositivo</h3>
    <Textarea v-model="details" rows="4" cols="30" placeholder="Describe el problema..." />

    <h3>Subir Imagen</h3>
    <FileUpload
        mode="basic"
        auto
        chooseLabel="Seleccionar Imagen"
        accept="image/*"
        customUpload
        @uploader="handleImageUpload"
    />

    <div v-if="image" class="image-preview">
      <h4>Vista previa:</h4>
      <img :src="image" alt="Imagen del dispositivo" width="200" />
    </div>

    <div class="datetime-section">
      <div>
        <label>Fecha:</label>
        <DatePicker v-model="date" dateFormat="dd/mm/yy" showIcon />
      </div>
      <div>
        <label>Hora:</label>
        <input type="time" v-model="time" class="p-inputtext" />
      </div>
    </div>

    <Button label="Confirmar" icon="pi pi-check" @click="confirmBooking" class="mt-4" />
  </div>
  <Button
      label="Volver al inicio"
      icon="pi pi-arrow-left"
      class="mt-2 return-button"
      @click="$router.push('/home-customer')"
  />
  <pv-toast position="top-right" />
</template>

<style scoped>
.booking-container {
  background-color: #cce0ff;
  padding: 2rem;
  border-radius: 8px;
  max-width: 700px;
  margin: auto;
  min-height: 100vh;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.technician-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.technician-item {
  display: flex;
  justify-content: space-between;
  background: #eee;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
}

.technician-item.selected {
  background-color: #c0d6f9;
  font-weight: bold;
}

.datetime-section {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  align-items: center;
}

.mt-4 {
  margin-top: 2rem;
}

.mt-2 {
  margin-top: 1rem;
}

.return-button {
  background-color: #ffa726;
  border: none;
  color: white;
  font-weight: bold;
}

.image-preview {
  margin-top: 1rem;
  text-align: center;
}

</style>