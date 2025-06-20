<script>
import Button from 'primevue/button';

export default {
  name: 'WelcomePage',
  components: {
    Button
  },
  methods: {
    navigateToCustomerLogin() {
      this.$router.push('/login');
    },
    navigateToTechnicianLogin() {
      this.$router.push('/login');
    }
  }
}
</script>

<template>
  <div class="login-container">
    <div class="logo-container">
      <img src="/logo-producto.png" alt="Logo" class="logo" />
      <h1>Welcome to RepairLink</h1>
      <p class="tagline">Your go-to home care experts</p>
    </div>

    <div class="button-group">
      <Button
          label="I'm a Customer"
          class="p-button-rounded p-button-lg role-button customer-button"
          @click="navigateToCustomerLogin"
      />
      <Button
          label="I'm a Technician"
          class="p-button-rounded p-button-lg role-button technician-button"
          @click="navigateToTechnicianLogin"
      />
    </div>
  </div>
</template>

<style scoped>
.login-container {
  font-family: 'Roboto', sans-serif !important;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  background: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}


.logo-container {

  background-color: #FFD38F;
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.logo-container h1 {
  color: #90b5ff;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.tagline {
  color: #90b5ff;
  font-size: 1.1rem;
}

.button-group {
  width: 50vw;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.role-button {
  width: 40%;
  max-width: 300px;
  padding: 1rem;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.customer-button {

  background-color: #90b5ff;
  border: 1px solid #90b5ff;
}

.customer-button:hover {
  background-color: #90b5ff;
  border-color: #90b5ff;
}

.technician-button {

  background-color: #2c3e50;
  border: 1px solid #2c3e50;
}

.technician-button:hover {
  background-color: #90b5ff;
  border-color: #90b5ff;
}
.logo-container {
  text-align: center;
  padding: 15px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  margin-bottom: 15px;
}

.logo {
  max-width: 120px;
  height: auto;
  display: inline-block;
}
</style>