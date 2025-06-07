<script>
export default {
  name: "SkillCard",
  props: {
    skill: {
      type: Object,
      required: true,
      validator: skill => skill.name && skill.category
    }
  },
  computed: {
    categoryClass() {
      return `category-${this.skill.category.toLowerCase().replace(/\s+/g, '-')}`;
    }
  }
}
</script>

<template>
  <div class="skill-card">
    <div class="skill-header">
      <h3 class="skill-name">{{ skill.name }}</h3>
      <span :class="['skill-category', categoryClass]">
        {{ skill.category }}
      </span>
    </div>

    <p v-if="skill.description" class="skill-description">
      {{ skill.description }}
    </p>

    <div class="skill-footer">
      <span class="skill-experience" v-if="skill.experienceYears">
        <i class="fas fa-clock"></i> {{ skill.experienceYears }} year{{ skill.experienceYears > 1 ? 's' : '' }} experience
      </span>
    </div>
  </div>
</template>

<style scoped>
.skill-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.25rem;
  height: 100%;
  transition: transform 0.2s;
  border-left: 4px solid #1976d2;
}

.skill-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
}

.skill-name {
  margin: 0;
  font-size: 1.1rem;
  color: #2c3e50;
  flex: 1;
}

.skill-category {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  background-color: #e3f2fd;
  color: #1976d2;
}

.skill-description {
  color: #555;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.skill-footer {
  border-top: 1px solid #f0f0f0;
  padding-top: 0.75rem;
  font-size: 0.85rem;
  color: #666;
}

.skill-experience i {
  margin-right: 0.25rem;
}

/* Category-specific styles */
.category-electronics {
  background-color: #e8f5e9 !important;
  color: #2e7d32 !important;
}

.category-appliances {
  background-color: #fff8e1 !important;
  color: #f57f17 !important;
}

.category-tools {
  background-color: #e3f2fd !important;
  color: #1565c0 !important;
}

.category-computers {
  background-color: #f3e5f5 !important;
  color: #6a1b9a !important;
}

.category-plumbing {
  background-color: #e0f7fa !important;
  color: #00838f !important;
}
</style>