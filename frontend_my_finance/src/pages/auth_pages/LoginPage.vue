<script setup lang="ts">
import { ref } from 'vue';

import { user_login } from '../../api/auth_request.ts';

const username = ref(''),
      password = ref('');

const login = async () => {
    const response = await user_login ( username.value, password.value );
    document.cookie = `authToken=${response.access_token}; path=/; max-age=3600; secure}`;
};
</script>

<template>
  <InfoComp
  
  />
  <div v-auto-animate class="d-flex justify-content-center align-items-center vh-100">
    <form @submit.prevent="login" class="w-25 p-5 bg-light shadow rounded">
      <h2 class="text-center mb-4">Вход</h2>
      <div class="mb-3">
        <input v-model="username" class="form-control" placeholder="Username" required />
      </div>
      <div>
        <input v-model="password" type="password" class="form-control" placeholder="Password" required />
      </div>
      <input type="submit" class="btn btn-primary w-100 mt-3" value="войти">
      <div class="text-center m-3">
        <p class="mb-0">Нет аккаунта? <br> <router-link to="/register" class="link-primary">Зарегистрируйтесь</router-link></p>
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>
