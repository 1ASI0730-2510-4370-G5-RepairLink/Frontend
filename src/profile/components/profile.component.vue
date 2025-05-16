<script>
import menubar from '@/customer/pages/menubar.component.vue'
import ServiceList from "@/customer/components/service-list.component.vue";
import BookingForm from "@/customer/components/booking-form.component.vue";
import ToastNotification from "@/customer/components/toast-Notification.component.vue";
import ServiceHistory from "@/customer/components/service-history.component.vue";
import ScheduledServices from "@/customer/components/schedule-services.component.vue";
import {Avatar} from "primevue";

export default {
  name: "MyProfilePage",
  components: {
    ToastNotification,
    menubar,
    Avatar
  },
  data(){
    return {
      user: JSON.parse(localStorage.getItem('loggedUser')),
      bookingVisible: false
    };
  },
  methods: {
   logout(){
     localStorage.removeItem('loggedUser');
     this.$router.push('/login');
   }
  },
}

</script>

<template >
  <div class="page-container">
    <menubar class="menubar"/>
    <div class="content-wrapper">
      <Avatar icon="pi pi-user" class="mr-2" size="xlarge"  />
      <h2 style="color: black">User Dashboard</h2>
      <p style="color: black"><strong>Name:</strong> {{ user.name }}</p>
      <p style="color: black"><strong>Email:</strong> {{ user.email }}</p>
      <Button label="Logout"
              @click="logout" class="mt-3"
              style="height: 40px; width: 100px; color: white; border-radius: 20px 20px 20px 20px"> Log Out</Button>
    </div>
  </div>
</template>

<style scoped>
.page-container {
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
  justify-content: center;
  align-items: center;
  background: white;
}

.content-wrapper {
  padding-top:20px;
  border-radius: 20px 20px 20px 20px;
  overflow: scroll;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
  0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 20px;
  background-color: white;
  width: 1300px;
  height: 80vh;
  display: flex;
  flex-direction: column; /* Stack vertically */
  justify-content: center; /* Vertical centering */
  align-items: center; /* Horizontal centering */
  text-align: center; /* Backup for text elements */

}
.content-wrapper::-webkit-scrollbar {
  display: none; /* Chrome/Safari */
}
.menubar {
  position: fixed;
  left: 10px;
  top: 1px;
  width: 250px;
  height: 10vh;
}

</style>
