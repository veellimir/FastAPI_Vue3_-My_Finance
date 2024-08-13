 <template>
    <div  v-auto-animate>
      <form @submit.prevent="login">
        <input v-model="username" placeholder="Username" />
        <input v-model="password" type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>

  <script setup lang="ts">
  import { ref } from 'vue';

  import { user_login } from '../api/post.ts';

  const username = ref('');
  const password = ref('');

  const login = async () => {
    try {
      const response = await user_login(username.value, password.value);
      console.log(response);

      if (response.access_token) {
        document.cookie = `authToken=${response.access_token}; path=/; max-age=3600; secure}`;

      } else {
        console.error('Login successful but no token found in response');
      }
      
    } catch (error) {console.log('Login failed:', error);
    }
  };


</script>

<style scoped>

</style>
