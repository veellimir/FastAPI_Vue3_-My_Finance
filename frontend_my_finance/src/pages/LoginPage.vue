<template>
    <div>
      <form @submit.prevent="login">
        <input v-model="username" placeholder="Username" />
        <input v-model="password" type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import axios from 'axios';
  
  const username = ref('');
  const password = ref('');
  
  const login = async () => {
  try {
    const response = await axios.post(
      'http://127.0.0.1:8000/api/v1/auth/login',
      {
        username: 'user@example.com',
        password: 'string'
      },
      {
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      }
    );

    // Выводим весь объект ответа в консоль
    console.log('Login response:', response.data);

    // Проверяем наличие access_token в ответе
    if (response.data && response.data.access_token) {
      // Сохранение токена в cookies
      document.cookie = `authToken=${response.data.access_token}; path=/; max-age=3600; secure`;

      console.log('Login successful and token saved in cookies:', response.data);
    } else {
      console.error('Login successful but no token found in response');
    }
  } catch (error) {
    console.error('Login failed:', error.response ? error.response.data : error.message);
  }
};


</script>

<style scoped>

</style>
