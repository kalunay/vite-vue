<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { useAuthStore } from './stores/auth';
import { computed } from 'vue';

const authStore = useAuthStore();
const router = useRouter();

const token = computed(() => authStore.userInfo.token);

const checkUser = () => {
  const tokens = JSON.parse(localStorage.getItem('userTokens'))
  if(tokens){
    authStore.userInfo.token = tokens.token
    authStore.userInfo.refreshToken = tokens.refreshToken
    authStore.userInfo.expiresIn = tokens.expiresIn
  }
}

const logout = () => {
  authStore.logout()
  localStorage.removeItem('userTokens')
  router.push('/signin')
}

checkUser()
</script>

<template>
    <div class="menu">
      <router-link to="/">Home</router-link>
      <router-link to="/signin" v-if="!token">SingIn</router-link>
      <router-link to="/signup">SingUp</router-link>
      <router-link to="/cars" v-if="token">Cars</router-link>
      <router-link to="/signin" v-if="token" @click:prevent="logout">LogOut</router-link>
    </div>
    <div class="container">
        <RouterView />
    </div>
</template>

<style scoped>
.container {
  margin: auto;
  font-family: 'Arial', sans-serif;
  max-width: 700px;
}
.menu {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 20px;
}

.menu__link {
  color: #000;
  margin: 0 20px;
  font-family: 'Arial', sans-serif;
}
</style>
