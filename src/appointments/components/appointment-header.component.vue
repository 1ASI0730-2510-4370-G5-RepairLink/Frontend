<script>
export default {
  name: "appointment-header",
  props: {
    user: {
      type: Object,
      default: () => ({
        firstName: 'Guest',
        lastName: 'User'
      })
    },
    rightImage: {
      type: String,
      default: 'https://via.placeholder.com/600x400'
    }
  }
}
</script>

<template>
  <div class="user-card">
    <!-- Greeting Section -->
    <h2 class="greeting">Hello {{ this.user.firstName }}</h2>

    <!-- Content Container -->
    <div class="content-container">
      <!-- Left Text Panel -->
      <div class="text-panel">
        <p class="subtitle">Your go-to expert all your home care needs</p>
      </div>

      <!-- Right Image -->
      <img
          :src="rightImage"
          alt="Service Illustration"
          class="half-width-image"
      >
    </div>
  </div>
</template>

<style scoped>
.user-card {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.greeting {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #333;
  text-align: center;
}

.content-container {
  display: flex;
  gap: 20px;
  width: 100%;
}

.text-panel {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 2rem;
  width: 50%;
}

.subtitle {
  font-size: 1.5rem;
  color: #666;
  text-align: center;
  line-height: 1.4;
  margin: 0;
}

.half-width-image {
  width: 50%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

@media (max-width: 768px) {
  .content-container {
    flex-direction: column;
  }

  .text-panel,
  .half-width-image {
    width: 100%;
  }

  .subtitle {
    font-size: 1.2rem;
  }
}
</style>