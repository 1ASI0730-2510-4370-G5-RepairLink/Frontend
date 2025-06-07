<script>
import AddSkillButton from '@/components/AddSkillButton.vue';
import AddCertificationButton from '@/components/AddCertificationButton.vue';
import SkillCardList from '@/components/SkillCardList.vue';
import CertificationCardList from '@/components/CertificationCardList.vue';
import { SkillService, CertificationService } from '@/services';

export default {
  name: "TechnicianProfile",
  components: {
    AddSkillButton,
    AddCertificationButton,
    SkillCardList,
    CertificationCardList
  },
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
      certifications: [],
      loadingSkills: false,
      loadingCerts: false,
      errorSkills: null,
      errorCerts: null
    };
  },
  created() {
    this.fetchSkills();
    this.fetchCertifications();
  },
  methods: {
    async fetchSkills() {
      this.loadingSkills = true;
      this.errorSkills = null;
      try {
        // Replace with your actual service call
        // const response = await SkillService.getUserSkills(this.userId);
        // this.skills = response.data;

        // Mock data for demonstration
        this.skills = [
          { id: '1', name: 'Laptop Repair', description: 'Diagnosis and repair of laptop hardware', category: 'Electronics' },
          { id: '2', name: 'Refrigerator Maintenance', description: 'Troubleshooting cooling systems', category: 'Appliances' }
        ];
      } catch (error) {
        console.error('Error fetching skills:', error);
        this.errorSkills = 'Failed to load skills. Please try again.';
      } finally {
        this.loadingSkills = false;
      }
    },

    async fetchCertifications() {
      this.loadingCerts = true;
      this.errorCerts = null;
      try {
        // Replace with your actual service call
        // const response = await CertificationService.getByUserId(this.userId);
        // this.certifications = response.data;

        // Mock data for demonstration
        this.certifications = [
          {
            id: '1',
            title: 'EPA Refrigerant Handling',
            organization: 'Environmental Protection Agency',
            issueDate: '2023-05-15',
            expiryDate: '2026-05-15',
            credentialId: 'EPA-12345',
            verificationUrl: 'https://verify.epa.gov/12345',
            isVerified: true
          }
        ];
      } catch (error) {
        console.error('Error fetching certifications:', error);
        this.errorCerts = 'Failed to load certifications. Please try again.';
      } finally {
        this.loadingCerts = false;
      }
    },

    handleSkillAdded(newSkill) {
      this.skills.push(newSkill);
    },

    handleCertificationAdded(newCert) {
      this.certifications.push(newCert);
    },

    handleSkillDeleted(skillId) {
      this.skills = this.skills.filter(skill => skill.id !== skillId);
    },

    handleCertificationDeleted(certId) {
      this.certifications = this.certifications.filter(cert => cert.id !== certId);
    }
  }
}
</script>

<template>
  <div class="technician-profile">

    <!-- Skills Section -->
    <section class="skills-section">
      <div class="section-header">
        <h2>Skills & Expertise</h2>
        <AddSkillButton v-if="editable" />
      </div>

      <div v-if="loadingSkills" class="loading-state">
        <i class="fas fa-spinner fa-spin"></i> Loading skills...
      </div>

      <div v-if="errorSkills" class="error-state">
        <i class="fas fa-exclamation-triangle"></i> {{ errorSkills }}
        <button @click="fetchSkills" class="retry-button">Retry</button>
      </div>

      <SkillCardList :skills="skills">
        <template #empty>
          <div class="empty-section">
            <i class="fas fa-tools"></i>
            <p>No skills added yet</p>
            <AddSkillButton v-if="editable" />
          </div>
        </template>

        <template v-if="editable" v-slot:default="{ skill }">
          <button
              @click="handleSkillDeleted(skill.id)"
              class="delete-item-button"
              aria-label="Remove skill"
          >
            <i class="fas fa-times"></i>
          </button>
        </template>
      </SkillCardList>
    </section>

    <!-- Certifications Section -->
    <section class="certifications-section">
      <div class="section-header">
        <h2>Certifications</h2>
        <AddCertificationButton :userId="userId" v-if="editable" />
      </div>

      <div v-if="loadingCerts" class="loading-state">
        <i class="fas fa-spinner fa-spin"></i> Loading certifications...
      </div>

      <div v-if="errorCerts" class="error-state">
        <i class="fas fa-exclamation-triangle"></i> {{ errorCerts }}
        <button @click="fetchCertifications" class="retry-button">Retry</button>
      </div>

      <CertificationCardList :certifications="certifications">
        <template #empty>
          <div class="empty-section">
            <i class="fas fa-certificate"></i>
            <p>No certifications added yet</p>
            <AddCertificationButton :userId="userId" v-if="editable" />
          </div>
        </template>

        <template v-if="editable" v-slot:default="{ certification }">
          <button
              @click="handleCertificationDeleted(certification.id)"
              class="delete-item-button"
              aria-label="Remove certification"
          >
            <i class="fas fa-times"></i>
          </button>
        </template>
      </CertificationCardList>
    </section>
  </div>
</template>

<style scoped>
.technician-profile {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

section {
  margin-bottom: 3rem;
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
}

h2 {
  margin: 0;
  font-size: 1.5rem;
  color: #2c3e50;
}

.loading-state, .error-state {
  text-align: center;
  padding: 2rem;
}

.error-state {
  color: #c62828;
}

.retry-button {
  display: block;
  margin: 1rem auto 0;
  padding: 0.5rem 1.5rem;
  background-color: #1976d2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.empty-section {
  text-align: center;
  padding: 3rem;
  color: #757575;
}

.empty-section i {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #e0e0e0;
}

.empty-section p {
  margin-bottom: 1.5rem;
}

.delete-item-button {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  cursor: pointer;
  color: #f44336;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
}

.delete-item-button:hover {
  transform: scale(1.1);
  background: #ffebee;
}

@media (max-width: 768px) {
  .technician-profile {
    padding: 1rem;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  section {
    padding: 1rem;
  }
}
</style>