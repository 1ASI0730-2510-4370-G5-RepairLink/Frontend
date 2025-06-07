<script>
import SkillCard from './SkillCard.vue';

export default {
  name: "SkillCardList",
  components: { SkillCard },
  props: {
    skills: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>

<template>
  <div class="skill-list">
    <div v-if="skills.length === 0" class="empty-list">
      <slot name="empty">
        <p>No skills available</p>
      </slot>
    </div>

    <div v-else class="cards-container">
      <SkillCard
          v-for="skill in skills"
          :key="skill.id"
          :skill="skill"
      />
    </div>
  </div>
</template>

<style scoped>
.skill-list {
  margin-top: 1.5rem;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
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