<script>
import { Form, Field } from 'vee-validate';
import * as yup from 'yup';
import Dropdown from 'primevue/dropdown';
import RadioButton from 'primevue/radiobutton';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Checkbox from "primevue/checkbox";
import FileUpload from 'primevue/fileupload';
import Toast from 'primevue/toast';
import axios from 'axios';

export default {
  name: 'SignUpPage-Technician-Next-Step',
  components: {
    Form,
    Field,
    Dropdown,
    RadioButton,
    InputText,
    Button,
    Card,
    Checkbox,
    FileUpload,
    Toast
  },
  data() {
    return {
      currentStep: 1,

      cities: [
        { name: 'Lima' }
      ],
      experienceLevels: [
        { label: 'No experience', value: 'none' },
        { label: '1-2 years', value: '1-2' },
        { label: '3-5 years', value: '3-5' },
        { label: '5+ years', value: '5+' }
      ],
    };
  },
  methods: {
    // Called when first form is valid
    onSubmit(values) {
      this.formValues = { ...this.formValues, ...values };
      this.currentStep = 2;
    },

    // Second "Next" button
    goToStepThree() {
      this.currentStep = 3;
    },

    // Third "Next" button
    async submitAllData() {
      const payload = {
        ...this.formValues,
        skills: this.pizza,
        uploadedFiles: this.uploadedFiles.map(file => file.name) // Simplified for fake API
      };

      try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', payload);
        alert('Form submitted successfully!\nResponse ID: ' + response.data.id);
      } catch (error) {
        console.error(error);
        alert('Submission failed.');
      }
    },

    // When files are uploaded
    onAdvancedUpload(event) {
      this.uploadedFiles = event.files;
    }
  }
};
</script>

<template>
  <div class="login-container">
    <div class="logo-container">
      <div class="progress-stepper">
        <div class="step active">1 About you</div>
        <div class="step">2 Skills assessment</div>
        <div class="step">3 Background check</div>
      </div>

      <Card v-if="currentStep === 1 " class="login-card">
        <template #title>Tell us about you</template>
        <template #content>
          <Form>
            <div class="p-fluid">

              <!-- Full Name -->
              <div class="field">
                <label for="fullName">Full name:</label>
                <Field name="fullName" >
                  <InputText id="fullName"  />
                </Field>
              </div>

              <!-- Email -->
              <div class="field">
                <label for="email">Email address:</label>
                <Field name="email">
                  <InputText id="email" />
                </Field>
              </div>

              <!-- Confirm Email -->
              <div class="field">
                <label for="confirmEmail">Confirm email:</label>
                <Field name="confirmEmail" >
                  <InputText id="confirmEmail"  />
                </Field>
              </div>

              <!-- Mobile Number -->
              <div class="field">
                <label for="mobile">Mobile number:</label>
                <Field name="mobile">
                  <InputText id="mobile"  placeholder="(999) 999-9999" />
                </Field>
              </div>

              <!-- Address -->
              <div class="field">
                <label for="address">Address:</label>
                <Field name="address">
                  <InputText id="address"  />
                </Field>
              </div>

              <!-- City Dropdown -->
              <div class="field">
                <label for="city">What city do you wish to work in?</label>
                <Field name="city" >
                  <Dropdown id="city"  :options="cities" optionLabel="name" placeholder="Select a city" />
                </Field>
              </div>

              <!-- Transportation -->
              <div class="field">
                <label>Do you have transportation?</label><br />
                <Field name="hasTransportation" type="radio" value="yes" >
                  <RadioButton inputId="transportYes" value="yes" />
                  <label for="transportYes">Yes</label>
                </Field>
                <Field name="hasTransportation" type="radio" value="no" >
                  <RadioButton inputId="transportNo" value="no" />
                  <label for="transportNo">No</label>
                </Field>
              </div>

              <!-- Insurance -->
              <div class="field">
                <label>Do you have insurance?</label><br />
                <Field name="hasInsurance" type="radio" value="yes">
                  <RadioButton inputId="insuranceYes" value="yes" />
                  <label for="insuranceYes">Yes</label>
                </Field>
                <Field name="hasInsurance" type="radio" value="no">
                  <RadioButton inputId="insuranceNo"  value="no" />
                  <label for="insuranceNo">No</label>
                </Field>
              </div>

              <!-- Company -->
              <div class="field">
                <label>Do you work for a company?</label><br />
                <Field name="hasCompany" type="radio" value="yes" >
                  <RadioButton inputId="companyYes" value="yes" />
                  <label for="companyYes">Yes</label>
                </Field>
                <Field name="hasCompany" type="radio" value="no">
                  <RadioButton inputId="companyNo"  value="no" />
                  <label for="companyNo">No</label>
                </Field>
              </div>

              <!-- Experience Dropdown -->
              <div class="field">
                <label for="experience">Select your experience level</label>
                <Field name="experience">
                  <Dropdown id="experience"  :options="experienceLevels" optionLabel="label" placeholder="Select experience" />
                </Field>
              </div>



              <!-- Submit Button -->
              <Button type="submit" label="Next" icon="pi pi-sign-in" class="p-button-primary p-mt-3"@click="onSubmit"/>

            </div>
          </Form>
        </template>
      </Card>
      <Card v-if="currentStep === 2" class="login-card">
        <!--skills assessments-->
        <div class="field">
          <label for="fullName" style="font-weight: bold">What type of jobs would you like to see? <br>Select from the list below</label>
        </div>
        <div class="card flex flex-wrap justify-center gap-4" style="flex-direction:column; padding-left: 7rem">
          <div class="flex items-center gap-2">
            <Checkbox  inputId="ingredient1"  value="Cheese" />
            <label for="ingredient1"> Washer </label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox  inputId="ingredient2" name="pizza" value="Mushroom" />
            <label for="ingredient2"> Dryer </label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox  inputId="ingredient3" name="pizza" value="Pepper" />
            <label for="ingredient3"> Refrigerator </label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox  inputId="ingredient4" name="pizza" value="Onion" />
            <label for="ingredient4"> Oven </label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox  inputId="ingredient4" name="pizza" value="Onion" />
            <label for="ingredient4"> Microwave </label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox  inputId="ingredient4" name="pizza" value="Onion" />
            <label for="ingredient4"> Vacuum </label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox  inputId="ingredient4" name="pizza" value="Onion" />
            <label for="ingredient4"> Cooktop </label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox  inputId="ingredient4" name="pizza" value="Onion" />
            <label for="ingredient4"> Others </label>
          </div>
        </div>
        <!-- Submit Button -->
        <Button @click="goToStepThree" label="Next" icon="pi pi-sign-in" class="p-button-primary p-mt-3"></Button>
      </Card>
      <Card class="login-card">
        <div class="field" style="padding-top: 5rem">
          <label for="fullName" style="font-weight: bold">Thanks for telling us a bit about yourself!<br> Next Step! Demonstrate your skills and experience.</label>
        </div>
        <div class="card">
          <Toast />
          <FileUpload name="demo[]" url="/api/upload" @upload="onAdvancedUpload($event)" :multiple="true" accept="image/*" :maxFileSize="1000000">
            <template #empty>
              <span>Drag and drop files to here to upload.</span>
            </template>
          </FileUpload>
        </div>
        <!-- Submit Button -->
        <Button type="submit" label="Next" icon="pi pi-sign-in" class="p-button-primary p-mt-3"/>
      </Card>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  font-family: 'Roboto', sans-serif !important;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  background: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.logo-container {
  background-color: #ffffff;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
  align-items: center;
  text-align: center;
}

.progress-stepper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e0e0e0;
}

.step {
  padding-right: 9rem;
  padding-left: 9rem;
  color: #757575;
  font-weight: 500;
}

.step.active {
  color: #3B82F6;
  font-weight: 600;
}

.login-card {
  height: auto;
  width: 900px;
  color: #1a252f;
  background-color: white;
  overflow: hidden;
  padding: 2rem;
}

.field {
  margin-bottom: 1.5rem;
}

.p-error {
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: block;
}

@media screen and (max-width: 768px) {
  .login-card {
    width: 90%;
    padding: 1rem;
  }

  .step {
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 0.9rem;
  }
}

label{
  padding-right: 3rem;
}
</style>
