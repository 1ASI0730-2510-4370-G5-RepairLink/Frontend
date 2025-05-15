<script>
export default {
  name: "AppointmentCard",
  props: {
    appointment: {
      type: Object,
      default: () => ({
        date: 'April 29, 2025',
        time: '3:00PM-4:00PM',
        status: 'New'
      })
    }
  }
}
</script>

<template>
  <div class="card appointment-card mb-4">
    <div class="card-body">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <span class="badge bg-primary">{{ appointment.status }}</span>
        <button class="btn btn-link">See Details</button>
      </div>

      <div class="appointment-details">
        <div class="date-time mb-2">
          <div class="fw-bold">{{ appointment.date }}</div>
          <div class="text-muted">{{ appointment.time }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.appointment-card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
</style>