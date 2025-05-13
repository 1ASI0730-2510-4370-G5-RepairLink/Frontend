<script>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'
import Card from 'primevue/card'

export default {
    name: 'LoginPage',
    components: {
      InputText,
      Password,
      Button,
      Card
    },
    data(){
        return{
          username: '',
          password: '',
        }
    },
    methods:{
      login() {
        console.log('Logging in with', username.value, password.value)
      },

      loginWithGoogle(){
        console.log('Google login triggered')
        // Implement Google OAuth logic
      },

      loginWithApple(){
        console.log('Apple login triggered')
        // Implement Apple login logic
      },

      loginWithFacebook() {
        console.log('Facebook login triggered')
        // Implement Facebook login
      },

    }
  }
</script>

<template>
  <div class="login-container">
    <div class="logo-container">
      <h1>RepairLink</h1>
      <p class="tagline">Your go-to home care experts</p>
    </div>

    <div class="button-group">
        <Card class="login-card">
          <template #title>Login</template>
          <template #content>
            <div class="p-fluid">
              <div class="field">
                <label for="username">E-mail or Phone Number</label>
                <InputText id="username" v-model="username" placeholder="E-mail or Phone Number" />
              </div>
              <div class="field">
                <label for="password">Password</label>
                <Password id="password" v-model="password"
                          toggleMask :feedback="false" placeholder="Enter your password"
                           style="border: 1px black solid; border-radius: 4px " input-style="background:white; color: black; border: white;"/>
              </div>
              <Button
                  label="Login"
                  icon="pi pi-sign-in"
                  class="p-button-primary p-mt-3"
                  @click="login"
              />

              <div align="center" class="p-mt-4 field2">
                <span>or login with</span>
              </div>

              <div class="p-d-flex p-jc-between p-mt-3 social-buttons">
                <Button
                    label="Google"
                    icon="pi pi-google"
                    class="p-button-outlined google"
                    @click="loginWithGoogle"
                />
                <Button
                    label="Apple"
                    icon="pi pi-apple"
                    class="p-button-outlined apple"
                    @click="loginWithApple"
                />
                <Button
                    label="Facebook"
                    icon="pi pi-facebook"
                    class="p-button-outlined facebook"
                    @click="loginWithFacebook"
                />
              </div>
              <div align="center" class="p-mt-4 field2">
                <span>Don't have an account?<br><br> <router-link to="/signup-customer">Sign Up for Customers</router-link>
                  <br><br><router-link to="/signup-technician">Sign Up for Technicians</router-link></span>
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
  .field{
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
    margin-bottom: 7rem;
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

</style>