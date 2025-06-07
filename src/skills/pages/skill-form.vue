<script>
import { Skill } from '@/models/skill.model.js';

export default {
  name: "SkillForm",
  props: {
    skill: {
      type: Object,
      default: () => new Skill()
    }
  },
  emits: ['submit', 'cancel'],
  data() {
    return {
      formData: { ...this.skill },
      errors: {},
      categories: [
        'Electronics',
        'Appliances',
        'Tools',
        'Computers',
        'Plumbing',
        'Electrical',
        'HVAC',
        'Automotive',
        'Furniture',
        'Other'
      ]
    };
  },
  watch: {
    skill: {
      handler(newVal) {
        this.formData = { ...newVal };
      },
      deep: true
    }
  },
  computed: {
    isEditing() {
      return !!this.formData.id;
    }
  },
  methods: {
    validate() {
      this.errors = {};
      let isValid = true;

      if (!this.formData.name?.trim()) {
        this.errors.name = "Skill name is required";
        isValid = false;
      }

      if (!this.formData.category) {
        this.errors.category = "Category is required";
        isValid = false;
      }

      return isValid;
    },

    handleSubmit() {
      if (!this.validate()) return;

      // Ensure createdAt is set for new skills
      if (!this.isEditing) {
        this.formData.createdAt = new Date().toISOString();
      }

      this.$emit('submit', this.formData);
    },

    handleCancel() {
      this.$emit('cancel');
    }
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="skill-form">
    <h3>{{ isEditing ? 'Edit Skill' : 'Add New Skill' }}</h3>

    <div class="form-group">
      <label>Skill Name*</label>
      <input
          type="text"
          v-model="formData.name"
          placeholder="e.g., Laptop Repair"
          :class="{ 'error': errors.name }"
      >
      <div v-if="errors.name" class="error-message">{{ errors.name }}</div>
    </div>

    <div class="form-group">
      <label>Category*</label>
      <select
          v-model="formData.category"
          :class="{ 'error': errors.category }"
      >
        <option value="" disabled>Select a category</option>
        <option v-for="category in categories" :key="category" :value="category">
          {{ category }}
        </option>
      </select>
      <div v-if="errors.category" class="error-message">{{ errors.category }}</div>
    </div>

    <div class="form-group">
      <label>Description</label>
      <textarea
          v-model="formData.description"
          placeholder="Brief description of the skill"
          rows="3"
      ></textarea>
      <div class="hint">What does this skill involve? What problems does it solve?</div>
    </div>

    <div class="form-actions">
      <button type="button" @click="handleCancel" class="cancel-button">Cancel</button>
      <button type="submit" class="submit-button">
        {{ isEditing ? 'Update' : 'Add' }} Skill
      </button>
    </div>
  </form>
</template>

<style scoped>
.skill-form {
  background-color: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
}

h3 {
  margin-top: 0;
  margin-bottom: 1.5rem;
  color: #2c3e50;
  text-align: center;
}

.form-group {
  margin-bottom: 1.25rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #555;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.2s;
}

.form-group select {
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1rem;
}

.form-group textarea {
  min-height: 100px;
  resize: vertical;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: #1976d2;
  outline: none;
  box-shadow: 0 0 0 2px rgba(25, 118, 210, 0.2);
}

.form-group input.error,
.form-group select.error {
  border-color: #f44336;
}

.form-group input.error:focus,
.form-group select.error:focus {
  box-shadow: 0 0 0 2px rgba(244, 67, 54, 0.2);
}

.error-message {
  color: #f44336;
  font-size: 0.85rem;
  margin-top: 0.25rem;
}

.hint {
  color: #757575;
  font-size: 0.85rem;
  margin-top: 0.25rem;
  font-style: italic;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
}

.cancel-button, .submit-button {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;
}

.cancel-button {
  background-color: #f5f5f5;
  color: #555;
}

.cancel-button:hover {
  background-color: #e0e0e0;
}

.submit-button {
  background-color: #1976d2;
  color: white;
}

.submit-button:hover {
  background-color: #1565c0;
}

@media (max-width: 768px) {
  .skill-form {
    padding: 1rem;
  }

  .form-actions {
    flex-direction: column;
  }

  .cancel-button, .submit-button {
    width: 100%;
  }
}
</style>