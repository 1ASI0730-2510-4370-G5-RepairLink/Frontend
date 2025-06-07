<script>
import { Certification } from '@/models/certification.model.js';

export default {
  name: "CertificationForm",
  props: {
    certification: {
      type: Object,
      default: () => new Certification()
    },
    userId: {
      type: String,
      required: true
    }
  },
  emits: ['submit', 'cancel'],
  data() {
    return {
      formData: { ...this.certification },
      errors: {}
    };
  },
  watch: {
    certification: {
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

      if (!this.formData.title?.trim()) {
        this.errors.title = "Title is required";
        isValid = false;
      }

      if (!this.formData.organization?.trim()) {
        this.errors.organization = "Organization is required";
        isValid = false;
      }

      if (!this.formData.issueDate) {
        this.errors.issueDate = "Issue date is required";
        isValid = false;
      } else if (new Date(this.formData.issueDate) > new Date()) {
        this.errors.issueDate = "Issue date cannot be in the future";
        isValid = false;
      }

      if (this.formData.expiryDate) {
        const issueDate = new Date(this.formData.issueDate);
        const expiryDate = new Date(this.formData.expiryDate);

        if (expiryDate <= issueDate) {
          this.errors.expiryDate = "Expiry date must be after issue date";
          isValid = false;
        }
      }

      return isValid;
    },

    handleSubmit() {
      if (!this.validate()) return;

      // Prepare payload with user ID
      const payload = {
        ...this.formData,
        userId: this.userId
      };

      this.$emit('submit', payload);
    },

    handleCancel() {
      this.$emit('cancel');
    }
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="certification-form">
    <h3>{{ isEditing ? 'Edit Certification' : 'Add New Certification' }}</h3>

    <div class="form-group">
      <label>Title*</label>
      <input
          type="text"
          v-model="formData.title"
          placeholder="Certification name"
          :class="{ 'error': errors.title }"
      >
      <div v-if="errors.title" class="error-message">{{ errors.title }}</div>
    </div>

    <div class="form-row">
      <div class="form-group">
        <label>Organization*</label>
        <input
            type="text"
            v-model="formData.organization"
            placeholder="Issuing organization"
            :class="{ 'error': errors.organization }"
        >
        <div v-if="errors.organization" class="error-message">{{ errors.organization }}</div>
      </div>

      <div class="form-group">
        <label>Credential ID</label>
        <input
            type="text"
            v-model="formData.credentialId"
            placeholder="License number"
        >
      </div>
    </div>

    <div class="form-row">
      <div class="form-group">
        <label>Issue Date*</label>
        <input
            type="date"
            v-model="formData.issueDate"
            :class="{ 'error': errors.issueDate }"
        >
        <div v-if="errors.issueDate" class="error-message">{{ errors.issueDate }}</div>
      </div>

      <div class="form-group">
        <label>Expiry Date</label>
        <input
            type="date"
            v-model="formData.expiryDate"
            :class="{ 'error': errors.expiryDate }"
            placeholder="Optional"
        >
        <div v-if="errors.expiryDate" class="error-message">{{ errors.expiryDate }}</div>
      </div>
    </div>

    <div class="form-group">
      <label>Verification URL</label>
      <input
          type="url"
          v-model="formData.verificationUrl"
          placeholder="https://example.com/verify"
      >
      <div class="hint">Link to official verification page</div>
    </div>

    <div class="form-actions">
      <button type="button" @click="handleCancel" class="cancel-button">Cancel</button>
      <button type="submit" class="submit-button">
        {{ isEditing ? 'Update' : 'Add' }} Certification
      </button>
    </div>
  </form>
</template>

<style scoped>
.certification-form {
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

.form-row {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.form-row .form-group {
  flex: 1;
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

.form-group input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.2s;
}

.form-group input:focus {
  border-color: #1976d2;
  outline: none;
  box-shadow: 0 0 0 2px rgba(25, 118, 210, 0.2);
}

.form-group input.error {
  border-color: #f44336;
}

.form-group input.error:focus {
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
  background-color: #4caf50;
  color: white;
}

.submit-button:hover {
  background-color: #388e3c;
}

@media (max-width: 768px) {
  .form-row {
    flex-direction: column;
    gap: 0;
  }

  .certification-form {
    padding: 1rem;
  }
}
</style>