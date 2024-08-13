<script setup lang="ts">
import { ref } from 'vue';

import { user_register } from '../../api/auth_request.ts';


const email = ref(''),
      password = ref('');


const register = async () => { await user_register( email.value, password.value ); };

</script>

<template>
   <div v-auto-animate class="d-flex justify-content-center align-items-center vh-100">
  <form @submit.prevent="register" class="w-25 p-5 bg-light shadow rounded">
    <h2 class="text-center mb-4">Регистрация</h2>
    <div class="mb-3">
      <input v-model="email" type="email" class="form-control" placeholder="Email" required />
    </div>
    <div class="mb-3">
      <input v-model="password" type="password" class="form-control" placeholder="Пароль" required />
    </div>
    <div class="text-center mb-3">
      <input type="submit" class="btn btn-primary w-100" value="Зарегистрироваться" />
    </div>
    <div class="text-center mt-3">
      <p class="mb-0">Уже есть аккаунт? <router-link to="/login" class="link-primary">Войти</router-link></p>
    </div>
  </form>
</div>

</template>