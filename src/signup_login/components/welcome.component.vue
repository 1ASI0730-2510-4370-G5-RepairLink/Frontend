<script>
  import Button from 'primevue/button';

  export default {
    name: 'WelcomePage',
    components: {
      Button
    },
    methods: {
      navigateToCustomerLogin() {
        // Navigate to customer login
        this.$router.push('/login');
      },
      navigateToTechnicianLogin() {
        // Navigate to technician login
        this.$router.push('/login');
      }
    }
  }
</script>

<template>
  <div class="login-container">
      <div class="logo-container">
        <h1>RepairLink</h1>
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

    background-color: peachpuff;
    width: 50vw;
    height: 100vh;
    display: flex;
    flex-direction: column; /* Stack vertically */
    justify-content: center; /* Vertical centering */
    align-items: center; /* Horizontal centering */
    text-align: center; /* Backup for text elements */
  }

  .logo-container h1 {
    color: #2c3e50;
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  .tagline {
    color: #7f8c8d;
    font-size: 1.1rem;
  }

  .button-group {
    width: 50vw;
    height: 100vh;
    background-color: #ffffff;
    display: flex;
    flex-direction: column; /* Stack buttons vertically */
    justify-content: center; /* Vertical centering */
    align-items: center; /* Horizontal centering */
    gap: 1rem; /* Space between buttons */
  }

  .role-button {
    width: 40%;
    max-width: 300px;
    padding: 1rem;
    font-size: 1.1rem;
    transition: all 0.3s ease;
  }

  .customer-button {

    background-color: #42b983;
    border: 1px solid #42b983;
  }

  .customer-button:hover {
    background-color: #3aa876;
    border-color: #3aa876;
  }

  .technician-button {

    background-color: #2c3e50;
    border: 1px solid #2c3e50;
  }

  .technician-button:hover {
    background-color: #1a252f;
    border-color: #1a252f;
  }
</style>