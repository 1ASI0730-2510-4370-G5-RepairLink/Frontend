<script>
import SkillCardList from './SkillCardList.vue';
import { SkillService } from '@/services/skill.service.js';

export default {
  name: "UserSkills",
  components: { SkillCardList },
  props: {
    userId: {
      type: String,
      required: true
    },
    editable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      skills: [],
      allSkills: [],
      loading: false,
      error: null,
      showAddForm: false,
      newSkill: {
        id: null,
        skillId: null,
        experienceYears: null
      }
    };
  },
  created() {
    this.fetchUserSkills();
    this.fetchAllSkills();
  },
  methods: {
    async fetchUserSkills() {
      this.loading = true;
      this.error = null;

      try {
        // This would be replaced with your actual API call
        // For now, we'll simulate with mock data
        this.skills = [
          {
            id: '1',
            name: 'Laptop Repair',
            description: 'Diagnosis and repair of laptop hardware issues',
            category: 'Electronics',
            experienceYears: 3
          },
          {
            id: '2',
            name: 'Refrigerator Maintenance',
            description: 'Troubleshooting and maintenance of refrigeration systems',
            category: 'Appliances',
            experienceYears: 5
          }
        ];

        // Actual implementation might look like:
        // const response = await SkillService.getUserSkills(this.userId);
        // this.skills = response.data;
      } catch (error) {
        console.error('Error fetching skills:', error);
        this.error = 'Failed to load skills.';
      } finally {
        this.loading = false;
      }
    },

    async fetchAllSkills() {
      try {
        // Simulate fetching all available skills
        this.allSkills = [
          { id: '1', name: 'Laptop Repair', category: 'Electronics' },
          { id: '2', name: 'Smartphone Repair', category: 'Electronics' },
          { id: '3', name: 'Refrigerator Maintenance', category: 'Appliances' },
          { id: '4', name: 'Washing Machine Repair', category: 'Appliances' },
          { id: '5', name: 'Power Tool Repair', category: 'Tools' },
        ];

        // Actual implementation:
        // const response = await SkillService.getAll();
        // this.allSkills = response.data;
      } catch (error) {
        console.error('Error fetching all skills:', error);
      }
    },

    openAddForm() {
      this.showAddForm = true;
      this.newSkill = {
        id: null,
        skillId: null,
        experienceYears: null
      };
    },

    addSkill() {
      if (!this.newSkill.skillId) return;

      const selectedSkill = this.allSkills.find(s => s.id === this.newSkill.skillId);

      if (selectedSkill) {
        this.skills.push({
          ...selectedSkill,
          experienceYears: this.newSkill.experienceYears || 1
        });
      }

      this.showAddForm = false;
    },

    removeSkill(skillId) {
      this.skills = this.skills.filter(skill => skill.id !== skillId);
    }
  }
}
</script>

<template>
  <div class="user-skills">
    <div class="header">
      <h2>Skills & Expertise</h2>
      <button
          v-if="editable"
          @click="openAddForm"
          class="add-button"
      >
        <i class="fas fa-plus"></i> Add Skill
      </button>
    </div>

    <div v-if="loading" class="loading-state">
      <i class="fas fa-spinner fa-spin"></i> Loading skills...
    </div>

    <div v-if="error" class="error-state">
      <i class="fas fa-exclamation-triangle"></i> {{ error }}
      <button @click="fetchUserSkills" class="retry-button">Retry</button>
    </div>

    <div v-if="showAddForm" class="skill-form">
      <div class="form-group">
        <label>Select Skill</label>
        <select v-model="newSkill.skillId" class="skill-select">
          <option value="" disabled>Select a skill</option>
          <option
              v-for="skill in allSkills"
              :key="skill.id"
              :value="skill.id"
              :disabled="skills.some(s => s.id === skill.id)"
          >
            {{ skill.name }} ({{ skill.category }})
          </option>
        </select>
      </div>

      <div class="form-group">
        <label>Years of Experience</label>
        <input
            type="number"
            v-model.number="newSkill.experienceYears"
            min="1"
            max="50"
            class="experience-input"
        >
      </div>

      <div class="form-actions">
        <button @click="showAddForm = false" class="cancel-button">Cancel</button>
        <button @click="addSkill" class="add-skill-button">Add Skill</button>
      </div>
    </div>

    <SkillCardList :skills="skills">
      <template #empty>
        <div class="empty-skills">
          <i class="fas fa-tools"></i>
          <p>No skills added yet</p>
          <button v-if="editable" @click="openAddForm" class="add-first-button">
            Add Your First Skill
          </button>
        </div>
      </template>

      <template v-if="editable" v-slot:default="{ skill }">
        <button
            @click="removeSkill(skill.id)"
            class="remove-skill-button"
            aria-label="Remove skill"
        >
          <i class="fas fa-times"></i>
        </button>
      </template>
    </SkillCardList>
  </div>
</template>

<style scoped>
.user-skills {
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

.add-button {
  background-color: #1976d2;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: 500;
}

.add-button i {
  margin-right: 0.5rem;
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

.skill-form {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #555;
}

.skill-select, .experience-input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}

.cancel-button, .add-skill-button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.cancel-button {
  background-color: #f5f5f5;
  color: #555;
}

.add-skill-button {
  background-color: #4caf50;
  color: white;
}

.empty-skills {
  text-align: center;
  padding: 2rem;
  color: #757575;
}

.empty-skills i {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #bdbdbd;
}

.add-first-button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #1976d2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.remove-skill-button {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #f44336;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .add-button {
    width: 100%;
  }
}
</style>