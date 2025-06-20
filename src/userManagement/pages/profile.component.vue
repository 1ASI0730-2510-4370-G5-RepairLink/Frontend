<script setup lang="ts">
import { ref, onMounted } from 'vue';

const user = ref({
  name: '',
  email: '',
  phone: '',
  address: '',
  profilePicture: '',
});

onMounted(() => {
  const storedUser = localStorage.getItem('user');

  if (storedUser) {
    user.value = JSON.parse(storedUser);
  } else {
    console.error('No se encontró el usuario en localStorage');
  }
});

const addPaymentMethod = async () => {
  if (!cardNumber.value || !cardExpiry.value || !cardCvv.value || !cardHolderName.value) {
    message.value = 'Please fill in all fields.';
    return;
  }

  isLoading.value = true;

  try {
    const response = await fetch('https://api.example.com/add-card', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cardNumber: cardNumber.value,
        cardExpiry: cardExpiry.value,
        cardCvv: cardCvv.value,
        cardHolderName: cardHolderName.value,
      }),
    });

    const data = await response.json();

    if (data.success) {
      message.value = 'Payment method added successfully!';
    } else {
      message.value = 'Failed to add payment method. Please try again.';
    }
  } catch (error) {
    console.error(error);
    message.value = 'Error adding payment method.';
  } finally {
    isLoading.value = false;
  }
};

const saveRating = () => {
  technicianRating.value = rating.value;
  localStorage.setItem('technicianRating', rating.value.toString());
  alert('Gracias por calificar!');
};
</script>

<template>
  <div class="profile-container">
    <img class="profile-picture" :src="user?.profilePicture || 'https://randomuser.me/api/portraits/men/75.jpg'" alt="Profile Picture" />

    <div class="section">
      <h3>Personal Information</h3>
      <div class="field">
        <label>Name</label>
        <input type="text" :value="user?.name" disabled placeholder="John Doe" />
      </div>
      <div class="field">
        <label>Email</label>
        <input type="email" :value="user?.email" disabled placeholder="john@example.com" />
      </div>
      <div class="field">
        <label>Phone</label>
        <input type="text" :value="user?.phone" disabled placeholder="+123456789" />
      </div>
    </div>

    <div class="section">
      <h3>Saved Addresses</h3>
      <div class="field">
        <label>Address</label>
        <input type="text" :value="user?.address" disabled placeholder="123 Main St, City" />
      </div>
    </div>

    <div class="section">
      <h3>Rate This Technician</h3>
      <Rating v-model="rating" cancel="false" />
      <button @click="saveRating" class="add-method-btn">Save Rating</button>
      <p>Current rating: {{ technicianRating }}</p>
    </div>

    <div class="section">
      <h3>Payment Methods</h3>

      <div v-if="message" :class="{'success-message': message.includes('success'), 'error-message': message.includes('error')}">
        {{ message }}
      </div>

      <div class="payment-method-form" visible="false">
        <div class="field">
          <label>Card Number</label>
          <input type="text" v-model="cardNumber" placeholder="1234 5678 9876 5432" />
        </div>
        <div class="field">
          <label>Card Expiry (MM/YY)</label>
          <input type="text" v-model="cardExpiry" placeholder="MM/YY" />
        </div>
        <div class="field">
          <label>Card CVV</label>
          <input type="text" v-model="cardCvv" placeholder="CVV" />
        </div>
        <div class="field">
          <label>Cardholder Name</label>
          <input type="text" v-model="cardHolderName" placeholder="John Doe" />
        </div>
      </div>
      <button @click="addPaymentMethod" class="add-method-btn">Add Payment Method</button>
    </div>

    <div class="section">
      <label for="profile-image">Change Profile Image</label>
      <input id="profile-image" type="file" @change="handleImageChange" accept="image/*" />
    </div>
  </div>
</template>

<style scoped>
.profile-container {
  max-width: 350px;
  margin: auto;
  text-align: left;
  font-family: Arial, sans-serif;
}

.profile-picture {
  display: block;
  margin: 20px auto;
  border-radius: 50%;
  width: 100px;
  height: 100px;
}

.section {
  margin-bottom: 20px;
}

.field {
  margin-bottom: 10px;
}

label {
  display: block;
  font-size: 14px;
  margin-bottom: 4px;
  color: #333;
}

input {
  width: 100%;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.add-method-btn {
  background-color: #fcd9a0;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 4px;
  color: #333;
}
</style>
