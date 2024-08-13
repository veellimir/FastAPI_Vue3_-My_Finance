 <template>
    <div v-auto-animate class="d-flex justify-content-center align-items-center vh-100">
    <form @submit.prevent="login" class="w-25 p-5 bg-light shadow rounded">
      <h2 class="text-center mb-4">Вход</h2>
      <div class="mb-3">
        <input v-model="username" class="form-control" placeholder="Username" required />
      </div>
      <div class="mb-5">
        <input v-model="password" type="password" class="form-control" placeholder="Password" required />
      </div>
      <input type="submit" class="btn btn-primary w-100 mb-3" value="войти">
    </form>
</div>

  </template>

  <script setup lang="ts">
  import { ref } from 'vue';

  import { user_login } from '../api/post.ts';
  import router from '../router/router.ts';

  const username = ref('');
  const password = ref('');

  const login = async () => {
      const response = await user_login(username.value, password.value);
      document.cookie = `authToken=${response.access_token}; path=/; max-age=3600; secure}`;

      router.push({ name: 'Home' });
  };


</script>

<style scoped>

</style>
