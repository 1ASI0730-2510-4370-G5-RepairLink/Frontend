<template>
  <div>
    <div v-if="step === 1" class="skills-selection">
      <div class="header">
        <img src="/logo-producto.png" alt="RepairLink Logo" class="logo" />
        <h2>¡Bienvenido! Selecciona tu especialidad a continuación para comenzar</h2>
      </div>

      <div class="skills-grid">
        <label class="skill-option">
          <input type="checkbox" v-model="formData.skills" value="Appliance Repair" hidden />
          <img src="@/assets/appliance-repair.png" alt="Appliance Repair" />
          <span>Reparación de electrodomésticos</span>
        </label>

        <label class="skill-option">
          <input type="checkbox" v-model="formData.skills" value="Plumbing" hidden />
          <img src="@/assets/plumbing.png" alt="Plumbing" />
          <span>Servicio de gasfiteria</span>
        </label>

        <label class="skill-option">
          <input type="checkbox" v-model="formData.skills" value="TV Mounting" hidden />
          <img src="@/assets/tv-mounting.png" alt="TV Mounting" />
          <span>Montaje de TV</span>
        </label>

        <label class="skill-option">
          <input type="checkbox" v-model="formData.skills" value="Handyman" hidden />
          <img src="@/assets/handyman.png" alt="Handyman" />
          <span>Servicios generales</span>
        </label>
      </div>

      <div class="button-group">
        <button @click="prevStep">Anterior</button>
        <button @click="nextStep" :disabled="formData.skills.length === 0">Siguiente</button>
      </div>
    </div>

    <div v-if="step === 2" class="about-you-form">
      <div class="step-header">
        <span :class="{'active-step': true}">1 Acerca de ti</span>
        <span>➤ 2 Evaluación de habilidades</span>
        <span>➤ 3 Verificación de antecedentes</span>
      </div>

      <form @submit.prevent="nextStep">
        <div class="form-group">
          <label>Nombre completo</label>
          <input v-model="formData.fullName" type="text" required />
        </div>

        <div class="form-group">
          <label>Correo electrónico</label>
          <input v-model="formData.email" type="email" required />
        </div>

        <div class="form-group">
          <label>Confirmar correo electrónico</label>
          <input v-model="formData.confirmEmail" type="email" required />
        </div>

        <div class="form-group">
          <label>Número de celular</label>
          <input v-model="formData.phone" type="tel" required />
        </div>

        <div class="form-group">
          <label>Dirección</label>
          <input v-model="formData.address" type="text" />
        </div>

        <div class="form-group">
          <label>¿En qué ciudad deseas trabajar?</label>
          <input v-model="formData.city" type="text" />
        </div>

        <div class="form-group">
          <label>¿Tienes tu propio medio de transporte?</label>
          <label><input type="radio" v-model="formData.transportation" value="yes" /> Si</label>
          <label><input type="radio" v-model="formData.transportation" value="no" /> No</label>
        </div>

        <div class="form-group">
          <label>¿Cuentas con seguro de responsabilidad civil como proveedor de servicios?</label>
          <label><input type="radio" v-model="formData.insurance" value="yes" /> Si</label>
          <label><input type="radio" v-model="formData.insurance" value="no" /> No</label>
        </div>

        <div class="form-group">
          <label>¿Eres propietario de una empresa con más de 2 técnicos?</label>
          <label><input type="radio" v-model="formData.hasCompany" value="yes" /> Si</label>
          <label><input type="radio" v-model="formData.hasCompany" value="no" /> No</label>
        </div>

        <div class="form-group">
          <label>Selecciona tu nivel de experiencia</label>
          <select v-model="formData.experience">
            <option>No experiencia</option>
            <option>1-2 años</option>
            <option>3-5 años</option>
            <option>Más de 5 años</option>
          </select>
        </div>

        <div class="button-group">
          <button @click="prevStep" type="button">Anterior</button>
          <button type="submit">Siguiente</button>
        </div>
      </form>
    </div>

    <div v-if="step === 3" class="skills-assessment">
      <div class="step-header">
        <span>➤ 1 Acerca de ti</span>
        <span :class="{'active-step': true}">2 Evaluación de habilidades</span>
        <span>➤ 3 Verificación de antecedentes</span>
      </div>

      <form @submit.prevent="nextStep">
        <div class="form-group">
          <label>¿Qué trabajos prefieres que te mostremos?</label>
          <label> Selecciona de la lista los dispositivos o habilidades con los que tienes experiencia.</label>
        </div>

        <div class="form-group">
          <label><input type="checkbox" v-model="formData.jobTypes" value="Washing Machines" /> Lavadoras</label>
          <label><input type="checkbox" v-model="formData.jobTypes" value="Refrigerators" /> Refrigeradoras</label>
          <label><input type="checkbox" v-model="formData.jobTypes" value="Microwaves" /> Microondas</label>
          <label><input type="checkbox" v-model="formData.jobTypes" value="Dishwashers" /> Lavavajillas</label>
          <label><input type="checkbox" v-model="formData.jobTypes" value="TV Mounting" /> Instalación de TV en la pared</label>
          <label><input type="checkbox" v-model="formData.jobTypes" value="Faucet Repair" /> Reparación de grifos</label>
          <label><input type="checkbox" v-model="formData.jobTypes" value="Other" /> Otros</label>
        </div>

        <div class="button-group">
          <button @click="prevStep" type="button">Anterior</button>
          <button type="submit">Siguiente</button>
        </div>
      </form>
    </div>

    <div v-if="step === 4" class="background-check">
      <div class="step-header">
        <span>➤ 1 Acerca de ti</span>
        <span>➤ 2 Evaluación de habilidades</span>
        <span :class="{'active-step': true}">3 Verificación de antecedentes</span>
      </div>
      <form @submit.prevent="submitForm">
        <input type="file" @change="handleFileUpload" />
        <div v-if="!formData.documents" class="error-message">Por favor cargue su documento de verificación de antecedentes.</div>
        <button type="submit" :disabled="!formData.documents">Enviar</button>
      </form>
      <button @click="prevStep">Anterior</button>
    </div>
  </div>
</template>

<script>
import { User } from '@/userManagement/model/user.entity.js';
import { UserService } from '@/userManagement/services/user.service.js';

const userService = new UserService();

export default {
  name: 'SignUpPage-Technician-Next-Step',
  data() {
    return {
      step: 1,
      formData: {
        name: '',
        email: '',
        password: '',
        phone: '',
        specialty: '',
        skills: [],
        background_check: false,
        documents: [],
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
      if (!this.formData.documents || this.formData.documents.length === 0) {
        alert('Debes adjuntar al menos un documento.');
        return;
      }

      const newUser = new User({
        name: this.formData.name,
        email: this.formData.email,
        password: this.formData.password,
        role: 'technician', // o 'customer', depende del flujo
        phone: this.formData.phone,
        address_id: this.formData.address_id || '', // si lo tienes
        specialty: this.formData.specialty,
        skills: this.formData.skills,
        background_check: this.formData.background_check,
        documents: this.formData.documents,
      });

      userService.create(newUser)
          .then(() => {
            alert('Registro exitoso');
            this.$router.push('/login');
          })
          .catch(err => {
            console.error('Error al registrar usuario:', err);
            alert('Ocurrió un error al guardar el usuario');
          });
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