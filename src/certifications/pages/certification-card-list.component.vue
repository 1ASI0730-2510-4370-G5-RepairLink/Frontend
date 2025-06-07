<script>
import CertificationCard from './CertificationCard.vue';

export default {
  name: "CertificationCardList",
  components: { CertificationCard },
  props: {
    certifications: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>

<template>
  <div class="certification-list">
    <div v-if="certifications.length === 0" class="empty-list">
      <slot name="empty">
        <p>No certifications available</p>
      </slot>
    </div>

    <div v-else class="cards-container">
      <CertificationCard
          v-for="cert in certifications"
          :key="cert.id"
          :certification="cert"
      />
    </div>
  </div>
</template>

<style scoped>
.certification-list {
  margin-top: 1.5rem;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.empty-list {
  text-align: center;
  padding: 2rem;
  color: #757575;
  font-style: italic;
}

@media (max-width: 768px) {
  .cards-container {
    grid-template-columns: 1fr;
  }
}
</style>