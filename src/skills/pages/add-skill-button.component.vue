<script>
export default {
  name: "AddSkillButton",
  methods: {
    redirectToSkillForm() {
      this.$router.push({ name: 'SkillForm' });
    }
  }
}
</script>

<template>
  <button
      @click="redirectToSkillForm"
      class="add-skill-button"
  >
    <i class="fas fa-plus-circle"></i> Add Skill
  </button>
</template>

<style scoped>
.add-skill-button {
  background-color: #4caf50;
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

.add-skill-button:hover {
  background-color: #388e3c;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.add-skill-button:active {
  transform: translateY(0);
}

.add-skill-button i {
  font-size: 1.2rem;
}
</style>