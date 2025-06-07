<script>
export default {
  name: "AddCertificationButton",
  props: {
    userId: {
      type: String,
      required: true
    }
  },
  methods: {
    redirectToCertificationForm() {
      this.$router.push({
        name: 'CertificationForm',
        query: { userId: this.userId }
      });
    }
  }
}
</script>

<template>
  <button
      @click="redirectToCertificationForm"
      class="add-certification-button"
  >
    <i class="fas fa-plus-circle"></i> Add Certification
  </button>
</template>

<style scoped>
.add-certification-button {
  background-color: #1976d2;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.2s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.add-certification-button:hover {
  background-color: #1565c0;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.add-certification-button:active {
  transform: translateY(0);
}

.add-certification-button i {
  font-size: 1.2rem;
}
</style>