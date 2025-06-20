<script>
import { Button, DatePicker, FileUpload, InputText, Rating, Textarea } from "primevue";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import { useToast } from 'primevue/usetoast';

export default {
  name: 'BookServicePage',
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
    const filteredTechnicians = ref([]);
    const selectedTechnician = ref(null);

    const toast = useToast();

    onMounted(async () => {
      try {
        const response = await axios.get('http://localhost:3000/technicians');
        technicians.value = response.data;
        filteredTechnicians.value = technicians.value.filter(tech =>
            tech.services.includes(category.value)
        );
      } catch (error) {
        console.error('Error al cargar técnicos:', error);
      }
    });

    const handleImageUpload = (event) => {
      const file = event.files[0];
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

      const booking = {
        name: name.value,
        category: category.value,
        technician: selectedTechnician.value,
        details: details.value,
        image: image.value,
        date: date.value,
        time: time.value,
        status: "Esperando"
      };

      try {
        await axios.post('http://localhost:3000/scheduledServices', booking);
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
      confirmBooking
    };
  }
};
</script>

<template>
  <div class="booking-container">
    <h2>Reserva de Servicio</h2>
    <p>Servicio: <strong>{{ category }}</strong></p>
    <p>Cliente: {{ name }}</p>

    <h3>Técnicos Disponibles</h3>
    <div class="technician-list">
      <div
          v-for="tech in filteredTechnicians"
          :key="tech.name"
          class="technician-item"
          :class="{ selected: tech.name === selectedTechnician }"
          @click="selectedTechnician = tech.name"
      >
        <span>{{ tech.name }}</span>
        <Rating :modelValue="tech.rating" readonly :cancel="false" />
      </div>
    </div>

    <h3>Detalles del dispositivo</h3>
    <Textarea v-model="details" rows="4" cols="30" placeholder="Describe el problema..." />

    <h3>Subir Imagen</h3>
    <FileUpload mode="basic" auto chooseLabel="Subir" customUpload @uploader="handleImageUpload" />

    <div class="datetime-section">
      <div>
        <label>Fecha:</label>
        <DatePicker v-model="date" dateFormat="dd/mm/yy" showIcon />
      </div>
      <div>
        <label>Hora:</label>
        <InputText v-model="time" placeholder="Ej. 17:00" />
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
</style>