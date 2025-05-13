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
     <image>  </image>
     <h1 style="color: #d1d10d;">Welcome! Select your specialty below to get started.</h1>
     <div style="display: flex; flex-direction: column">

     </div>
   </div>
  </div>
</template>

<style scoped>
  .create-account-container {
    background: #ffffff;
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

  .group {
    width: 100vw;
    height: 100vh;
    background-color: #ffffff;
    display: flex;
    flex-direction: column; /* Stack buttons vertically */
    justify-content: center; /* Vertical centering */
    align-items: center; /* Horizontal centering */
    gap: 1rem; /* Space between buttons */
  }

</style>