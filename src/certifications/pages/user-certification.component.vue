<script>
import CertificationCardList from '/certification-card-list.component.vue';
import { CertificationService } from '../services/certification.service.js';

export default {
  name: "user-certifications",
  components: { CertificationCardList },
  props: {
    userId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      certifications: [],
      loading: false,
      error: null
    };
  },
  created() {
    this.fetchCertifications();
  },
  methods: {
    async fetchCertifications() {
      this.loading = true;
      this.error = null;

      try {
        const response = await CertificationService.getByUserId(this.userId);
        this.certifications = response.data;
      } catch (error) {
        console.error('Error fetching certifications:', error);
        this.error = 'Failed to load certifications.';
      } finally {
        this.loading = false;
      }
    }
  }
}
</script>

<template>
  <div class="user-certifications">
    <div class="header">
      <h2>Certifications</h2>
      <button v-if="!loading" @click="fetchCertifications" class="refresh-button">
        <i class="fas fa-sync-alt"></i>
      </button>
    </div>

    <div v-if="loading" class="loading-state">
      <i class="fas fa-spinner fa-spin"></i> Loading certifications...
    </div>

    <div v-if="error" class="error-state">
      <i class="fas fa-exclamation-triangle"></i> {{ error }}
      <button @click="fetchCertifications" class="retry-button">Retry</button>
    </div>

    <CertificationCardList
        v-if="!loading && !error"
        :certifications="certifications"
    >
      <template #empty>
        <p>This user hasn't added any certifications yet</p>
      </template>
    </CertificationCardList>
  </div>
</template>

<style scoped>
.user-certifications {
  margin-top: 2rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

h2 {
  margin: 0;
  font-size: 1.25rem;
  color: #2c3e50;
}

.refresh-button {
  background: none;
  border: none;
  color: #1976d2;
  cursor: pointer;
  font-size: 1rem;
}

.loading-state, .error-state {
  text-align: center;
  padding: 1.5rem;
}

.error-state {
  color: #c62828;
}

.retry-button {
  display: block;
  margin: 0.5rem auto 0;
  padding: 0.25rem 0.75rem;
  background-color: #1976d2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>