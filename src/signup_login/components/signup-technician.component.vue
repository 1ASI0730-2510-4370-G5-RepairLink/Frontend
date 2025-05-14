
<script>
export default {
  name: "signup-technician",
  data() {
    return {
      selectedSpecialty: null,
      specialties: [
        { label: 'Appliance Repair', value: 'appliance', icon: 'pi pi-cog' },
        { label: 'Plumbing', value: 'plumbing', icon: 'pi pi-wrench' },
        { label: 'TV Mounting', value: 'tv-mounting', icon: 'pi pi-desktop' },
        { label: 'Handyman', value: 'handyman', icon: 'pi pi-home' }
      ]
    }
  },
  methods: {
    selectSpecialty(value) {
      this.selectedSpecialty = value;
    },
    continueToNextStep() {
      // Handle continuation logic here
      console.log('Selected specialty:', this.selectedSpecialty);
      // this.$router.push('/next-step');
    }
  }
}
</script>

<template>
  <div class="create-account-container">
    <div class="group">
      <!--<avatar image="/signup_login/assets/logo-producto.png"></avatar>-->
      <h1 style="color: #dada31;">Welcome! Select your specialty below to get started.</h1>
      <div class="cards-container">
        <Card v-for="specialty in specialties" :key="specialty.value"
              class="specialty-card p-p-3" @click="selectSpecialty(specialty.value)"
              :class="{'selected-card': selectedSpecialty === specialty.value}">
          <div class="card-content">
            <i :class="specialty.icon" class="specialty-icon"></i>
            <h3 class="specialty-label">{{ specialty.label }}</h3>
          </div>
        </Card>
      </div>
      <Button label="Continue" class="continue-button"
              :disabled="!selectedSpecialty" @click="continueToNextStep">Continue</Button>
    </div>
  </div>
</template>

<style scoped>
/* Base Styles */
.create-account-container {
  font-family: 'Roboto', sans-serif;
  position: fixed;
  inset: 0;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 90%;
  max-width: 800px;
}

/* Cards Layout */
.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  width: 120%;
}

/* Card Styles */
.specialty-card {
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 150px;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
}

.specialty-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.selected-card {
  border: 2px solid #3B82F6 !important;
  background-color: #f0f7ff;
}

/* Content Styles */
.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  width: 100%;
}

.specialty-icon {
  font-size: 2.5rem;
  color: #3B82F6;
}

.specialty-label {
  margin: 0;
  font-size: 1.2rem;
  color: #333;
  text-align: center;
  font-weight: 500;
}

/* Ensure PrimeIcons are visible */
.pi {
  font-family: primeicons !important;
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  display: inline-block;
  -webkit-font-smoothing: antialiased;
}

.continue-button {
  font-weight: bold;
  width:200px;
  height: 50px;
  border-radius: 20px 20px 20px 20px;
  background-color: #3B82F6;
  padding: 0.75rem;
  font-size: 1.1rem;
}

.continue-button:disabled {
  background-color: #cccccc !important;
  cursor: not-allowed;
}
</style>