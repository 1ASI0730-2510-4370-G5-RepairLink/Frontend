<script>
export default {
  name: "CertificationCard",
  props: {
    certification: {
      type: Object,
      required: true,
      validator: (cert) => (
          cert.title &&
          cert.organization &&
          cert.issueDate
      )
    }
  },
  computed: {
    formattedIssueDate() {
      return new Date(this.certification.issueDate).toLocaleDateString();
    },
    formattedExpiryDate() {
      return this.certification.expiryDate
          ? new Date(this.certification.expiryDate).toLocaleDateString()
          : null;
    },
    isExpired() {
      if (!this.certification.expiryDate) return false;
      return new Date() > new Date(this.certification.expiryDate);
    },
    statusClass() {
      if (this.certification.isVerified) {
        return this.isExpired ? 'status-expired' : 'status-verified';
      }
      return 'status-pending';
    },
    statusText() {
      if (this.certification.isVerified) {
        return this.isExpired ? 'Expired' : 'Verified';
      }
      return 'Pending Verification';
    }
  }
}
</script>

<template>
  <div class="certification-card">
    <div class="card-header">
      <h3>{{ certification.title }}</h3>
      <span :class="['status-badge', statusClass]">
        {{ statusText }}
      </span>
    </div>

    <div class="card-body">
      <div class="detail-row">
        <span class="label">Organization:</span>
        <span class="value">{{ certification.organization }}</span>
      </div>

      <div class="detail-row">
        <span class="label">Issued:</span>
        <span class="value">{{ formattedIssueDate }}</span>
      </div>

      <div v-if="certification.expiryDate" class="detail-row">
        <span class="label">Expires:</span>
        <span :class="['value', { 'expired-text': isExpired }]">
          {{ formattedExpiryDate }}
        </span>
      </div>

      <div v-if="certification.credentialId" class="detail-row">
        <span class="label">Credential ID:</span>
        <span class="value credential-id">{{ certification.credentialId }}</span>
      </div>
    </div>

    <div class="card-footer">
      <a
          v-if="certification.verificationUrl"
          :href="certification.verificationUrl"
          target="_blank"
          class="verify-link"
      >
        Verify Certificate
      </a>
      <span v-else class="no-link">Verification not available</span>
    </div>
  </div>
</template>

<style scoped>
.certification-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1.5rem;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  height: 100%;
}

.certification-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.75rem;
}

.card-header h3 {
  margin: 0;
  font-size: 1.25rem;
  color: #2c3e50;
  flex: 1;
}

.status-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.status-verified {
  background-color: #e8f5e9;
  color: #2e7d32;
}

.status-pending {
  background-color: #fff8e1;
  color: #f57f17;
}

.status-expired {
  background-color: #ffebee;
  color: #c62828;
}

.card-body {
  margin-bottom: 1rem;
}

.detail-row {
  display: flex;
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

.label {
  font-weight: 600;
  min-width: 120px;
  color: #555;
}

.value {
  flex: 1;
  color: #333;
}

.credential-id {
  font-family: monospace;
  font-size: 0.9rem;
  background-color: #f5f5f5;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  display: inline-block;
}

.expired-text {
  color: #c62828;
  font-weight: 600;
}

.card-footer {
  border-top: 1px solid #eee;
  padding-top: 1rem;
  display: flex;
  justify-content: flex-end;
}

.verify-link {
  color: #1976d2;
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
}

.verify-link:hover {
  text-decoration: underline;
}

.verify-link::after {
  content: "→";
  margin-left: 0.5rem;
  transition: transform 0.2s;
}

.verify-link:hover::after {
  transform: translateX(3px);
}

.no-link {
  color: #757575;
  font-style: italic;
  font-size: 0.9rem;
}
</style>