<template>
  <div>
    <div v-if="step === 1" class="skills-selection">
      <div class="header">
        <img src="/logo-producto.png" alt="RepairLink Logo" class="logo" />
        <h2>Welcome! Select your speciality below to get started</h2>
      </div>

      <div class="skills-grid">
        <label class="skill-option">
          <input type="checkbox" v-model="formData.skills" value="Appliance Repair" hidden />
          <img src="@/assets/appliance-repair.png" alt="Appliance Repair" />
          <span>Appliance Repair</span>
        </label>

        <label class="skill-option">
          <input type="checkbox" v-model="formData.skills" value="Plumbing" hidden />
          <img src="@/assets/plumbing.png" alt="Plumbing" />
          <span>Plumbing</span>
        </label>

        <label class="skill-option">
          <input type="checkbox" v-model="formData.skills" value="TV Mounting" hidden />
          <img src="@/assets/tv-mounting.png" alt="TV Mounting" />
          <span>TV Mounting</span>
        </label>

        <label class="skill-option">
          <input type="checkbox" v-model="formData.skills" value="Handyman" hidden />
          <img src="@/assets/handyman.png" alt="Handyman" />
          <span>Handyman</span>
        </label>
      </div>

      <div class="button-group">
        <button @click="prevStep">Back</button>
        <button @click="nextStep" :disabled="formData.skills.length === 0">Next</button>
      </div>
    </div>

    <div v-if="step === 2" class="about-you-form">
      <div class="step-header">
        <span :class="{'active-step': true}">1 About you</span>
        <span>➤ 2 Skills assessment</span>
        <span>➤ 3 Background check</span>
      </div>

      <form @submit.prevent="nextStep">
        <div class="form-group">
          <label>Full name</label>
          <input v-model="formData.fullName" type="text" required />
        </div>

        <div class="form-group">
          <label>Email address</label>
          <input v-model="formData.email" type="email" required />
        </div>

        <div class="form-group">
          <label>Confirm email</label>
          <input v-model="formData.confirmEmail" type="email" required />
        </div>

        <div class="form-group">
          <label>Mobile number</label>
          <input v-model="formData.phone" type="tel" required />
        </div>

        <div class="form-group">
          <label>Address</label>
          <input v-model="formData.address" type="text" />
        </div>

        <div class="form-group">
          <label>What city do you wish to work in?</label>
          <input v-model="formData.city" type="text" />
        </div>

        <div class="form-group">
          <label>Do you have your own mode of transportation?</label>
          <label><input type="radio" v-model="formData.transportation" value="yes" /> Yes</label>
          <label><input type="radio" v-model="formData.transportation" value="no" /> No</label>
        </div>

        <div class="form-group">
          <label>Do you have liability insurance coverage as a service provider?</label>
          <label><input type="radio" v-model="formData.insurance" value="yes" /> Yes</label>
          <label><input type="radio" v-model="formData.insurance" value="no" /> No</label>
        </div>

        <div class="form-group">
          <label>Do you own a company with more than 2 technicians?</label>
          <label><input type="radio" v-model="formData.hasCompany" value="yes" /> Yes</label>
          <label><input type="radio" v-model="formData.hasCompany" value="no" /> No</label>
        </div>

        <div class="form-group">
          <label>Select your amount of experience</label>
          <select v-model="formData.experience">
            <option>No experience</option>
            <option>1-2 years</option>
            <option>3-5 years</option>
            <option>More than 5 years</option>
          </select>
        </div>

        <div class="button-group">
          <button @click="prevStep" type="button">Back</button>
          <button type="submit">Next</button>
        </div>
      </form>
    </div>

    <div v-if="step === 3" class="skills-assessment">
      <div class="step-header">
        <span>➤ 1 About you</span>
        <span :class="{'active-step': true}">2 Skills assessment</span>
        <span>➤ 3 Background check</span>
      </div>

      <form @submit.prevent="nextStep">
        <div class="form-group">
          <label>What types of jobs would you like to see?</label>
          <label>Select from the list below the devices or skills you have experience working with</label>
        </div>

        <div class="form-group">
          <label><input type="checkbox" v-model="formData.jobTypes" value="Washing Machines" /> Washing Machines</label>
          <label><input type="checkbox" v-model="formData.jobTypes" value="Refrigerators" /> Refrigerators</label>
          <label><input type="checkbox" v-model="formData.jobTypes" value="Microwaves" /> Microwaves</label>
          <label><input type="checkbox" v-model="formData.jobTypes" value="Dishwashers" /> Dishwashers</label>
          <label><input type="checkbox" v-model="formData.jobTypes" value="TV Mounting" /> TV Mounting</label>
          <label><input type="checkbox" v-model="formData.jobTypes" value="Faucet Repair" /> Faucet Repair</label>
          <label><input type="checkbox" v-model="formData.jobTypes" value="Other" /> Other</label>
        </div>

        <div class="button-group">
          <button @click="prevStep" type="button">Back</button>
          <button type="submit">Next</button>
        </div>
      </form>
    </div>

    <div v-if="step === 4" class="background-check">
      <div class="step-header">
        <span>➤ 1 About you</span>
        <span>➤ 2 Background check</span>
        <span :class="{'active-step': true}">3 Background check</span>
      </div>
      <form @submit.prevent="submitForm">
        <input type="file" @change="handleFileUpload" />
        <div v-if="!formData.documents" class="error-message">Please upload your background check document.</div>
        <button type="submit" :disabled="!formData.documents">Submit</button>
      </form>
      <button @click="prevStep">Back</button>
      <button @click="stepSave">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUpPage-Technician-Next-Step',
  data() {
    return {
      step: 1,
      formData: {
        about: '',
        skills: [],
        jobTypes: [],
        documents: null
      }
    };
  },
  methods: {
    nextStep() {
      this.step++;
    },
    prevStep() {
      this.step--;
    },
    stepSave() {
      this.step--;
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.formData.documents = file;
      }
    },
    submitForm() {
      console.log('Form Submitted:', this.formData);
      alert('Form Submitted!');
    }
  }
};
</script>

<style scoped>
.error-message {
  color: red;
  font-size: 12px;
}
.invalid {
  border: 1px solid red;
}
button:disabled {
  background-color: #ccc;
}
.skills-selection {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.logo {
  max-width: 100px;
  margin-bottom: 1rem;
}

.header h2 {
  color: #f5a623;
  font-weight: 500;
  margin-bottom: 2rem;
}

.skills-grid {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

.skill-option {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s;
}

.skill-option img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid transparent;
}

.skill-option input:checked + img {
  border-color: #007bff;
}

.skill-option span {
  margin-top: 0.5rem;
  font-size: 1rem;
  color: #337ab7;
}

.skill-option:hover {
  transform: scale(1.05);
}

.button-group {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
}

.about-you-form {
  padding: 1rem;
  max-width: 800px;
  margin: auto;
}

.step-header {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  font-size: 16px;
  font-weight: 500;
}

.step-header .active-step {
  color: #f5a623;
}

.form-group {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
}

.form-group.inline {
  flex-direction: row;
  align-items: center;
  gap: 1rem;
}

.form-group label {
  margin-bottom: 0.3rem;
  font-size: 14px;
  color: #333;
}

input[type="text"],
input[type="email"],
input[type="tel"],
select {
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 14px;
}

.button-group {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
}

button {
  padding: 0.5rem 1.5rem;
  background-color: #6b9dfc;
  border: none;
  border-radius: 6px;
  color: white;
  font-weight: 500;
  cursor: pointer;
}


</style>