<script>
import { onMounted, ref } from 'vue';
import { useToast } from "primevue";
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import Card from 'primevue/card';
import { UserService } from '@/userManagement/services/user.service';
import { useRoute, useRouter } from 'vue-router';
import {Booking} from "@/booking/model/booking.entity.js";

export default {
  name: 'LoginPage',
  components: {
    InputText,
    Password,
    Button,
    Card,
  },
  setup() {
    const toast = useToast();
    const route = useRoute();
    const router = useRouter();
    const email = ref('');
    const password = ref('');
    const user = ref(null);
    const userService = new UserService();
    const login = async () => {
      try {
        const response = await userService.getByEmail(email.value);
        const foundUsers = response.data;

        if (foundUsers.length === 1) {
          const user = foundUsers[0];

          if (user.password === password.value) {
            toast.add({
              severity: 'success',
              summary: 'Login successful',
              detail: `Welcome, ${user.name}`,
              life: 3000,
            });

            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('userId', String(user.id));

            setTimeout(() => {
              router.push({ name: 'home' });
            }, 1000);
          } else {
            toast.add({
              severity: 'error',
              summary: 'Login failed',
              detail: 'Incorrect password',
              life: 3000,
            });
          }
        } else {
          toast.add({
            severity: 'error',
            summary: 'Login failed',
            detail: 'User not found',
            life: 3000,
          });
        }
      } catch (error) {
        console.error("Login error:", error);
        toast.add({
          severity: 'error',
          summary: 'Login failed',
          detail: 'Server error',
          life: 3000,
        });
      }
    };

    return {
      email,
      password,
      login,
      toast,
    };
  },
};


</script>

<template>
  <Toast />

  <div class="login-container">
    <div class="logo-container">
      <img src="/logo-producto.png" alt="Logo" class="logo" />
      <h1>RepairLink</h1>
      <p class="tagline">Tus expertos en atención domiciliaria</p>
    </div>

    <div class="button-group">
      <Card class="login-card">
        <template #title>Inicio de sesión</template>
        <template #content>
          <div class="p-fluid">
            <div class="field">
              <label for="username">E-mail</label>
              <InputText id="username" v-model="email" placeholder="Ingresa tu email" />
            </div>
            <div class="field">
              <label for="password">Password</label>
              <Password
                  id="password"
                  v-model="password"
                  toggleMask
                  :feedback="false"
                  placeholder="Ingresa tu contraseña"
                  style="border: 1px black solid; border-radius: 4px"
                  :input-style="{ background: 'white', color: 'black', border: 'white' }"
              />
            </div>
            <Button
                label="Iniciar sesión"
                icon="pi pi-sign-in"
                class="p-button-primary p-mt-3"
                @click="login"
            />
            <div class="signup-message">
              <span>
                ¿No tienes una cuenta?<br /><br />
                <router-link to="/signup-customer">Crear cuenta como Cliente</router-link>
                <br /><br />
                <router-link to="/signup-technician">Crear cuenta como Técnico</router-link>
              </span>
            </div>

          </div>
        </template>
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

  background-color: peachpuff;
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column; /* Stack vertically */
  justify-content: center; /* Vertical centering */
  align-items: center; /* Horizontal centering */
  text-align: center; /* Backup for text elements */
}

.logo-container h1 {
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.tagline {
  color: #7f8c8d;
  font-size: 1.1rem;
}

.button-group {
  width: 50vw;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column; /* Stack buttons vertically */
  justify-content: center; /* Vertical centering */
  align-items: center; /* Horizontal centering */
  gap: 1rem; /* Space between buttons */
}

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

  background-color: #FFD38F;
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column; /* Stack vertically */
  justify-content: center; /* Vertical centering */
  align-items: center; /* Horizontal centering */
  text-align: center; /* Backup for text elements */
}

.logo-container h1 {
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.tagline {
  color: #7f8c8d;
  font-size: 1.1rem;
}

.button-group {
  width: 50vw;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column; /* Stack buttons vertically */
  justify-content: center; /* Vertical centering */
  align-items: center; /* Horizontal centering */
  gap: 1rem; /* Space between buttons */
}
.field{
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
}

#username{
  width: 400px;
  background-color: white;
}

#password{
  width: 400px;
  background-color: white;
}


.field2{
  margin-top: 3rem;
}
.login-card{
  height: 850px;
  width: 600px;
  color: #1a252f;
  background-color: white;
  overflow: hidden;
}
.social-buttons {
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
}

.google {
  color: #db4437;
  border-color: #db4437;
}

.apple {
  color: #000;
  border-color: #000;
}

.facebook {
  color: #4267B2;
  border-color: #4267B2;
}
.logo-container {
  text-align: center;
  padding: 15px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  margin-bottom: 15px;
}

.logo {
  max-width: 120px;
  height: auto;
  display: inline-block;
}

.signup-message {
  margin-top: 2rem;
  text-align: center;
}

</style>